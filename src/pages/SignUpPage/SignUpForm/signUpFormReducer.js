import validateEmail from "./ValidationFunctions/validateEmail";
import validateName from "./ValidationFunctions/validateName";
import validatePassword from "./ValidationFunctions/validatePassword";

export const initialState = {
    firstName: {
        value: "",
        isValid: false,
        helperText: "",
        shouldDisplayError: false
    },
    lastName: {
        value: "",
        isValid: false,
        helperText: "",
        shouldDisplayError: false
    },
    email: {
        value: "",
        isValid: false,
        helperText: "",
        shouldDisplayError: false
    },
    password: {
        value: "",
        isValid: false,
        helperText: "",
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
        case "VALIDATE_ENTIRE_FORM":
            return {
                firstName: validateName(formState.firstName.value),
                lastName: validateName(formState.lastName.value),
                email: validateEmail(formState.email.value),
                password: validatePassword(formState.password.value)
            };
        default:
            return formState;
    }
}

export default signUpFormReducer;
