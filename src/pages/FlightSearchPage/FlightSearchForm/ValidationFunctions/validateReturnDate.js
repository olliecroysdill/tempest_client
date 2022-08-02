function validateReturnDate(returnDate, departureDate) {
    if (returnDate === null) {
        return {
            value: returnDate,
            isValid: false,
            helperText: "Departure date is required",
            shouldDisplayError: true
        };
    }
    if (departureDate && returnDate.isBefore(departureDate)) {
        return {
            value: returnDate,
            isValid: false,
            helperText: "Return date must be after departure date",
            shouldDisplayError: true
        };
    }
    return {
        value: returnDate,
        isValid: true,
        helperText: " ",
        shouldDisplayError: true
    };
}

export default validateReturnDate;
