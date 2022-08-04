import React from "react";
import { Stack, Typography } from "@mui/material";
import moment from "moment";

function JourneyCardInfo(props) {
    console.log(props.data);
    return (
        <Stack
            padding={1}
            direction="column"
            alignItems="flex-start"
            width="100%"
        >
            <Typography variant="subtitle1" color="#000">
                {props.title}
            </Typography>
            <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    DEP: {props.data.departureAirport.name} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.departureAirport.iataCode})
                    </Typography>
                </Typography>
                <Typography color="#666">
                    {moment(props.data.departureDate).format("HH:mm")}
                </Typography>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    ARR: {props.data.arrivalAirport.name} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.arrivalAirport.iataCode})
                    </Typography>
                </Typography>
                <Typography color="#666">
                    {moment(props.data.arrivalDate).format("HH:mm")}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default JourneyCardInfo;
