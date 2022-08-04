import { Stack, Typography } from "@mui/material";
import React from "react";

function CO2InfoHeader() {
    return (
        <Stack
            width="100%"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{
                backgroundColor: "#eee",
                borderRadius: " 12px 12px 0px 0px"
            }}
        >
            <Stack
                width="100%"
                direction="row"
                justifyContent={"center"}
                paddingLeft={2}
                paddingRight={2}
                paddingTop={1}
                paddingBottom={1}
            >
                <Typography variant="h5" color="#666">
                    Environmental Impact
                </Typography>
            </Stack>
        </Stack>
    );
}

export default CO2InfoHeader;
