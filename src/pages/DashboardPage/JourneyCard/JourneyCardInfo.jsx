import React from "react";
import { Stack, Typography } from "@mui/material";
import moment from "moment";

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
                    DEP: {props.data.departureCity} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.departureAirportCode})
                    </Typography>
                </Typography>
                <Typography color="#666">
                    {moment(props.data.departureDate).hours()}:
                    {moment(props.data.departureDate).minutes()}
                </Typography>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    ARR: {props.data.arrivalCity} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.arrivalAirportCode})
                    </Typography>
                </Typography>
                <Typography color="#666">
                    {moment(props.data.arrivalDate).hours()}:
                    {moment(props.data.arrivalDate).minutes()}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default JourneyCardInfo;