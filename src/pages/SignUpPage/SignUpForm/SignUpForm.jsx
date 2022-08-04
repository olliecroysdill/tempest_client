import React, { useReducer, useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextInputField from "../../../Components/FormInputs/TextInputField";
import signUpFormReducer, { initialState } from "./signUpFormReducer";
import PasswordInputField from "../../../Components/FormInputs/PasswordInputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import server from "../../../axiosConfig";

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

    function getEntireFormValidity() {
        let entireFormValidity = true;
        for (const inputField of Object.values(globalFormState)) {
            if (!inputField.isValid) entireFormValidity = false;
        }
        return entireFormValidity;
    }

    // const navigate = useNavigate();
    const [fetchingData, setFetchingData] = useState(false);
    const navigate = useNavigate();
    async function submitFormHandler(e) {
        e.preventDefault();
        getDispatchEventHandler("SHOW_ALL_FORM_ERRORS")(e);
        if (getEntireFormValidity()) {
            setFetchingData(true);
            try {
                await server.post("/register", {
                    email: globalFormState.email.value,
                    password: globalFormState.password.value,
                    first_name: globalFormState.firstName.value,
                    last_name: globalFormState.lastName.value
                });
                const loginResponse = await server.post("/login", {
                    username: globalFormState.email.value,
                    password: globalFormState.password.value
                });
                console.log(loginResponse);
                sessionStorage.setItem(
                    "getYourWay_session_token",
                    loginResponse.headers.authorization
                );
                navigate("/dashboard");
            } catch (err) {
                console.log(err);
                if (err.response.status === 409) {
                    getDispatchEventHandler("EMAIL_ALREADY_EXISTS")(e);
                    setFetchingData(false);
                }
            }
        }
    }

    return (
        <Stack
            spacing={1}
            direction="column"
            component="form"
            alignItems="center"
            alignSelf="stretch"
        >
            <Stack spacing={2} direction="row">
                <TextInputField
                    id="first-name"
                    label="First Name"
                    disabled={fetchingData}
                    data={globalFormState.firstName}
                    onChange={getDispatchEventHandler("UPDATE_FIRST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_FIRST_NAME")}
                />
                <TextInputField
                    id="last-name"
                    label="Last Name"
                    disabled={fetchingData}
                    data={globalFormState.lastName}
                    onChange={getDispatchEventHandler("UPDATE_LAST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_LAST_NAME")}
                />
            </Stack>
            <TextInputField
                id="email"
                label="Email"
                disabled={fetchingData}
                data={globalFormState.email}
                onChange={getDispatchEventHandler("UPDATE_EMAIL")}
                onBlur={getDispatchEventHandler("VALIDATE_EMAIL")}
            />
            <PasswordInputField
                id="password"
                label="Password"
                disabled={fetchingData}
                data={globalFormState.password}
                onChange={getDispatchEventHandler("UPDATE_PASSWORD")}
                onBlur={getDispatchEventHandler("VALIDATE_PASSWORD")}
            />
            <LoadingButton
                variant="contained"
                sx={{ width: "200px" }}
                onClick={submitFormHandler}
                loading={fetchingData}
            >
                Create Account
            </LoadingButton>
        </Stack>
    );
}

export default SignUpForm;
