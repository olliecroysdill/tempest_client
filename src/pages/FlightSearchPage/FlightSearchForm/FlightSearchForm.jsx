import React, { useReducer, useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers";

import TextInputField from "../../../Components/FormInputs/TextInputField";
import flightSearchFormReducer, {
    initialState
} from "./FlightSearchFormReducer";
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
                data={globalFormState.departureAirport}
                onChange={getDispatchEventHandler("UPDATE_DEPARTURE_AIRPORT")}
                onBlur={getDispatchEventHandler("VALIDATE_DEPARTURE_AIRPORT")}
            />
            <TextInputField
                id="arrival-airport"
                label="Arrival Airport"
                disabled={fetchingData}
                data={globalFormState.arrivalAirport}
                onChange={getDispatchEventHandler("UPDATE_ARRIVAL_AIRPORT")}
                onBlur={getDispatchEventHandler("VALIDATE_ARRIVAL_AIRPORT")}
            />
            <ToggleSwitch />
            <Stack spacing={2} direction="row">
                <DatePicker
                    // id="departure-date"
                    label="Departure Date"
                    disabled={fetchingData}
                    value={globalFormState.departureDate}
                    onChange={getDispatchEventHandler("UPDATE_DEPARTURE_DATE")}
                    // onBlur={getDispatchEventHandler("VALIDATE_DEPARTURE_DATE")}
                />
                <DatePicker
                    // id="return-date"
                    label="Return Date"
                    disabled={fetchingData}
                    value={globalFormState.returnDate}
                    onChange={getDispatchEventHandler("UPDATE_RETURN_DATE")}
                    // onBlur={getDispatchEventHandler("VALIDATE_RETURN_DATE")}
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
