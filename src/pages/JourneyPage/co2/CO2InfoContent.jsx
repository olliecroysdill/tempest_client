import { Stack, Typography } from "@mui/material";
import React from "react";

function CO2InfoContent(props) {
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
                    {props.co2Footprint}kg CO2e
                </Typography>
                <Typography color="#666">
                    £{props.co2OffsetAmount?.toFixed(2)}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default CO2InfoContent;
