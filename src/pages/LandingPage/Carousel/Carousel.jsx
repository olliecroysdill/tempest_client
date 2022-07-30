import { Stack } from "@mui/material";
import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import Carousel from "react-material-ui-carousel";
import houseOfDragonImage from "./../../../assets/houseOfDragon.webp";
import westworldImage from "./../../../assets/Westworld.jpeg";

function LandingPageCarousel() {
    return (
        <Carousel
            navButtonsAlwaysVisible={true}
            sx={{ width: "90%", overflow: "visible" }}
            autoPlay={false}
            animation="slide"
            duration="1000"
            navButtonsProps={{
                // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    width: "60px",
                    height: "100%",
                    borderRadius: "0px"
                }
            }}
            navButtonsWrapperProps={{
                // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    left: "100%",
                    transform: "translateY(-50%)",
                    height: "calc(100vh - 60px)"
                }
            }}
        >
            <Stack direction="row" alignItems="center">
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="barcelona"
                />
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="paris"
                />
                <CarouselItem
                    image={houseOfDragonImage}
                    title="House of the Dragon"
                    location="new york"
                />
            </Stack>
            <Stack direction="row" width="auto" alignItems="center">
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="barcelona"
                />
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="paris"
                />
                <CarouselItem
                    image={houseOfDragonImage}
                    title="House of the Dragon"
                    location="new york"
                />
            </Stack>
            <Stack direction="row" width="auto" alignItems="center">
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="barcelona"
                />
                <CarouselItem
                    image={westworldImage}
                    title="Westworld"
                    location="paris"
                />
                <CarouselItem
                    image={houseOfDragonImage}
                    title="House of the Dragon"
                    location="new york"
                />
            </Stack>
        </Carousel>
    );
}

export default LandingPageCarousel;
