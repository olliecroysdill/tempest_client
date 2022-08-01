import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import FlightSearchForm from "./FlightSearchForm/FlightSearchForm";
import westworldImage from "./../../assets/Westworld.jpeg";

function FlightSearchPage() {
    return (
        <>
            <Navigation />
            {/* <div style={{ backgroundImage: "westworldImage" }}></div> */}
            {/* <div>
                <img src={westworldImage} width="25%" />
            </div> */}
            <Stack alignItems="center" marginTop={4}>
                <Stack
                    direction="column"
                    spacing={3}
                    alignItems="center"
                    paddingTop={4}
                    paddingLeft={2}
                    paddingRight={2}
                    paddingBottom={4}
                    style={{ maxWidth: "400px", width: "100%" }}
                >
                    <Typography sx={{ paddingBottom: "40px" }} variant="h4">
                        Flight Search
                    </Typography>
                    <FlightSearchForm />
                    <Typography variant="body2">
                        Reach Through The Skies.
                        <Link
                            to="/flight-search"
                            style={{ textDecoration: "none" }}
                        ></Link>
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default FlightSearchPage;
