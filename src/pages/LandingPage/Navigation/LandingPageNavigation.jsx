import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPageNavigation.module.css";
import navLogo from "../../../assets/nav-logo.png";

function LandingPageNavigation(props) {
    return (
        <nav className={classes["landing-page-nav-container"]}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <img
                    alt="company-logo"
                    src={navLogo}
                    style={{ width: "160px", marginBottom: "10px" }}
                />
            </Link>
            <Stack spacing={2} direction="row">
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="small" sx={{ width: 80 }}>
                        Sign Up
                    </Button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="small" sx={{ width: 80 }}>
                        Log in
                    </Button>
                </Link>
            </Stack>
        </nav>
    );
}

export default LandingPageNavigation;
