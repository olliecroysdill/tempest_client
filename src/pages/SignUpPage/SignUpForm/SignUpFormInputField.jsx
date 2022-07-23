import React from "react";
import { TextField } from "@mui/material";

function SignUpFormInputField(props) {
    return (
        <TextField
            type={props.type}
            id={props.id}
            label={props.label}
            required={true}
            variant="outlined"
            fullWidth={true}
            // stateUpdateProps
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.data.value}
            error={!props.data.isValid}
            helperText={props.data.helperText}
        />
    );
}

export default SignUpFormInputField;