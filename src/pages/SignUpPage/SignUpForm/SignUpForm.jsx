import React, { useReducer, useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SignUpFormInputField from "./SignUpFormInputField";
import signUpFormReducer, { initialState } from "./signUpFormReducer";

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

    function submitFormHandler(e) {
        e.preventDefault();
        getDispatchEventHandler("VALIDATE_ENTIRE_FORM")(e);
        if (getEntireFormValidity()) {
            setFetchingData(true);
            //will fetch data here
            console.log(globalFormState);
            //navigate(/dashboard) - once we have dashboard page
        }
    }

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
                    type="text"
                    disabled={fetchingData}
                    data={globalFormState.firstName}
                    onChange={getDispatchEventHandler("UPDATE_FIRST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_FIRST_NAME")}
                />
                <SignUpFormInputField
                    id="last-name"
                    label="Last Name"
                    type="text"
                    disabled={fetchingData}
                    data={globalFormState.lastName}
                    onChange={getDispatchEventHandler("UPDATE_LAST_NAME")}
                    onBlur={getDispatchEventHandler("VALIDATE_LAST_NAME")}
                />
            </Stack>
            <SignUpFormInputField
                id="email"
                label="Email"
                type="text"
                disabled={fetchingData}
                data={globalFormState.email}
                onChange={getDispatchEventHandler("UPDATE_EMAIL")}
                onBlur={getDispatchEventHandler("VALIDATE_EMAIL")}
            />
            <SignUpFormInputField
                id="password"
                label="Password"
                type="password"
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
