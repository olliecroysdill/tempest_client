import { Stack, Typography } from "@mui/material";
import React from "react";
import WeatherSymbols from "./WeatherSymbols";

function WeatherInfoDescriptionSymbol(props) {
    function capitaliseFirstLetters(description) {
        var splitStr = description.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(" ");
    }
    return (
        <Stack
            padding={1}
            direction="column"
            alignItems="flex-start"
            width="30%"
            height="100%"
        >
            <Typography variant="subtitle1" color="#000">
                {props.title}
            </Typography>
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    {props.weatherSymbolDescription}
                </Typography>
                <img
                    src={WeatherSymbols[props.weatherSymbolCode].src}
                    alt="weather-symbol"
                    width={75}
                />
            </Stack>
        </Stack>
    );
}

export default WeatherInfoDescriptionSymbol;
