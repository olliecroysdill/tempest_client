import { Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import usePageDimensions from "../../hooks/usePageDimensions";
import JourneyCard from "./JourneyCard/JourneyCard";

function DashboardPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.session_token) {
            navigate("/login");
        }
    }, []);

    const pageDimensions = usePageDimensions();
    const [showUpcoming, setShowUpcoming] = React.useState(true);

    const handleChangeListToShow = (event, tabIndex) => {
        setShowUpcoming(tabIndex === 0 ? true : false);
    };

    const journeys = [
        {
            title: "Holiday to Paris",
            departureDate: "15/09/2022",
            returnDate: "22/09/2022",
            outboundFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            },
            returnFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            }
        },
        {
            title: "Holiday to Paris",
            departureDate: "15/09/2022",
            returnDate: "22/09/2022",
            outboundFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            },
            returnFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            }
        },
        {
            title: "Holiday to Paris",
            departureDate: "15/09/2022",
            returnDate: "22/09/2022",
            outboundFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            },
            returnFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            }
        },
        {
            title: "Holiday to Paris",
            departureDate: "15/09/2022",
            returnDate: "22/09/2022",
            outboundFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            },
            returnFlight: {
                departureAirportName: "London Stansted",
                departureAirportCode: "STN",
                departureTime: "16:00",
                arrivalAirportName: "Charles de Gaulle",
                arrivalAirportCode: "CDG",
                arrivalTime: "19:00"
            }
        }
    ];

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
                {journeys.map((journey, index) => (
                    <JourneyCard
                        key={`JourneyItem-${index}`}
                        title={journey.title}
                        departureDate={journey.departureDate}
                        returnDate={journey.returnDate}
                        outboundFlight={journey.outboundFlight}
                        returnFlight={journey.returnFlight}
                    />
                ))}
            </Stack>
        </Stack>
    );
}

export default DashboardPage;
