import React, { useReducer, useEffect } from "react";
import { Stack, Button } from "@mui/material";
import SignUpFormInputField from "./SignUpFormInputField";
import signUpFormReducer, { initialState } from "./signUpFormReducer";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const [globalFormState, dispatchGlobalFormState] = useReducer(
        signUpFormReducer,
        initialState
    );

    function getDispatchEventHandler(dispatchType) {
        return (e) => {
            // @ts-ignore (Strange linter error, incorrectly saying this should take one parameter)
            dispatchGlobalFormState({
                type: dispatchType,
                value: e.target.value
            });
        };
    }

    //handle fetch for submitting form
    const navigate = useNavigate();
    useEffect(() => {
        if (globalFormState.validAndSubmitted) {
            //console.log in place of fetch form data for now
            console.log(globalFormState);
            //await fetch, then will route to dashboard using useNavigate
            //currently navigate to home as we dont have dashboard
            navigate("/");
        }
    }, [globalFormState, navigate]);

    return (
        <Stack
            spacing={3}
            direction="column"
            component="form"
            alignItems="center"
            width={400}
            padding={3}
        >
            <Stack spacing={2} direction="row">
                <SignUpFormInputField
                    id="first-name"
                    label="First Name"
                    data={globalFormState.firstName}
                    onChange={getDispatchEventHandler("UPDATE_FIRST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_FIRST_NAME")}
                />
                <SignUpFormInputField
                    id="last-name"
                    label="Last Name"
                    data={globalFormState.lastName}
                    onChange={getDispatchEventHandler("UPDATE_LAST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_LAST_NAME")}
                />
            </Stack>
            <SignUpFormInputField
                id="email"
                label="Email"
                data={globalFormState.email}
                onChange={getDispatchEventHandler("UPDATE_EMAIL")}
                onBlur={getDispatchEventHandler("VALIDATE_EMAIL")}
            />
            <SignUpFormInputField
                id="password"
                label="Password"
                type="password"
                data={globalFormState.password}
                onChange={getDispatchEventHandler("UPDATE_PASSWORD")}
                onBlur={getDispatchEventHandler("VALIDATE_PASSWORD")}
            />
            <Button
                variant="contained"
                sx={{ width: "200px" }}
                onClick={getDispatchEventHandler("SUBMIT_FORM")}
            >
                Create Account
            </Button>
        </Stack>
    );
}

export default SignUpForm;
