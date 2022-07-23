import validateEmail from "./ValidationFunctions/validateEmail";
import validateName from "./ValidationFunctions/validateName";
import validatePassword from "./ValidationFunctions/validatePassword";

export const initialState = {
    firstName: { value: "", isValid: true, helperText: "" },
    lastName: { value: "", isValid: true, helperText: "" },
    email: { value: "", isValid: true, helperText: "" },
    password: { value: "", isValid: true, helperText: "" },
    validAndSubmitted: false
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
        case "SUBMIT_FORM":
            const firstNameData = validateName(formState.firstName.value);
            const lastNameData = validateName(formState.lastName.value);
            const emailData = validateEmail(formState.email.value);
            const passwordData = validatePassword(formState.password.value);
            const validAndSubmitted =
                firstNameData.isValid &&
                lastNameData.isValid &&
                emailData.isValid &&
                passwordData.isValid;
            return {
                firstName: firstNameData,
                lastName: lastNameData,
                email: emailData,
                password: passwordData,
                validAndSubmitted
            };
        default:
            return formState;
    }
}

export default signUpFormReducer;
