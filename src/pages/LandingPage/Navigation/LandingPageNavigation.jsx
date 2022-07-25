import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPageNavigation.module.css";
import navbarlogo from "./../../../assets/navbarlogo.png";

function LandingPageNavigation(props) {
    return (
        <AppBar className={classes["nav-container"]} position="static">
            <Toolbar component="nav" className={classes["nav-items-container"]}>
                <img src={navbarlogo} alt="logo" className={classes.logo} />
                <Stack spacing={2} direction="row">
                    <Link
                        to="/sign-up"
                        className={classes["no-text-decoration"]}
                    >
                        <Button variant="outlined" size="small">
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login" className={classes["no-text-decoration"]}>
                        <Button variant="contained" size="small">
                            Log in
                        </Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default LandingPageNavigation;
