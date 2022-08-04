import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import moment from "moment";

function TimeAirportContent(props) {
    function convertToTime(date) {
        const formattedDate = moment(date).format("HH:mm");
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
                {props.airportName} &nbsp;{" "}
                <Typography
                    component="span"
                    variant="subtitle2"
                    color="primary.main"
                    sx={{ textTransform: "none !important" }}
                >
                    ({props.airportCode})
                </Typography>
            </Typography>
        </Stack>
    );
}

export default TimeAirportContent;

{
    /* <Typography
                    variant="subtitle2"
                    color="#666"
                    sx={{ textTransform: "none !important" }}
                >
                    DEP: {props.data.departureAirport.name} &nbsp;
                    <Typography
                        component="span"
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ textTransform: "none !important" }}
                    >
                        ({props.data.departureAirport.iataCode})
                    </Typography>
                </Typography> */
}
