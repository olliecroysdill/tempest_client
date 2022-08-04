import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React from "react";

function DateRangePicker(props) {
    return (
        <Stack spacing={2} direction="row">
            <DatePicker
                // id="departure-date"
                disablePast={true}
                inputFormat="DD-MM-YYYY"
                label="Departure Date"
                disabled={props.disabled}
                value={props.data[0].value}
                onChange={props.onDepartureDateChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={
                            !props.data[0].isValid &&
                            props.data[0].shouldDisplayError
                        }
                        helperText={
                            props.data[0].shouldDisplayError
                                ? props.data[0].helperText
                                : " "
                        }
                    />
                )}
            />
            <DatePicker
                // id="return-date"
                minDate={props.data[0].value ? props.data[0].value : moment()}
                inputFormat="DD-MM-YYYY"
                label="Return Date"
                disabled={props.disabled}
                value={props.data[1].value}
                onChange={props.onReturnDateChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={
                            !props.data[1].isValid &&
                            props.data[1].shouldDisplayError
                        }
                        helperText={
                            props.data[1].shouldDisplayError
                                ? props.data[1].helperText
                                : " "
                        }
                    />
                )}
            />
        </Stack>
    );
}

export default DateRangePicker;
