import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPageNavigation.module.css";

function LandingPageNavigation(props) {
    return (
        <nav className={classes["landing-page-nav-container"]}>
            <div classname={classes["logo-placeholder"]}>LOGO</div>
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
