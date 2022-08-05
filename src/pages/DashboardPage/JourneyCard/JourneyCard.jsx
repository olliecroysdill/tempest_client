import { Button, Stack } from "@mui/material";
import moment from "moment";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";
import JourneyCardHeader from "./JourneyCardHeader";
import JourneyCardInfo from "./JourneyCardInfo";
import { useNavigate } from "react-router-dom";

function JourneyCard(props) {
    const pageDimensions = usePageDimensions();

    const navigate = useNavigate();
    function handleNavigateToJourneyPage() {
        navigate("/journey", {
            state: {
                journey: props.journey
            }
        });
    }

    return (
        <Button
            sx={{ padding: 0, borderRadius: "13px" }}
            onClick={handleNavigateToJourneyPage}
        >
            <Stack
                width="100%"
                maxWidth="1280px"
                border="1px solid #ddd"
                sx={{
                    borderRadius: "13px 13px 13px 13px",
                    cursor: "pointer"
                }}
            >
                <JourneyCardHeader
                    title={props.journey.journeyName}
                    departureDate={moment(
                        props.journey.outboundFlight.departureDate
                    ).format("DD/MM/YYYY")}
                    returnDate={moment(
                        props.journey.returnFlight.arrivalDate
                    ).format("DD/MM/YYYY")}
                />
                <Stack
                    padding={2}
                    direction={pageDimensions.width > 800 ? "row" : "column"}
                    width="100%"
                    spacing={pageDimensions.width > 800 ? 5 : 2}
                    alignItems="center"
                >
                    <JourneyCardInfo
                        title="Outbound:"
                        data={props.journey.outboundFlight}
                    />
                    {pageDimensions.width > 800 && (
                        <Stack
                            width={"2px"}
                            sx={{ backgroundColor: "#ddd" }}
                            height="80px"
                        ></Stack>
                    )}
                    <JourneyCardInfo
                        title="Return:"
                        data={props.journey.returnFlight}
                    />
                </Stack>
            </Stack>
        </Button>
    );
}

export default JourneyCard;
