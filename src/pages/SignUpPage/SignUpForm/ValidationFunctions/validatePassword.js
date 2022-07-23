function validatePassword(password) {
    if (password.length === 0) {
        return {
            value: password,
            isValid: false,
            helperText: "Password is required"
        };
    }
    if (password.length < 8 || password.length > 20) {
        return {
            value: password,
            isValid: false,
            helperText: "Must be between 8 and 20 characters"
        };
    }
    if (!/^.*[a-z].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one lower case letter"
        };
    }
    if (!/^.*[A-Z].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one upper case letter"
        };
    }
    if (!/^.*\d.*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one numeric character"
        };
    }
    if (!/^.*[-+_!@#$%^&*.,?].*$/.test(password)) {
        return {
            value: password,
            isValid: false,
            helperText: "Must contain at least one special character"
        };
    }
    return {
        value: password,
        isValid: true,
        helperText: ""
    };
}

export default validatePassword;
