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
                    ? "1px solid #1cc4fc"
                    : "1px solid rgba(255,255,255,0)",
                backgroundColor: props.isDisabled ? "lightgrey" : "white"
            }}
            onClick={() => {
                props.onSelectFlight(props.flight);
            }}
            sx={{
                width: "100%",
                marginTop: 1,
                marginBottom: 1
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Stack
                        spacing={5}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {props.flight.airlineCode?.toUpperCase()}
                        </Typography>
                        <TimeAirportContent
                            airportCode={props.flight.departureAirportCode}
                            date={props.flight.departureDate}
                            alignLeft={false}
                        />
                        <FlightDurationContent
                            duration={props.flight.duration}
                        />
                        <TimeAirportContent
                            align={props.flight.align}
                            airportCode={props.flight.arrivalAirportCode}
                            date={props.flight.arrivalDate}
                            alignLeft={true}
                        />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default FlightSelectorCard;
