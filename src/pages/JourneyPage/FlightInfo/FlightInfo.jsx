import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FlightInfoContent from "./FlightInfoContent";
import FlightInfoHeader from "./FlightInfoHeader";

function FlightInfo() {
    const [flightSelected, setFlightSelected] = useState("outbound");
    const location = useLocation();

    return (
        <Stack
            width="100%"
            maxWidth="1280px"
            border="1px solid #ddd"
            sx={{
                borderRadius: "13px 13px 13px 13px"
            }}
        >
            <FlightInfoHeader
                setSelected={(newSelected) => {
                    setFlightSelected(newSelected);
                }}
                selected={flightSelected}
            />
            <FlightInfoContent
                flight={
                    flightSelected === "outbound"
                        ? location.state.journey.outboundFlight
                        : location.state.journey.returnFlight
                }
            />
        </Stack>
    );
}

export default FlightInfo;
