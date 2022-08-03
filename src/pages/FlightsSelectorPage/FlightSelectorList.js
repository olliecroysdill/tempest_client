import { Container, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import FlightSelectorCard from "./FlightSelectorCard";
import FlightSelectStepper from "./FlightSelectStepper";

function FlightSelectorList() {
    const outgoingFlights = [
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

    const [departureDate, setDepartureDate] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");

    function generateList(list) {
        return list.map((flight) => (
            <FlightSelectorCard
                key={flight.id}
                // flightNumber={flight.flightNumber}
                departureDate={flight.departureDate}
                arrivalDate={flight.arrivalDate}
                duration={flight.duration}
                departureAirportCode={flight.departureAirportCode}
                arrivalAirportCode={flight.arrivalAirportCode}
                departureCity={flight.departureCity}
                arrivalCity={flight.arrivalCity}
                airlineCode={flight.airlineCode}
            />
        ));
    }

    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid
                    item
                    xs={3}
                    justifyContent="center"
                    style={{ textAlign: "center" }}
                >
                    <Typography variant="h6" fontWeight="bold" color="#1cc4fc">
                        Outgoing Flights
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="#1cc4fc">
                        {departureDate}
                    </Typography>
                    <Stack alignItems="center" width="100%">
                        {outgoingFlightsList.length > 0
                            ? generateList(outgoingFlightsList)
                            : "No flights found"}
                    </Stack>
                </Grid>
                <Grid item xs={3} style={{ textAlign: "center " }}>
                    <Typography variant="h6" fontWeight="bold" color="#1cc4fc">
                        Return Flights
                    </Typography>
                    <Stack alignItems="center" width="100%">
                        {returnFlightsList.length > 0
                            ? generateList(returnFlightsList)
                            : "No flights found"}
                    </Stack>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <FlightSelectStepper />
            </Grid>
        </>
    );
}

export default FlightSelectorList;
