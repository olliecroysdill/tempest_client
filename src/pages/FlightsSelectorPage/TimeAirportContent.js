import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import moment from "moment";

function TimeAirportContent(props, { style }) {
    function convertToTime(date) {
        const formattedDate = moment(date).format("HH:mm");
        console.log(formattedDate);
        return formattedDate;
    }

    return (
        <Stack direction="column">
            <Typography
                variant="h5"
                textAlign={props.alignLeft ? "left" : "right"}
                fontWeight="bold"
            >
                {convertToTime(props.date)}
            </Typography>
            <Typography
                variant="subtitle2"
                fontStyle="oblique"
                textAlign={props.alignLeft ? "left" : "right"}
                fontWeight="light"
            >
                {props.airportCode}
            </Typography>
        </Stack>
    );
}

export default TimeAirportContent;
