import { Typography } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import FlightSelectorList from "./FlightSelectorList";

function FlightsSelectorPage() {
    return (
        <>
            <Navigation />
            <FlightSelectorList />
        </>
    );
}

export default FlightsSelectorPage;
