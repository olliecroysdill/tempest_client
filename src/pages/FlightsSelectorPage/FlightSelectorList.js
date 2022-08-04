import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import FlightSelectorCard from "./FlightSelectorCard/FlightSelectorCard";

function FlightSelectorList() {
    const outgoingFlights = [
        {
            id: "0",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "2",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "3",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "4",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "5",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "6",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "7",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "8",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "9",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "10",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "11",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "12",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "13",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "14",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "15",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "16",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "17",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "18",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "19",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "20",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "21",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "22",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "23",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "24",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "25",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "26",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "27",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "28",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        }
    ];
    const returnFlights = [
        {
            id: "032d25584b150000c6553fdd_0",
            flightNumber: 4196,
            departureDate: "2022-08-17T07:35:00.000Z",
            arrivalDate: "2022-08-17T10:25:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "BGY",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        },
        {
            id: "032d07f04b15000008d9682f_0",
            flightNumber: 8736,
            departureDate: "2022-08-17T18:25:00.000Z",
            arrivalDate: "2022-08-17T21:15:00.000Z",
            duration: 6600,
            departureAirportCode: "STN",
            arrivalAirportCode: "MXP",
            departureCity: "London",
            arrivalCity: "Milan",
            airlineCode: "FR"
        }
    ];

    const [outgoingFlightsList, setOutgoingFlightsList] =
        useState(outgoingFlights);
    const [returnFlightsList, setReturnFlightsList] = useState(returnFlights);

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
