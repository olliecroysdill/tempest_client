import React from "react";
import Carousel from "./Carousel/Carousel";
import Navigation from "../../Components/Navigation/Navigation";
import { Button, Stack } from "@mui/material";

function LandingPage() {
    return (
        <>
            <Navigation />
            <Stack alignItems="center">
                <Carousel />
            </Stack>
        </>
    );
}

export default LandingPage;
