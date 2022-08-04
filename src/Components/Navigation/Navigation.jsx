import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.css";
import navbarlogo from "./../../assets/navbarlogo.png";

function Navigation(props) {
    const navigate = useNavigate();
    function handleLogout() {
        sessionStorage.removeItem("getYourWay_session_token");
        navigate("/");
    }
    return (
        <AppBar className={classes["nav-container"]} position="static">
            <Toolbar component="nav" className={classes["nav-items-container"]}>
                <Link to="/">
                    <img src={navbarlogo} alt="logo" className={classes.logo} />
                </Link>

                {!sessionStorage.getYourWay_session_token ? (
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
                        <Button
                            onClick={handleLogout}
                            variant="outlined"
                            size="small"
                        >
                            Logout
                        </Button>
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
