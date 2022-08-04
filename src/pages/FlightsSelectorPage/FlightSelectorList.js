import { Box, Button, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlightSelectorCard from "./FlightSelectorCard/FlightSelectorCard";
import FlightSelectorNameModal from "./FlightSelectorNameModal";
import axios from "axios";

function FlightSelectorList() {
    const location = useLocation();

    const [outgoingFlightsArray, setOutgoingFlightsArray] = useState([]);
    const [returnFlightsArray, setReturnFlightsArray] = useState([]);
    useEffect(() => {
        setOutgoingFlightsArray(location.state.outboundFlights);
        setReturnFlightsArray(location.state.returnFlights);
    }, [location]);

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

    const [nameModalOpen, setNameModalOpen] = useState(false);

    function openModalHandler() {
        setNameModalOpen(true);
    }

    const [journeyName, setJourneyName] = useState("");

    // SUBMIT/LOADING STATE AND FUNCTION
    const [fetchingData, setFetchingData] = useState(false);
    const navigate = useNavigate();
    async function submitHandler() {
        setFetchingData(true);
        await axios.post(
            "http://localhost:8080/journeys/savejourney",
            {
                journeyName: journeyName,
                outboundFlight: outgoingFlightsSelected,
                returnFlight: returnFlightsSelected
            },
            {
                headers: {
                    Authorization: sessionStorage.getYourWay_session_token
                }
            }
        );
        navigate("/dashboard");
    }

    return (
        <>
            {!(outgoingFlightsArray.length === 0) &&
            !(returnFlightsArray.length === 0) ? (
                <>
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        width="100%"
                        alignItems="center"
                    >
                        <Grid
                            item
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <Stack padding={2} borderBottom="1px solid #ddd">
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="#1cc4fc"
                                >
                                    Outgoing Flights
                                </Typography>
                            </Stack>
                            <Box
                                style={{
                                    textAlign: "center",
                                    maxHeight: "65vh",
                                    overflow: "auto"
                                }}
                            >
                                <Stack
                                    alignItems="center"
                                    width="100%"
                                    spacing={2}
                                    padding={2}
                                >
                                    {outgoingFlightsArray.length > 0
                                        ? generateOutgoingList(
                                              outgoingFlightsArray
                                          )
                                        : "No flights found"}
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <Stack padding={2} borderBottom="1px solid #ddd">
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="#1cc4fc"
                                >
                                    Return Flights
                                </Typography>
                            </Stack>
                            <Box
                                style={{
                                    textAlign: "center",
                                    maxHeight: "65vh",
                                    overflow: "auto"
                                }}
                            >
                                <Stack
                                    alignItems="center"
                                    width="100%"
                                    spacing={2}
                                    padding={2}
                                >
                                    {returnFlightsArray.length > 0
                                        ? generateReturnList(returnFlightsArray)
                                        : "No flights found"}
                                </Stack>
                            </Box>
                        </Grid>
                    </Stack>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        paddingTop={7}
                    >
                        <Button
                            variant="contained"
                            onClick={openModalHandler}
                            disabled={
                                !outgoingFlightsSelected ||
                                !returnFlightsSelected
                            }
                        >
                            Add Your Journey
                        </Button>
                    </Stack>
                    <FlightSelectorNameModal
                        fetchingData={fetchingData}
                        submitHandler={submitHandler}
                        open={nameModalOpen}
                        onClose={() => {
                            setNameModalOpen(false);
                        }}
                        journeyName={journeyName}
                        onChangeJourneyName={(e) => {
                            setJourneyName(e.target.value);
                        }}
                    />
                </>
            ) : (
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    height="80vh"
                    spacing={4}
                >
                    <Typography variant="h4">No Flights to Show</Typography>
                    <Link
                        style={{ textDecoration: "none" }}
                        to="/flight-search"
                    >
                        <Button variant="contained">Search Again</Button>
                    </Link>
                </Stack>
            )}
        </>
    );
}

export default FlightSelectorList;
