import React, { useReducer, useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextInputField from "../../../Components/FormInputs/TextInputField";
import flightSearchFormReducer, {
    initialState
} from "./FlightSearchFormReducer";
import PasswordInputField from "../../../Components/FormInputs/PasswordInputField";
import ToggleSwitch from "../../../Components/Toggle/ToggleSwitch";

function FlightSearchForm() {
    const [globalFormState, dispatchGlobalFormState] = useReducer(
        flightSearchFormReducer,
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
        getDispatchEventHandler("SHOW_ALL_FORM_ERRORS")(e);
        if (getEntireFormValidity()) {
            setFetchingData(true);
            //will fetch data here
            console.log(globalFormState);
            //navigate(/dashboard) - once we have dashboard page
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
                id="departure-airport"
                label="Departure Airport"
                disabled={fetchingData}
                data={globalFormState.email}
                onChange={getDispatchEventHandler("UPDATE_DEPARTURE_AIRPORT")}
                onBlur={getDispatchEventHandler("VALIDATE_DEPARTURE_AIRPORT")}
            />
            <TextInputField
                id="arrival-airport"
                label="Arrival Airport"
                disabled={fetchingData}
                data={globalFormState.email}
                onChange={getDispatchEventHandler("UPDATE_ARRIVAL_AIRPORT")}
                onBlur={getDispatchEventHandler("VALIDATE_ARRIVAL_AIRPORT")}
            />
            <ToggleSwitch />
            <Stack spacing={2} direction="row">
                <TextInputField
                    id="departure-date"
                    label="Departure Date"
                    disabled={fetchingData}
                    data={globalFormState.departureDate}
                    onChange={getDispatchEventHandler("UPDATE_DEPARTURE_DATE")}
                    onBlur={getDispatchEventHandler("VALIDATE_DEPARTURE_DATE")}
                />

                <TextInputField
                    id="return-date"
                    label="Return Date"
                    disabled={fetchingData}
                    data={globalFormState.returnDate}
                    onChange={getDispatchEventHandler("UPDATE_RETURN_DATE")}
                    onBlur={getDispatchEventHandler("VALIDATE_RETURN_DATE")}
                />
            </Stack>
            <LoadingButton
                variant="contained"
                sx={{ width: "200px" }}
                onClick={submitFormHandler}
                loading={fetchingData}
            >
                Search Flights
            </LoadingButton>
        </Stack>
    );
}

export default FlightSearchForm;
