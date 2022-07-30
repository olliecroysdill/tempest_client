import validateDate from "./ValidationFunctions/validateDate";
import validateEmail from "./ValidationFunctions/validateEmail";
import validateName from "./ValidationFunctions/validateName";
import validatePassword from "./ValidationFunctions/validatePassword";

export const initialState = {
    departureAirport: {
        value: "",
        isValid: false,
        helperText: "Departure airport is required",
        shouldDisplayError: false
    },
    arrivalairport: {
        value: "",
        isValid: false,
        helperText: "Destination airport is required",
        shouldDisplayError: false
    },
    departureDate: {
        value: "",
        isValid: false,
        helperText: "Departure date is required",
        shouldDisplayError: false
    },
    arrivalDate: {
        value: "",
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
                departureAirport: validateName(action.value)
            };
        case "UPDATE_ARRIVAL_AIRPORT":
            return {
                ...formState,
                arrivalAirport: {
                    ...formState.departureDate,
                    value: action.value
                }
            };
        case "VALIDATE_ARRIVAL_AIRPORT":
            return {
                ...formState,
                arrivalAirport: validateDate(action.value)
            };
        case "UPDATE_DEPARTURE_DATE":
            return {
                ...formState,
                departureDate: {
                    ...formState.departureDate,
                    value: action.value
                }
            };
        case "VALIDATE_DEPARTURE_DATE":
            return {
                ...formState,
                departureDate: validateDate(action.value)
            };
        case "UPDATE_RETURN_DATE":
            return {
                ...formState,
                returnDate: {
                    ...formState.returnDate,
                    value: action.value
                }
            };
        case "VALIDATE_RETURN_DATE":
            return {
                ...formState,
                returnDate: validateDate(action.value)
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
