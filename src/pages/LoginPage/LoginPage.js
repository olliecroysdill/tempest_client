import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import classes from "./LoginPage.module.css";

function LoginPage() {
    return (
        <Stack
            direction="column"
            spacing={3}
            alignItems="center"
            marginTop={10}
            marginLeft={2}
            marginRight={2}
            className={classes["form-container"]}
        >
            <Typography sx={{ paddingBottom: "40px" }} variant="h4">
                Login
            </Typography>
            <LoginForm />
            <Typography variant="body2">
                Don't have an account?{" "}
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                    <Typography
                        variant="body2"
                        component="span"
                        color="primary"
                    >
                        Sign up
                    </Typography>
                </Link>
            </Typography>
        </Stack>
    );
}

export default LoginPage;
