function validateEmail(email) {
    if (email.length === 0) {
        return {
            value: email,
            isValid: false,
            helperText: "Email is required",
            shouldDisplayError: true
        };
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return {
            value: email,
            isValid: false,
            helperText: "Must be a valid email",
            shouldDisplayError: true
        };
    }
    return {
        value: email,
        isValid: true,
        helperText: "",
        shouldDisplayError: true
    };
}

export default validateEmail;
