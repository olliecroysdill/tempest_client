import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Navigation from "../../Components/Navigation/Navigation";

function LoginPage() {
    return (
        <>
            <Navigation />
            <Stack alignItems="center" marginTop={4}>
                <Stack
                    direction="column"
                    spacing={3}
                    paddingTop={4}
                    paddingLeft={2}
                    paddingRight={2}
                    paddingBottom={4}
                    alignItems="center"
                    style={{ maxWidth: "400px", width: "100%" }}
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
            </Stack>
        </>
    );
}

export default LoginPage;
