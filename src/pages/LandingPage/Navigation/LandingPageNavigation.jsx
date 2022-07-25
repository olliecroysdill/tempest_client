import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPageNavigation.module.css";
import navbarlogo from "./../../../assets/navbarlogo.png";

function LandingPageNavigation(props) {
    return (
        <AppBar position="static" style={{ background: "#FFFFFF" }}>
            <Toolbar component="nav">
                <div className={classes.leftside}>
                    <img src={navbarlogo} alt="logo" className={classes.logo} />
                </div>
                <section className={classes.rightside}>
                    <Stack spacing={2} direction="row">
                        <Link to="/sign-up" style={{ textDecoration: "none" }}>
                            <Button variant="outlined" size="small">
                                Sign Up
                            </Button>
                        </Link>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Button variant="contained" size="small">
                                Log in
                            </Button>
                        </Link>
                    </Stack>
                </section>
            </Toolbar>
        </AppBar>
    );
}

export default LandingPageNavigation;
