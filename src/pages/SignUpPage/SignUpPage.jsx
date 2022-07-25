import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";

function SignUpPage() {
    return (
        <Stack direction="column" spacing={3} alignItems="center">
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
    );
}

export default SignUpPage;
