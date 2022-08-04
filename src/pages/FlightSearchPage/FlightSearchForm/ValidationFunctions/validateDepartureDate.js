import moment from "moment";

function validateDepartureDate(departureDate) {
    if (departureDate === null) {
        return {
            value: departureDate,
            isValid: false,
            helperText: "Departure date is required",
            shouldDisplayError: true
        };
    }
    if (departureDate.isBefore(moment().subtract(1, "days"))) {
        return {
            value: departureDate,
            isValid: false,
            helperText: "Depart date must be today or later",
            shouldDisplayError: true
        };
    }
    return {
        value: departureDate,
        isValid: true,
        helperText: " ",
        shouldDisplayError: true
    };
}

export default validateDepartureDate;
