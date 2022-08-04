import { Stack, Typography } from "@mui/material";
import React from "react";

function CO2InfoContent() {
    return (
        <Stack
            padding={1}
            direction="column"
            alignItems="flex-start"
            width="100%"
        >
            <Typography variant="subtitle1" color="#000">
                OUTBOUND
            </Typography>
            <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    500kg CO2e
                </Typography>
                <Typography color="#666">CO2 price</Typography>
            </Stack>
        </Stack>
    );
}

export default CO2InfoContent;
