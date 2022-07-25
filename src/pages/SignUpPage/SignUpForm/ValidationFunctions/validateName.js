function validateName(name) {
    //no name inputted
    if (name.length === 0) {
        return {
            value: name,
            isValid: false,
            helperText: "Name is required",
            shouldDisplayError: true
        };
    } //tests name <= 14 chars
    if (name.length > 14) {
        return {
            value: name,
            isValid: false,
            helperText: "Must be 14 characters or less",
            shouldDisplayError: true
        };
    }
    //tests only contains letters
    if (!/^[a-zA-Z]+$/.test(name)) {
        return {
            value: name,
            isValid: false,
            helperText: "Must only contain letters",
            shouldDisplayError: true
        };
    }
    return {
        value: name,
        isValid: true,
        helperText: " ",
        shouldDisplayError: true
    };
}

export default validateName;
