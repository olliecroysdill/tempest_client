function validatePassword(password) {
    if (password.length === 0) {
        return {
            value: password,
            isValid: false,
            helperText: "Password is required",
            shouldDisplayError: true
        };
    }
    if (password.length < 8 || password.length > 20) {
        return {
            value: password,
            isValid: false,
            helperText: "Must be between 8 and 20 characters",
            shouldDisplayError: true
        };
    }
    if (!/^.*[a-z].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one lower case letter",
            shouldDisplayError: true
        };
    }
    if (!/^.*[A-Z].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one upper case letter",
            shouldDisplayError: true
        };
    }
    if (!/^.*\d.*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one numeric character",
            shouldDisplayError: true
        };
    }
    if (!/^.*[-+_!@#$%^&*.,?].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one special character",
            shouldDisplayError: true
        };
    }
    return {
        value: password,
        isValid: true,
        helperText: " ",
        shouldDisplayError: true
    };
}

export default validatePassword;
