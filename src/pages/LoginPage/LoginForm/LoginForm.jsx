import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React, { useReducer, useState } from "react";
import PasswordInputField from "../../../Components/FormInputs/PasswordInputField";
import TextInputField from "../../../Components/FormInputs/TextInputField";
import loginFormReducer from "./LoginFormReducer";
import { initialState } from "./LoginFormReducer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
    const [globalFormState, dispatchGlobalFormState] = useReducer(
        loginFormReducer,
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
    const location = useLocation();
    async function submitFormHandler(e) {
        e.preventDefault();
        getDispatchEventHandler("SHOW_ALL_FORM_ERRORS")(e);
        if (getEntireFormValidity()) {
            setFetchingData(true);
            try {
                const loginResponse = await axios.post(
                    "http://localhost:8080/login",
                    {
                        username: globalFormState.email.value,
                        password: globalFormState.password.value
                    }
                );
                sessionStorage.setItem(
                    "getYourWay_session_token",
                    loginResponse.headers.authorization
                );
                if (location.state?.outboundFlights) {
                    navigate("/flights-selector", {
                        state: {
                            outboundFlight: location.state?.outboundFlights,
                            returnFlight: location.state?.returnFlights
                        }
                    });
                }
                navigate("/dashboard");
            } catch (err) {
                if (err.response.status === 403) {
                    getDispatchEventHandler("INVALID_CREDENTIALS")(e);
                    setFetchingData(false);
                }
            }
            // navigate(/dashboard) - once we have dashboard page
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
                Login
            </LoadingButton>
        </Stack>
    );
}

export default LoginForm;
