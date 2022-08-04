import {
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography
} from "@mui/material";
import React from "react";
import TimeAirportContent from "./TimeAirportContent";
import FlightDurationContent from "./FlightDurationContent";

function FlightSelectorCard(props) {
    return (
        <Card
            // className={props.isDisabled?.classes.cardX}
            style={{
                pointerEvents: props.isDisabled ? "none" : "auto",
                border: props.isSelected
                    ? "2px solid #1cc4fc"
                    : "1px solid #ddd",
                backgroundColor: props.isDisabled ? "#eee" : "white",
                opacity: props.isDisabled ? "30%" : "100%",
                boxShadow: "none",
                margin: props.isSelected ? "8px" : "9px"
            }}
            onClick={() => {
                props.onSelectFlight(props.flight);
            }}
            sx={{
                width: "100%"
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Stack
                        spacing={1}
                        paddingX={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack width={80} maxWidth={80}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                {props.flight.airlineCode?.toUpperCase()}
                                {props.flight.flightNumber}
                            </Typography>
                            <Typography variant="subtitle2" fontStyle="oblique">
                                £{props.flight.price}
                            </Typography>
                        </Stack>
                        <Stack
                            width={"2px"}
                            sx={{ backgroundColor: "#ddd" }}
                            height="80px"
                        ></Stack>
                        <Stack
                            width={300}
                            maxWidth={300}
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <TimeAirportContent
                                airportName={props.flight.departureAirport.name}
                                airportCode={
                                    props.flight.departureAirport.iataCode
                                }
                                date={props.flight.departureDate}
                                alignLeft={false}
                            />
                            <FlightDurationContent
                                duration={props.flight.duration}
                            />
                            <TimeAirportContent
                                airportName={props.flight.arrivalAirport.name}
                                align={props.flight.align}
                                airportCode={
                                    props.flight.arrivalAirport.iataCode
                                }
                                date={props.flight.arrivalDate}
                                alignLeft={true}
                            />
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default FlightSelectorCard;
