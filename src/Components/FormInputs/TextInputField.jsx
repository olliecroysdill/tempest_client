import React from "react";
import { TextField } from "@mui/material";

function SignUpFormInputField(props) {
    return (
        <TextField
            type="text"
            id={props.id}
            label={props.label}
            required={true}
            disabled={props.disabled}
            variant="outlined"
            fullWidth={true}
            // stateUpdateProps
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.data.value}
            error={!props.data.isValid && props.data.shouldDisplayError}
            helperText={
                props.data.shouldDisplayError ? props.data.helperText : " "
            }
        />
    );
}

export default SignUpFormInputField;
