import React from "react";
import Carousel from "react-material-ui-carousel";

function LandingPageCarouselContainer(props) {
    return (
        <Carousel
            navButtonsAlwaysVisible={true}
            sx={{
                width: "100%",
                height: "calc(100vh - 60px)"
            }}
            autoPlay={false}
            animation="slide"
            duration={1000}
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
            {props.children}
        </Carousel>
    );
}

export default LandingPageCarouselContainer;
