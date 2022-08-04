import { Stack } from "@mui/material";
import React, { useState } from "react";
import FlightInfoContent from "./FlightInfoContent";
import FlightInfoHeader from "./FlightInfoHeader";

function FlightInfo() {
    const [fligtSelected, setFlightSelected] = useState("outbound");

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
                selected={fligtSelected}
            />
            <FlightInfoContent />
        </Stack>
    );
}

export default FlightInfo;
