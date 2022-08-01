import React, { useReducer, useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers";

import flightSearchFormReducer, {
    initialState
} from "./FlightSearchFormReducer";

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
            spacing={4}
            direction="column"
            component="form"
            alignItems="center"
            alignSelf="stretch"
        >
            <Autocomplete
                value={globalFormState.departureAirport.value}
                id="combo-box-demo"
                options={["hello", "world", "option3"]}
                fullWidth={true}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="From"
                        required={true}
                        placeholder="City or Airport"
                        onChange={getDispatchEventHandler(
                            "UPDATE_DEPARTURE_AIRPORT"
                        )}
                    />
                )}
            />
            <Autocomplete
                value={globalFormState.arrivalAirport.value}
                id="combo-box-demo"
                options={["hello", "world", "option3"]}
                fullWidth={true}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="To"
                        required={true}
                        placeholder="City or Airport"
                        onChange={getDispatchEventHandler(
                            "UPDATE_ARRIVAL_AIRPORT"
                        )}
                    />
                )}
            />

            <Stack spacing={2} direction="row">
                <DatePicker
                    // id="departure-date"
                    inputFormat="DD-MM-YYYY"
                    label="Departure Date"
                    disabled={fetchingData}
                    value={globalFormState.departureDate.value}
                    onChange={(value) => {
                        // @ts-ignore
                        dispatchGlobalFormState({
                            type: "UPDATE_DEPARTURE_DATE",
                            value: value
                        });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    // id="return-date"
                    inputFormat="DD-MM-YYYY"
                    label="Return Date"
                    disabled={fetchingData}
                    value={globalFormState.returnDate.value}
                    onChange={(value) => {
                        // @ts-ignore
                        dispatchGlobalFormState({
                            type: "UPDATE_RETURN_DATE",
                            value: value
                        });
                    }}
                    renderInput={(params) => <TextField {...params} />}
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
