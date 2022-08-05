import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WeatherSymbols from "./WeatherSymbols";

function WeatherNoDataAvailable(props) {
    return (
        <Stack
            padding={4}
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            style={{ opacity: "30%" }}
        >
            <Typography variant="subtitle1" color="#000" fontStyle="italic">
                {props.title}
            </Typography>
            {/* <img
                    src={WeatherSymbols[props.weatherSymbolCode].src}
                    alt="weather-symbol"
                    width={75}
                /> */}
        </Stack>
    );
}

export default WeatherNoDataAvailable;
