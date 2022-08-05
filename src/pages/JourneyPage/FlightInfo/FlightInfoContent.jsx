import { Stack, Typography } from "@mui/material";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";
import moment from "moment";
import FlightDurationContent from "../../FlightsSelectorPage/FlightSelectorCard/FlightDurationContent";

function FlightInfoContent(props) {
    const pageDimensions = usePageDimensions();
    console.log(props.flight);
    return (
        <Stack
            direction={pageDimensions.width > 1000 ? "row" : "column"}
            width="100%"
            padding={3}
            justifyContent="space-around"
        >
            <Stack direction="column" spacing={1}>
                <Typography
                    padding={0.5}
                    variant="h5"
                    color="#000"
                    sx={{ textTransform: "none !important" }}
                    borderBottom="1px solid #ddd"
                >
                    Flight Number: {props.flight.airlineCode}
                    {props.flight.flightNumber}
                </Typography>
                <Typography
                    variant="h5"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    £{props.flight.price}
                </Typography>
            </Stack>
            {pageDimensions.width > 1000 && (
                <Stack
                    width={"2px"}
                    sx={{ backgroundColor: "#ddd" }}
                    height="80px"
                ></Stack>
            )}
            <Stack
                direction={pageDimensions.width > 675 ? "row" : "column"}
                width={600}
                spacing={pageDimensions.width > 675 ? 5 : 1}
            >
                <Stack direction="column">
                    <Typography
                        variant="subtitle1"
                        color="#000"
                        sx={{ textTransform: "none !important" }}
                    >
                        DEP: {props.flight.departureAirport.city},{" "}
                        {props.flight.departureAirport.country}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#666"
                        sx={{ textTransform: "none !important" }}
                    >
                        {props.flight.departureAirport.name} &nbsp;
                        <Typography
                            component="span"
                            variant="subtitle2"
                            color="primary.main"
                            sx={{ textTransform: "none !important" }}
                        >
                            ({props.flight.departureAirport.iataCode})
                        </Typography>
                    </Typography>
                    <Typography color="#666">
                        {moment(props.flight.departureDate).format("HH:mm")}
                    </Typography>
                </Stack>
                <Stack direction="column" justifyContent="center">
                    {pageDimensions.width > 675 && (
                        <FlightDurationContent
                            duration={props.flight.duration}
                        />
                    )}
                </Stack>
                <Stack direction="column">
                    <Typography
                        variant="subtitle1"
                        color="#000"
                        sx={{ textTransform: "none !important" }}
                    >
                        ARR: {props.flight.arrivalAirport.city},{" "}
                        {props.flight.arrivalAirport.country}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#666"
                        sx={{ textTransform: "none !important" }}
                    >
                        {props.flight.arrivalAirport.name} &nbsp;
                        <Typography
                            component="span"
                            variant="subtitle2"
                            color="primary.main"
                            sx={{ textTransform: "none !important" }}
                        >
                            ({props.flight.arrivalAirport.iataCode})
                        </Typography>
                    </Typography>
                    <Typography color="#666">
                        {moment(props.flight.arrivalDate).format("HH:mm")}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default FlightInfoContent;
