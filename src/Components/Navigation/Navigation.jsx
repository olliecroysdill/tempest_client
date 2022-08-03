import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import navbarlogo from "./../../assets/navbarlogo.png";

function Navigation(props) {
    return (
        <AppBar className={classes["nav-container"]} position="static">
            <Toolbar component="nav" className={classes["nav-items-container"]}>
                <Link to="/">
                    <img src={navbarlogo} alt="logo" className={classes.logo} />
                </Link>

                {!sessionStorage.session_token ? (
                    <Stack spacing={2} direction="row">
                        <Link
                            to="/flight-search"
                            className={classes["no-text-decoration"]}
                        >
                            <Button variant="outlined" size="small">
                                Search flights
                            </Button>
                        </Link>
                        <Link
                            to="/sign-up"
                            className={classes["no-text-decoration"]}
                        >
                            <Button variant="outlined" size="small">
                                Sign Up
                            </Button>
                        </Link>
                        <Link
                            to="/login"
                            className={classes["no-text-decoration"]}
                        >
                            <Button variant="contained" size="small">
                                Log in
                            </Button>
                        </Link>
                    </Stack>
                ) : (
                    <Stack spacing={2} direction="row">
                        <Link
                            to="/flight-search"
                            className={classes["no-text-decoration"]}
                        >
                            <Button variant="outlined" size="small">
                                Search flights
                            </Button>
                        </Link>
                        <Link
                            to="/dashboard"
                            className={classes["no-text-decoration"]}
                        >
                            <Button variant="outlined" size="small">
                                My Dashboard
                            </Button>
                        </Link>
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
