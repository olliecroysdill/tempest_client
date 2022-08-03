import React from "react";
import { Stack, Typography } from "@mui/material";

function JourneyCardInfo(props) {
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
                    DEP: {props.data.departureAirportName} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.departureAirportCode})
                    </Typography>
                </Typography>
                <Typography color="#666">{props.data.departureTime}</Typography>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    ARR: {props.data.arrivalAirportName} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.arrivalAirportCode})
                    </Typography>
                </Typography>
                <Typography color="#666">{props.data.arrivalTime}</Typography>
            </Stack>
        </Stack>
    );
}

export default JourneyCardInfo;
