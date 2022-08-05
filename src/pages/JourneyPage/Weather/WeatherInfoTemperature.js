import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";

function WeatherInfoContent(props) {
    const pageDimensions = usePageDimensions();
    return (
        <Stack
            padding={1}
            direction="column"
            alignItems="center"
            width="100%"
            height="13vh"
        >
            <Box pb={1}>
                <Typography variant="subtitle1" color="#000">
                    {props.title}
                </Typography>
            </Box>
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Stack alignItems="center">
                    <Typography
                        variant="subtitle1"
                        color="#666"
                        sx={{
                            textTransform: "none !important",
                            fontWeight: "bold"
                        }}
                    >
                        Minimum
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#666"
                        sx={{ textTransform: "none !important" }}
                    >
                        {props.minTemp + "\u00b0C"}
                    </Typography>
                </Stack>
                {pageDimensions.width > 800 && (
                    <Stack
                        width={"1px"}
                        sx={{ backgroundColor: "#ddd" }}
                        height="50px"
                    ></Stack>
                )}{" "}
                <Stack alignItems="center">
                    <Typography
                        variant="subtitle1"
                        color="#666"
                        sx={{
                            textTransform: "none !important",
                            fontWeight: "bold"
                        }}
                    >
                        Average
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#666"
                        sx={{ textTransform: "none !important" }}
                    >
                        {props.avgTemp + "\u00b0C"}
                    </Typography>
                </Stack>
                {pageDimensions.width > 800 && (
                    <Stack
                        width={"1px"}
                        sx={{ backgroundColor: "#ddd" }}
                        height="50px"
                    ></Stack>
                )}{" "}
                <Stack alignItems="center">
                    <Typography
                        variant="subtitle1"
                        color="#666"
                        sx={{
                            textTransform: "none !important",
                            fontWeight: "bold"
                        }}
                    >
                        Maximum
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#666"
                        sx={{ textTransform: "none !important" }}
                    >
                        {props.maxTemp + "\u00b0C"}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default WeatherInfoContent;
