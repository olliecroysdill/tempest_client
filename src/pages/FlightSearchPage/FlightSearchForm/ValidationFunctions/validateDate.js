function validateDate(date) {
    //no name inputted
    if (date.length === 0) {
        return {
            value: date,
            isValid: false,
            helperText: "Date is required",
            shouldDisplayError: true
        };
    } //tests name <= 14 chars
    if (date.length > 14) {
        return {
            value: date,
            isValid: false,
            helperText: "Must be 14 characters or less",
            shouldDisplayError: true
        };
    }
    //tests only contains numbers
    if (!/^[a-zA-Z]+$/.test(date)) {
        return {
            value: date,
            isValid: false,
            helperText: "Must choose a valid date",
            shouldDisplayError: true
        };
    }
    return {
        value: date,
        isValid: true,
        helperText: " ",
        shouldDisplayError: true
    };
}

export default validateDate;
