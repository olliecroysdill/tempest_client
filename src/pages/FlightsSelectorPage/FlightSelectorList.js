import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FlightSelectorCard from "./FlightSelectorCard/FlightSelectorCard";

function FlightSelectorList() {
    const location = useLocation();
    const outgoingFlightsList = location.state?.outboundFlights;
    const returnFlightsList = location.state?.returnFlights;

    const [outgoingFlightsSelected, setOutgoingFlightsSelected] =
        useState(null);
    const [returnFlightsSelected, setReturnFlightsSelected] = useState(null);

    function handleSelectOutgoingFlight(flight) {
        setOutgoingFlightsSelected(flight);
    }

    function handleSelectReturnFlight(flight) {
        setReturnFlightsSelected(flight);
    }

    function generateOutgoingList(list) {
        return list.map((flight) => (
            <FlightSelectorCard
                onSelectFlight={handleSelectOutgoingFlight}
                flight={flight}
                key={flight.id}
                isSelected={outgoingFlightsSelected?.id === flight.id}
            />
        ));
    }

    function generateReturnList(list) {
        return list.map((flight) => (
            <FlightSelectorCard
                onSelectFlight={handleSelectReturnFlight}
                flight={flight}
                key={flight.id}
                isSelected={returnFlightsSelected?.id === flight.id}
                isDisabled={!outgoingFlightsSelected}
            />
        ));
    }

    // SUBMIT/LOADING STATE AND FUNCTION
    const [fetchingData, setFetchingData] = useState(false);
    function submitHandler() {
        console.log("asdasdas");
        setFetchingData(true);
    }

    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid
                    item
                    xs={3}
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" color="#1cc4fc">
                        Outgoing Flights
                    </Typography>
                    <Box
                        style={{
                            textAlign: "center",
                            maxHeight: "73vh",
                            overflow: "auto"
                        }}
                    >
                        <Stack alignItems="center" width="100%">
                            {outgoingFlightsList.length > 0
                                ? generateOutgoingList(outgoingFlightsList)
                                : "No flights found"}
                        </Stack>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={3}
                    justifyContent="center"
                    style={{
                        textAlign: "center",
                        maxHeight: "73vh",
                        overflow: "auto"
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" color="#1cc4fc">
                        Return Flights
                    </Typography>
                    <Box
                        style={{
                            textAlign: "center",
                            maxHeight: "75vh",
                            overflow: "auto"
                        }}
                    >
                        <Stack alignItems="center" width="100%">
                            {returnFlightsList.length > 0
                                ? generateReturnList(returnFlightsList)
                                : "No flights found"}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Stack alignItems="center" justifyContent="center" paddingTop={7}>
                <LoadingButton
                    variant="contained"
                    disabled={
                        !outgoingFlightsSelected || !returnFlightsSelected
                    }
                    onClick={submitHandler}
                    loading={fetchingData}
                >
                    Add Your Journey
                </LoadingButton>
            </Stack>
            {/* <Grid display="flex" justifyContent="center">
                <FlightSelectStepper
                    stepOne={selectedOutgoingFlight}
                    stepTwo={selectedReturnFlight}
                />
            </Grid> */}
        </>
    );
}

export default FlightSelectorList;
