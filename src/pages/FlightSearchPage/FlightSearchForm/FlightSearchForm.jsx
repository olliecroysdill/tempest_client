import React, { useReducer, useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import flightSearchFormReducer, {
    initialState
} from "./FlightSearchFormReducer";
import AutocompleteFetchInput from "../../../Components/FormInputs/AutocompleteFetchInput";
import DateRangePicker from "../../../Components/FormInputs/DateRangePicker";
import axios from "axios";

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

    async function getFlightData() {
        //params
        const outwardFlightDate =
            globalFormState.departureDate.value.format("DD/MM/YYYY");
        const returnFlightDate =
            globalFormState.returnDate.value.format("DD/MM/YYYY");
        const departureLocationType =
            globalFormState.departureAirport.value.locationType.toLowerCase();
        const arrivalLocationType =
            globalFormState.arrivalAirport.value.locationType.toLowerCase();
        const arrivalAirportCode =
            globalFormState.arrivalAirport.value.locationType === "CITY"
                ? globalFormState.arrivalAirport.value.cityCode
                : globalFormState.arrivalAirport.value.airportCode;
        const departureAirportCode =
            globalFormState.departureAirport.value.locationType === "CITY"
                ? globalFormState.departureAirport.value.cityCode
                : globalFormState.departureAirport.value.airportCode;

        const [outwardFlightData, returnFlightData] = await Promise.all([
            axios.get("http://localhost:8080/flights/search-flights", {
                params: {
                    flightDate: outwardFlightDate,
                    departureLocationType: departureLocationType,
                    arrivalLocationType: arrivalLocationType,
                    departureAirportCode: departureAirportCode,
                    arrivalAirportCode: arrivalAirportCode
                }
            }),
            axios.get("http://localhost:8080/flights/search-flights", {
                params: {
                    flightDate: returnFlightDate,
                    departureLocationType: arrivalLocationType,
                    arrivalLocationType: departureLocationType,
                    departureAirportCode: arrivalAirportCode,
                    arrivalAirportCode: departureAirportCode
                }
            })
        ]);
        return [outwardFlightData.data, returnFlightData.data];
    }

    // const navigate = useNavigate();
    const [fetchingData, setFetchingData] = useState(false);
    async function submitFormHandler(e) {
        e.preventDefault();
        getDispatchEventHandler("SHOW_ALL_FORM_ERRORS")(e);
        if (getEntireFormValidity()) {
            setFetchingData(true);
            //will fetch data here
            //fetch params:
            const flightResponse = await getFlightData();
            console.log(flightResponse);
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
            <AutocompleteFetchInput
                id="departure-airport"
                URL="http://localhost:8080/flights/search-locations"
                disabled={fetchingData}
                data={globalFormState.departureAirport}
                onChange={(newValue) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_DEPARTURE_AIRPORT",
                        value: newValue
                    });
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_DEPARTURE_AIRPORT",
                        value: newValue
                    });
                }}
                label="From"
                required={true}
                placeholder="City or Airport"
            />

            <AutocompleteFetchInput
                id="arrival-airport"
                URL="http://localhost:8080/flights/search-locations"
                disabled={fetchingData}
                data={globalFormState.arrivalAirport}
                onChange={(newValue) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_ARRIVAL_AIRPORT",
                        value: newValue
                    });
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_ARRIVAL_AIRPORT",
                        value: newValue
                    });
                }}
                label="To"
                required={true}
                placeholder="City or Airport"
            />
            <DateRangePicker
                disabled={fetchingData}
                data={[
                    globalFormState.departureDate,
                    globalFormState.returnDate
                ]}
                onReturnDateChange={(newValue) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_RETURN_DATE",
                        value: newValue
                    });
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_RETURN_DATE",
                        value: newValue
                    });
                }}
                onDepartureDateChange={(newValue) => {
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "UPDATE_DEPARTURE_DATE",
                        value: newValue
                    });
                    // @ts-ignore
                    dispatchGlobalFormState({
                        type: "VALIDATE_DEPARTURE_DATE",
                        value: newValue
                    });
                }}
            />
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
