import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "./CarouselItem.module.css";

function CarouselItem(props) {
    const [showInformation, setShowInformation] = useState(false);

    function filmClickedHandler() {
        if (showInformation) {
            console.log("navigating to flights form");
        } else {
            setShowInformation(true);
        }
    }

    return (
        <Button
            variant="contained"
            fullWidth={true}
            className={classes["carousel-item-container"]}
            sx={{ padding: 0, borderRadius: "0px" }}
            onClick={filmClickedHandler}
        >
            <img
                className={classes["background-image"]}
                src={props.image}
                alt="house of the dragon"
            />
            <Stack
                className={`${classes["information-overlay"]} ${
                    showInformation ? classes[`visible`] : ""
                }`}
                bgcolor="primary.main"
            >
                <Stack className={classes["text-container"]} spacing={2}>
                    <Typography variant="h4" border="1px solid white">
                        {props.title?.toUpperCase()}
                    </Typography>
                    <Typography variant="h4" border="1px solid white">
                        {props.location?.toUpperCase()}
                    </Typography>
                </Stack>
            </Stack>
        </Button>
    );
}

export default CarouselItem;