import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import SignUpForm from "./SignUpForm/SignUpForm";

function SignUpPage() {
    return (
        <>
            <Navigation />
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
                        Sign Up
                    </Typography>
                    <SignUpForm />
                    <Typography variant="body2">
                        Already have an account?{" "}
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                component="span"
                                color="primary"
                            >
                                Login
                            </Typography>
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default SignUpPage;
