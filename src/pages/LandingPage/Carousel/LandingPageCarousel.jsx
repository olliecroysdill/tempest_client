import { Stack } from "@mui/material";
import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import CarouselItemMobile from "./CarouselItem/CarouselItemMobile";
import LandingPageCarouselContainer from "./LandingPageCarouselContainer";
import usePageDimensions from "../../../hooks/usePageDimensions";
import { filmDataArray } from "./CarouselFilmData";
import landingPageImg from "../../../assets/LandingImage.png";

function LandingPageCarousel() {
    const pageDimensions = usePageDimensions();
    const numberOfFilmsPerScreen = getNumberOfFilmsPerScreen(pageDimensions);
    const transformedFilmDataArray = transformFilmsArrayToMultiArray(
        filmDataArray,
        numberOfFilmsPerScreen
    );
    return (
        <Stack alignItems="center" width="100%" height="calc(100vh - 60px)">
            <LandingPageCarouselContainer>
                {[
                    <Stack
                        width="100%"
                        overflow="hidden"
                        height="calc(100vh - 60px)"
                        justifyContent="center"
                        alignItems="center"
                        paddingTop="40px"
                    >
                        <img
                            src={landingPageImg}
                            width="102%"
                            alt="landingPage"
                        />
                    </Stack>,
                    ...transformedFilmDataArray.map((filmArray, index) => (
                        <Stack
                            direction="row"
                            alignItems="center"
                            key={`filmPage_${index}`}
                        >
                            {filmArray.map((filmData, index) => {
                                if (numberOfFilmsPerScreen >= 3)
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
                    ))
                ]}
            </LandingPageCarouselContainer>
        </Stack>
    );
}

export default LandingPageCarousel;

//----------------------------------
//UTILITY FUNCTIONS USED IN COMPONENT
//----------------------------------

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
