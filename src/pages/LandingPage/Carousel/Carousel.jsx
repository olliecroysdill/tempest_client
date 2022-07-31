import { Box, Stack } from "@mui/material";
import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import Carousel from "react-material-ui-carousel";
import houseOfDragonImage from "./../../../assets/houseOfDragon.webp";
import westworldImage from "./../../../assets/Westworld.jpeg";
import spiderManImage from "./../../../assets/SpiderMan.jpeg";
import LondonImage from "./../../../assets/LondonPhoto.jpeg";

function LandingPageCarousel() {
    return (
        <Stack alignItems="center" width="100%" height="calc(100vh - 60px)">
            <Carousel
                navButtonsAlwaysVisible={true}
                sx={{
                    width: "100%",
                    height: "calc(100vh - 60px)"
                }}
                autoPlay={false}
                animation="slide"
                duration="1000"
                indicators={true}
                indicatorContainerProps={{
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: "92%",
                        transform: "translateX(-50%)",
                        zIndex: 300,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        width: "50px",
                        borderRadius: "10px"
                    }
                }}
            >
                <Stack direction="row" alignItems="center">
                    <CarouselItem
                        image={spiderManImage}
                        title="Spiderman No Way Home"
                        location="London"
                        locationImage={LondonImage}
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
                <Stack direction="row" alignItems="center">
                    <CarouselItem
                        image={spiderManImage}
                        title="Spiderman No Way Home"
                        location="London"
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
                <Stack direction="row" alignItems="center">
                    <CarouselItem
                        image={spiderManImage}
                        title="Spiderman No Way Home"
                        location="London"
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
        </Stack>
    );
}

export default LandingPageCarousel;
