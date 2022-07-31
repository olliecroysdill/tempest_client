import { Stack } from "@mui/material";
import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import Carousel from "react-material-ui-carousel";
import usePageDimensions from "../../../hooks/usePageDimensions";
import houseOfDragonImage from "./../../../assets/houseOfDragon.webp";
import westworldImage from "./../../../assets/Westworld.jpeg";
import spiderManImage from "./../../../assets/SpiderMan.jpeg";
import CarouselItemMobile from "./CarouselItem/CarouselItemMobile";

const filmDataArray = [
    {
        title: "Spiderman No Way Home",
        location: "London",
        image: spiderManImage
    },
    {
        title: "Westworld",
        location: "New York",
        image: westworldImage
    },
    {
        title: "House of the Dragon",
        location: "Paris",
        image: houseOfDragonImage
    },
    {
        title: "Spiderman No Way Home",
        location: "London",
        image: spiderManImage
    },
    {
        title: "Westworld",
        location: "New York",
        image: westworldImage
    },
    {
        title: "House of the Dragon",
        location: "Paris",
        image: houseOfDragonImage
    }
];

function LandingPageCarousel() {
    const pageDimensions = usePageDimensions();
    const numberOfFilmsPerScreen = getNumberOfFilmsPerScreen(pageDimensions);
    const transformedFilmDataArray = transformFilmsArrayToMultiArray(
        filmDataArray,
        numberOfFilmsPerScreen
    );
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
                        backgroundColor: "rgba(255,255,255,0.7)",
                        width: "auto",
                        padding: "5px",
                        borderRadius: "10px"
                    }
                }}
            >
                {transformedFilmDataArray.map((filmArray, index) => (
                    <Stack
                        direction="row"
                        alignItems="center"
                        key={`filmPage_${index}`}
                    >
                        {filmArray.map((filmData, index) => {
                            if (numberOfFilmsPerScreen === 3)
                                return (
                                    <CarouselItem
                                        title={filmData.title}
                                        location={filmData.location}
                                        image={filmData.image}
                                        key={`filmItem_${index}`}
                                    />
                                );
                            else
                                return (
                                    <CarouselItemMobile
                                        title={filmData.title}
                                        location={filmData.location}
                                        image={filmData.image}
                                        key={`filmItem_${index}`}
                                    />
                                );
                        })}
                    </Stack>
                ))}
            </Carousel>
        </Stack>
    );
}

export default LandingPageCarousel;

//UTILITY FUNCTIONS USED IN COMPONENT

function getNumberOfFilmsPerScreen(pageDimesions) {
    if (pageDimesions.width > 900) return 3;
    if (pageDimesions.width > 450) return 2;
    else return 1;
}

function transformFilmsArrayToMultiArray(
    filmDataArray,
    numberOfFilmsPerScreen
) {
    let outputArr = [];
    let arrToPush = [];
    for (let i = 0; i < filmDataArray.length; i++) {
        if (i % numberOfFilmsPerScreen === 0 && arrToPush.length > 0) {
            outputArr.push(arrToPush);
            arrToPush = [];
        }
        arrToPush.push(filmDataArray[i]);
        if (i === filmDataArray.length - 1) {
            outputArr.push(arrToPush);
        }
    }
    return outputArr;
}
