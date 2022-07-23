import React, { useReducer } from "react";
import { Stack, Button } from "@mui/material";
import SignUpFormInputField from "./SignUpFormInputField";
import signUpFormReducer, { initialState } from "./signUpFormReducer";

function SignUpForm() {
    const [globalFormState, dispatchGlobalFormState] = useReducer(
        signUpFormReducer,
        initialState
    );

    return (
        <Stack
            spacing={3}
            direction="column"
            component="form"
            alignItems="center"
            width={400}
        >
            <Stack spacing={2} direction="row">
                <SignUpFormInputField
                    id="first-name"
                    label="First Name"
                    data={globalFormState.firstName}
                    onChange={(e) => {
                        // @ts-ignore - strange lint error, not properly inferring the number of parameters
                        dispatchGlobalFormState({
                            type: "UPDATE_FIRST_NAME",
                            value: e.target.value
                        });
                    }}
                    onBlur={(e) => {
                        // @ts-ignore
                        dispatchGlobalFormState({
                            type: "VALIDATE_FIRST_NAME",
                            value: e.target.value
                        });
                    }}
                />
                <SignUpFormInputField
                    id="last-name"
                    label="Last Name"
                    data={globalFormState.lastName}
                    onChange={(e) => {
                        // @ts-ignore
                        dispatchGlobalFormState({
                            type: "UPDATE_LAST_NAME",
                            value: e.target.value
                        });
                    }}
                    onBlur={(e) => {
                        // @ts-ignore
                        dispatchGlobalFormState({
                            type: "VALIDATE_LAST_NAME",
                            value: e.target.value
                        });
                    }}
                />
            </Stack>
            <SignUpFormInputField
                id="email"
                label="Email"
                data={globalFormState.email}
                onChange={(e) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_EMAIL",
                        value: e.target.value
                    });
                }}
                onBlur={(e) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_EMAIL",
                        value: e.target.value
                    });
                }}
            />
            <SignUpFormInputField
                id="password"
                label="Password"
                type="password"
                data={globalFormState.password}
                onChange={(e) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_PASSWORD",
                        value: e.target.value
                    });
                }}
                onBlur={(e) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_PASSWORD",
                        value: e.target.value
                    });
                }}
            />
            <Button
                variant="contained"
                sx={{ width: "200px" }}
                onClick={() => {
                    // @ts-ignore
                    dispatchGlobalFormState({ type: "VALIDATE_ENTIRE_FORM" });
                }}
            >
                Create Account
            </Button>
        </Stack>
    );
}

export default SignUpForm;
