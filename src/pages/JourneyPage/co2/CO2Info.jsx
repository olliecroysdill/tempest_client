import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageDimensions from "../../../hooks/usePageDimensions";
import CO2InfoContent from "./CO2InfoContent";
import CO2InfoHeader from "./CO2InfoHeader";
import axios from "axios";

function CO2Info() {
    const location = useLocation();
    const [returnFlightCO2Info, setReturnFlightCO2Info] = useState({
        co2Footprint: 0,
        co2OffsetAmount: 0,
        co2OffsetURL: ""
    });
    const [outboundFlightCO2Info, setOutboundFlightCO2Info] = useState({
        co2Footprint: 0,
        co2OffsetAmount: 0,
        co2OffsetURL: ""
    });

    useEffect(() => {
        async function getCO2DataForOutbound() {
            const response = await axios.get(
                "http://localhost:8080/co2-offset",
                {
                    params: {
                        airportCodeFrom:
                            location.state.journey.outboundFlight
                                .departureAirport.iataCode,
                        airportCodeTo:
                            location.state.journey.outboundFlight.arrivalAirport
                                .iataCode,
                        cabinClass: "economy"
                    },
                    headers: {
                        Authorization: sessionStorage.getYourWay_session_token
                    }
                }
            );
            setOutboundFlightCO2Info(response.data);
        }

        async function getCO2DataForReturn() {
            const response = await axios.get(
                "http://localhost:8080/co2-offset",
                {
                    params: {
                        airportCodeFrom:
                            location.state.journey.returnFlight.departureAirport
                                .iataCode,
                        airportCodeTo:
                            location.state.journey.returnFlight.arrivalAirport
                                .iataCode,
                        cabinClass: "economy"
                    },
                    headers: {
                        Authorization: sessionStorage.getYourWay_session_token
                    }
                }
            );
            setReturnFlightCO2Info(response.data);
        }

        async function getCO2Data() {
            await Promise.all([getCO2DataForOutbound(), getCO2DataForReturn()]);
        }

        getCO2Data();
    }, []);

    const pageDimensions = usePageDimensions();
    return (
        <Stack
            width="100%"
            maxWidth="1280px"
            border="1px solid #ddd"
            sx={{
                borderRadius: "13px 13px 13px 13px"
            }}
        >
            <CO2InfoHeader />
            <Stack
                padding={2}
                direction={pageDimensions.width > 800 ? "row" : "column"}
                width="100%"
                spacing={pageDimensions.width > 800 ? 5 : 2}
                alignItems="center"
            >
                <CO2InfoContent
                    title="OUTBOUND"
                    co2Footprint={outboundFlightCO2Info.co2Footprint}
                    co2OffsetAmount={
                        outboundFlightCO2Info.co2OffsetAmount / 100
                    }
                />
                {pageDimensions.width > 800 && (
                    <Stack
                        width={"2px"}
                        sx={{ backgroundColor: "#ddd" }}
                        height="80px"
                    ></Stack>
                )}
                <CO2InfoContent
                    title="RETURN"
                    co2Footprint={returnFlightCO2Info.co2Footprint}
                    co2OffsetAmount={returnFlightCO2Info.co2OffsetAmount / 100}
                />
                {pageDimensions.width > 800 && (
                    <Stack
                        width={"2px"}
                        sx={{ backgroundColor: "#ddd" }}
                        height="80px"
                    ></Stack>
                )}
                <CO2InfoContent
                    title="TOTAL"
                    co2Footprint={
                        outboundFlightCO2Info.co2Footprint +
                        returnFlightCO2Info.co2Footprint
                    }
                    co2OffsetAmount={
                        (outboundFlightCO2Info.co2OffsetAmount +
                            returnFlightCO2Info.co2OffsetAmount) /
                        100
                    }
                />
            </Stack>
            <Stack padding={2} direction="row">
                <Typography variant="body1" color="#666" component="span">
                    Please click to make a donation to offset your emissions for
                    your &nbsp;
                </Typography>
                <a
                    href={outboundFlightCO2Info.co2OffsetURL}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        variant="body1"
                        color="primary.main"
                        component="span"
                    >
                        Outbound Flight &nbsp;
                    </Typography>
                </a>
                <Typography variant="body1" color="#666" component="span">
                    or &nbsp;
                </Typography>
                <a
                    href={returnFlightCO2Info.co2OffsetURL}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        variant="body1"
                        color="primary.main"
                        component="span"
                    >
                        Return Flight
                    </Typography>
                </a>
            </Stack>
        </Stack>
    );
}

export default CO2Info;
