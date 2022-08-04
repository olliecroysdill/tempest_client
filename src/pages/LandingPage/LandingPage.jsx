import React from "react";
import LandingPageCarousel from "./Carousel/LandingPageCarousel";
import Navigation from "../../Components/Navigation/Navigation";
import { Stack } from "@mui/material";

function LandingPage() {
    return (
        <>
            <Navigation />
            <Stack alignItems="center">
                <LandingPageCarousel />
            </Stack>
        </>
    );
}

export default LandingPage;
