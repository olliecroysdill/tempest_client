import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageDimensions from "../../../hooks/usePageDimensions";
import WeatherInfoHeader from "./WeatherInfoHeader";
import WeatherInfoTemperature from "./WeatherInfoTemperature";
import WeatherInfoDescriptionSymbol from "./WeatherInfoDescriptionSymbol";
import WeatherNoDataAvailable from "./WeatherNoDataAvailable";
import server from "../../../axiosConfig";

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
            const response = await server.get("/weather", {
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
            console.log(response.data[0]);
            if (typeof response.data[0] == "undefined") {
                // Todo: please fix
                setWeatherInfo({
                    dayOfYearIso: "2022-08-08T20:00:00Z",
                    temperatureValues: {
                        minTemperature: 16.7,
                        maxTemperature: 21.2,
                        avgTemperature: 19.0
                    },
                    weatherSymbol: {
                        weatherSymbolCode: 17,
                        weatherSymbolDescription: "Clear sky"
                    }
                });
            } else {
                setWeatherInfo(response.data[0]);
            }
        }

        async function getWeatherData() {
            await Promise.all([getWeatherAPIData()]);
        }

        getWeatherData();
        // eslint-disable-next-line
    }, []);

    const pageDimensions = usePageDimensions();
    return (
        <>
            <Stack
                width="100%"
                maxWidth="1280px"
                border="1px solid #ddd"
                sx={{
                    borderRadius: "13px 13px 13px 13px"
                }}
                justifyContent="flex-start"
            >
                <WeatherInfoHeader />
                {/* {moment(weatherInfo.dayOfYearIso).isBefore(
                    moment().add(15, "days")
                ) ? ( */}
                {/* {typeof weatherInfo !== "undefined" ? ( */}
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
                    {pageDimensions.width > 800 && (
                        <Stack
                            width={"2px"}
                            sx={{ backgroundColor: "#ddd" }}
                            height="80px"
                        ></Stack>
                    )}{" "}
                    <WeatherInfoTemperature
                        title="TEMPERATURES"
                        maxTemp={weatherInfo.temperatureValues.maxTemperature}
                        minTemp={weatherInfo.temperatureValues.minTemperature}
                        avgTemp={weatherInfo.temperatureValues.avgTemperature}
                    />
                </Stack>
                {/* ) : (
                    <>
                        <WeatherNoDataAvailable
                            title="No data available at this point in time."
                            weatherSymbolCode={17}
                        />
                    </>
                )} */}
            </Stack>
        </>
    );
}

export default WeatherInfo;
