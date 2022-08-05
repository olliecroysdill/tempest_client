import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import CO2Info from "./co2/CO2Info";
import FlightInfo from "./FlightInfo/FlightInfo";
import WeatherInfo from "./Weather/WeatherInfo";

function JourneyPage() {
    const location = useLocation();

    return (
        <Stack direction="column" alignItems="center">
            <Navigation />

            <Stack maxWidth="1280px" width="100%" padding={3} spacing={3}>
                <Typography variant="h4">
                    {location.state.journey.journeyName}
                </Typography>
                <FlightInfo />
                {/* <WeatherInfo /> */}
                <CO2Info />
            </Stack>
        </Stack>
    );
}

export default JourneyPage;
