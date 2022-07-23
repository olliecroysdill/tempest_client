function validateEmail(email) {
    if (email.length === 0) {
        return {
            value: email,
            isValid: false,
            helperText: "Email is required"
        };
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return {
            value: email,
            isValid: false,
            helperText: "Must be a valid email"
        };
    }
    return { value: email, isValid: true, helperText: "" };
}

export default validateEmail;
