import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageDimensions from "../../../hooks/usePageDimensions";
import axios from "axios";
import WeatherInfoHeader from "./WeatherInfoHeader";
import WeatherInfoContent from "./WeatherInfoContent";
import WeatherInfoDescriptionSymbol from "./WeatherInfoDescriptionSymbol";

function WeatherInfo() {
    const location = useLocation();
    const [weatherInfo, setWeatherInfo] = useState({
        dayOfYearIso: "",
        temperatureValues: {
            minTemperature: 0,
            maxTemperature: 0,
            avgTemperature: 0
        },
        weatherSymbol: {
            weatherSymbolCode: 0,
            weatherSymbolDescription: ""
        }
    });

    useEffect(() => {
        async function getWeatherAPIData() {
            const response = await axios.get("http://localhost:8080/weather", {
                params: {
                    latitude:
                        location.state.journey.outboundFlight.arrivalAirport
                            .latitude,
                    longitude:
                        location.state.journey.outboundFlight.arrivalAirport
                            .longitude,
                    dateTimeFrom:
                        location.state.journey.outboundFlight.arrivalDate,
                    dateTimeTo:
                        location.state.journey.returnFlight.departureDate
                },
                headers: {
                    Authorization: sessionStorage.getYourWay_session_token
                }
            });
            setWeatherInfo(response.data[0]); // only getting arrival day's weather
        }

        async function getWeatherData() {
            await Promise.all([getWeatherAPIData()]);
        }

        getWeatherData();
    }, []);

    const pageDimensions = usePageDimensions();
    return (
        <Stack
            width="100%"
            maxWidth="1280px"
            border="1px solid #ddd"
            sx={{
                borderRadius: "13px 13px 13px 13px"
            }}
        >
            <WeatherInfoHeader />
            <Stack
                padding={2}
                direction={pageDimensions.width > 800 ? "row" : "column"}
                width="100%"
                spacing={pageDimensions.width > 800 ? 5 : 2}
                alignItems="center"
            >
                <WeatherInfoDescriptionSymbol
                    title="DESCRIPTION"
                    weatherSymbolCode={
                        weatherInfo.weatherSymbol.weatherSymbolCode
                    }
                    weatherSymbolDescription={
                        weatherInfo.weatherSymbol.weatherSymbolDescription
                    }
                />
            </Stack>
        </Stack>
    );
}

export default WeatherInfo;
