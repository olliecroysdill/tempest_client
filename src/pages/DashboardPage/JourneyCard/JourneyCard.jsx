import { Button, Stack } from "@mui/material";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";
import JourneyCardHeader from "./JourneyCardHeader";
import JourneyCardInfo from "./JourneyCardInfo";

function JourneyCard(props) {
    const pageDimensions = usePageDimensions();

    return (
        <Button sx={{ padding: 0, borderRadius: "13px" }}>
            <Stack
                width="100%"
                maxWidth="1280px"
                border="1px solid #ddd"
                sx={{ borderRadius: "13px 13px 13px 13px", cursor: "pointer" }}
            >
                <JourneyCardHeader
                    title={props.title}
                    departureDate={props.departureDate}
                    returnDate={props.returnDate}
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
                        data={props.outboundFlight}
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
                        data={props.returnFlight}
                    />
                </Stack>
            </Stack>
        </Button>
    );
}

export default JourneyCard;
