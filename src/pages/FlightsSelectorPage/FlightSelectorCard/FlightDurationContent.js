import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import FlightIcon from "@mui/icons-material/Flight";

export const useStyles = makeStyles(() =>
    createStyles({
        rotateIcon: {
            transform: "rotate(90deg)"
        }
    })
);

function convertToHours(duration) {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration % 3600) / 60);
    return hours + "h " + minutes;
}

function FlightDurationContent(props) {
    const classes = useStyles();
    return (
        <Stack direction="column" alignItems="center">
            <Typography fontSize={11}>
                {convertToHours(props.duration)}
            </Typography>
            <FlightIcon
                transform="rotate(180deg)"
                className={classes.rotateIcon}
            />
        </Stack>
    );
}

export default FlightDurationContent;
