import {
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";
import React, { useState } from "react";
import TimeAirportContent from "./TimeAirportContent";
import FlightIcon from "@mui/icons-material/Flight";
import FlightDurationContent from "./FlightDurationContent";
import { alpha } from "@mui/material";

export const useStyles = makeStyles(() =>
    createStyles({
        rotateIcon: {
            transform: "rotate(90deg)"
        },
        cardX: {
            "&:hover": {
                pointerEvents: "none",
                transform: "translateY(-5px) !important"
            }
        }
    })
);

function FlightSelectorCard(props) {
    const classes = useStyles();
    const [isSelected, setIsSelected] = useState(false);

    function handleIsSelected() {
        if (isSelected) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
    }

    return (
        <Card
            style={{
                border: isSelected
                    ? "1px solid #db4a1e"
                    : "1px solid rgba(255,255,255,0)"
            }}
            onClick={handleIsSelected}
            sx={{
                width: "100%",
                marginTop: 1,
                marginBottom: 1
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Stack
                        spacing={5}
                        direction="row"
                        alignItems="center"
                        padding={1}
                        paddingRight={10}
                        paddingLeft={6}
                    >
                        <Typography
                            variant="h6"
                            border="1px solid white"
                            sx={{ fontWeight: "bold" }}
                        >
                            {props.airlineCode?.toUpperCase()}
                        </Typography>
                        <TimeAirportContent
                            airportCode={props.departureAirportCode}
                            date={props.departureDate}
                            alignLeft={false}
                        />
                        <FlightDurationContent duration={props.duration} />
                        <TimeAirportContent
                            align={props.align}
                            airportCode={props.arrivalAirportCode}
                            date={props.arrivalDate}
                            alignLeft={true}
                        />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
        //     {/* </Box>
        // </Button> */}
    );
}

export default FlightSelectorCard;
