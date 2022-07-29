export const initialState = {
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

function loginFormReducer(formState, action) {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return {
                ...formState,
                email: { ...formState.email, value: action.value }
            };
        case "VALIDATE_EMAIL":
            return {
                ...formState,
                email: {
                    value: action.value,
                    isValid: !(action.value === ""),
                    helperText: !(action.value === "")
                        ? " "
                        : "Email is required",
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
                password: {
                    value: action.value,
                    isValid: !(action.value === ""),
                    helperText: !(action.value === "")
                        ? " "
                        : "Password is required",
                    shouldDisplayError: true
                }
            };
        case "SHOW_ALL_FORM_ERRORS":
            return {
                email: { ...formState.email, shouldDisplayError: true },
                password: { ...formState.password, shouldDisplayError: true }
            };
        default:
            return formState;
    }
}

export default loginFormReducer;
