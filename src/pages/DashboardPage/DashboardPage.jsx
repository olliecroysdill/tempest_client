import { Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import usePageDimensions from "../../hooks/usePageDimensions";
import JourneyCard from "./JourneyCard/JourneyCard";
import axios from "axios";
import moment from "moment";
import useRestrictToLoginOnly from "../../hooks/useRestrictToLoginOnly";

function DashboardPage() {
    useRestrictToLoginOnly();

    useEffect(() => {
        async function getSavedFlights() {
            const response = await axios.get(
                "http://localhost:8080/journeys/getjourneys",
                {
                    headers: {
                        Authorization: sessionStorage.getYourWay_session_token
                    }
                }
            );
            setJourneys(response.data);
        }
        if (sessionStorage.getYourWay_session_token) {
            getSavedFlights();
        }
    }, []);

    const pageDimensions = usePageDimensions();
    const [showUpcoming, setShowUpcoming] = React.useState(true);

    const handleChangeListToShow = (event, tabIndex) => {
        setShowUpcoming(tabIndex === 0 ? true : false);
    };

    const [journeys, setJourneys] = useState([]);

    return (
        <Stack direction="column" alignItems="center">
            <Navigation />

            <Stack maxWidth="1280px" width="100%" padding={3} spacing={3}>
                <Typography variant="h4">Your Saved Journeys</Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        marginBottom: 2
                    }}
                >
                    <Tabs
                        value={showUpcoming ? 0 : 1}
                        onChange={handleChangeListToShow}
                    >
                        <Tab label="Upcoming" />
                        <Tab label="Previous" />
                    </Tabs>
                    <Link
                        to="/flight-search"
                        style={{ textDecoration: "none" }}
                    >
                        {pageDimensions.width > 800 && (
                            <Button
                                variant="contained"
                                size="small"
                                sx={{ marginBottom: 1 }}
                            >
                                Add a new journey
                            </Button>
                        )}
                    </Link>
                </Stack>
                {pageDimensions.width <= 800 && (
                    <Button variant="contained" sx={{ marginBottom: 1 }}>
                        {" "}
                        Add a new journey
                    </Button>
                )}
                {showUpcoming
                    ? journeys
                          .filter((journey) =>
                              moment(journey.returnFlight.arrivalDate).isAfter(
                                  moment()
                              )
                          )
                          .map((journey, index) => (
                              <JourneyCard
                                  key={`JourneyItem-${index}`}
                                  journey={journey}
                              />
                          ))
                    : journeys
                          .filter((journey) =>
                              moment(journey.returnFlight.arrivalDate).isBefore(
                                  moment()
                              )
                          )
                          .map((journey, index) => (
                              <JourneyCard
                                  key={`JourneyItem-${index}`}
                                  journey={journey}
                              />
                          ))}
            </Stack>
        </Stack>
    );
}

export default DashboardPage;
