import validateDepartureDate from "./ValidationFunctions/validateDepartureDate";
import validateReturnDate from "./ValidationFunctions/validateReturnDate";

export const initialState = {
    departureAirport: {
        value: null,
        isValid: false,
        helperText: "Departure airport is required",
        shouldDisplayError: false
    },
    arrivalAirport: {
        value: null,
        isValid: false,
        helperText: "Arrival airport is required",
        shouldDisplayError: false
    },
    departureDate: {
        value: null,
        isValid: false,
        helperText: "Departure date is required",
        shouldDisplayError: false
    },
    returnDate: {
        value: null,
        isValid: false,
        helperText: "Arrival date is required",
        shouldDisplayError: false
    }
};

function flightSearchFormReducer(formState, action) {
    switch (action.type) {
        case "UPDATE_DEPARTURE_AIRPORT":
            return {
                ...formState,
                departureAirport: {
                    ...formState.departureAirport,
                    value: action.value
                }
            };
        case "VALIDATE_DEPARTURE_AIRPORT":
            return {
                ...formState,
                departureAirport: {
                    value: action.value,
                    isValid: !(action.value === null),
                    helperText: !(action.value === null)
                        ? " "
                        : "Departure Airport is Required",
                    shouldDisplayError: true
                }
            };
        case "UPDATE_ARRIVAL_AIRPORT":
            return {
                ...formState,
                arrivalAirport: {
                    ...formState.arrivalAirport,
                    value: action.value
                }
            };
        case "VALIDATE_ARRIVAL_AIRPORT":
            return {
                ...formState,
                arrivalAirport: {
                    value: action.value,
                    isValid: !(action.value === null),
                    helperText: !(action.value === null)
                        ? " "
                        : "Arrival Airport is Required",
                    shouldDisplayError: true
                }
            };

        case "UPDATE_DEPARTURE_DATE":
            return {
                ...formState,
                departureDate: {
                    ...formState.departureDate,
                    value: action.value
                },
                returnDate: {
                    ...formState.returnDate,
                    value: null
                }
            };
        case "VALIDATE_DEPARTURE_DATE":
            return {
                ...formState,
                departureDate: validateDepartureDate(action.value)
            };
        case "UPDATE_RETURN_DATE":
            return {
                ...formState,
                returnDate: { ...formState.returnDate, value: action.value }
            };
        case "VALIDATE_RETURN_DATE":
            return {
                ...formState,
                returnDate: validateReturnDate(action.value)
            };
        case "SHOW_ALL_FORM_ERRORS":
            return {
                departureAirport: {
                    ...formState.departureAirport,
                    shouldDisplayError: true
                },
                arrivalAirport: {
                    ...formState.arrivalAirport,
                    shouldDisplayError: true
                },
                departureDate: {
                    ...formState.departureDate,
                    shouldDisplayError: true
                },
                returnDate: {
                    ...formState.returnDate,
                    shouldDisplayError: true
                }
            };
        default:
            return formState;
    }
}

export default flightSearchFormReducer;
