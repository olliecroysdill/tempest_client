import { Stack, Typography } from "@mui/material";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";

function JourneyCardHeader(props) {
    const pageDimensions = usePageDimensions();
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
                direction={pageDimensions.width < 600 ? "column" : "row"}
                justifyContent={"space-between"}
                paddingLeft={2}
                paddingRight={2}
                paddingTop={1}
                paddingBottom={1}
                spacing={pageDimensions.width < 600 ? 1 : 2}
            >
                <Typography variant="h5" color="#666">
                    {props.title}
                </Typography>

                <Typography paddingTop={0.5} variant="subtitle1" color="#666">
                    {props.departureDate}&nbsp;-&nbsp;{props.returnDate}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default JourneyCardHeader;
