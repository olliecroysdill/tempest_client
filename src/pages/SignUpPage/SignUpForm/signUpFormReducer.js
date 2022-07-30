import validateEmail from "./ValidationFunctions/validateEmail";
import validateName from "./ValidationFunctions/validateName";
import validatePassword from "./ValidationFunctions/validatePassword";

export const initialState = {
    firstName: {
        value: "",
        isValid: false,
        helperText: "Name is required",
        shouldDisplayError: false
    },
    lastName: {
        value: "",
        isValid: false,
        helperText: "Name is required",
        shouldDisplayError: false
    },
    email: {
        value: "",
        isValid: false,
        helperText: "Email is required",
        shouldDisplayError: false
    },
    password: {
        value: "",
        isValid: false,
        helperText: "Password is required",
        shouldDisplayError: false
    }
};

function signUpFormReducer(formState, action) {
    switch (action.type) {
        case "UPDATE_FIRST_NAME":
            return {
                ...formState,
                firstName: { ...formState.firstName, value: action.value }
            };
        case "VALIDATE_FIRST_NAME":
            return {
                ...formState,
                firstName: validateName(action.value)
            };
        case "UPDATE_LAST_NAME":
            return {
                ...formState,
                lastName: { ...formState.lastName, value: action.value }
            };
        case "VALIDATE_LAST_NAME":
            return {
                ...formState,
                lastName: validateName(action.value)
            };
        case "UPDATE_EMAIL":
            return {
                ...formState,
                email: { ...formState.email, value: action.value }
            };
        case "VALIDATE_EMAIL":
            return {
                ...formState,
                email: validateEmail(action.value)
            };
        case "EMAIL_ALREADY_EXISTS":
            return {
                ...formState,
                email: {
                    ...formState.email,
                    isValid: false,
                    helperText: "Account exists with this email",
                    shouldDisplayError: true
                }
            };
        case "UPDATE_PASSWORD":
            return {
                ...formState,
                password: { ...formState.password, value: action.value }
            };
        case "VALIDATE_PASSWORD":
            return {
                ...formState,
                password: validatePassword(action.value)
            };
        case "SHOW_ALL_FORM_ERRORS":
            return {
                firstName: { ...formState.firstName, shouldDisplayError: true },
                lastName: { ...formState.lastName, shouldDisplayError: true },
                email: { ...formState.email, shouldDisplayError: true },
                password: { ...formState.password, shouldDisplayError: true }
            };
        default:
            return formState;
    }
}

export default signUpFormReducer;
