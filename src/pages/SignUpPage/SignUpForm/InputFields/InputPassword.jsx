import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

function InputPassword(props) {
    const [passwordInput, setPasswordInput] = useState("");
    const [helperText, setHelperText] = useState("");
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    function handleValidatePassword() {
        if (passwordInput.length === 0) {
            setPasswordInvalid(true);
            setHelperText("Password is required");
        } else if (passwordInput.length < 8 || passwordInput.length > 20) {
            setPasswordInvalid(true);
            setHelperText("Must be between 8 and 20 characters");
        } else if (!/^.*[a-z].*$/.test(passwordInput)) {
            setPasswordInvalid(true);
            setHelperText("Must contain at least one lower case letter");
        } else if (!/^.*[A-Z].*$/.test(passwordInput)) {
            setPasswordInvalid(true);
            setHelperText("Must contain at least one upper case letter");
        } else if (!/^.*\d.*$/.test(passwordInput)) {
            setPasswordInvalid(true);
            setHelperText("Must contain at least one numeric character");
        } else if (!/^.*[-+_!@#$%^&*.,?].*$/.test(passwordInput)) {
            setPasswordInvalid(true);
            setHelperText("Must contain at least one special character");
        } else {
            setPasswordInvalid(false);
            setHelperText("");
        }
    }

    return (
        <TextField
            type="password"
            margin="normal"
            fullWidth={true}
            id={props.id}
            label={props.label}
            variant="outlined"
            required={true}
            value={passwordInput}
            onChange={(e) => {
                setPasswordInput(e.target.value);
            }}
            onBlur={handleValidatePassword}
            helperText={helperText}
            error={passwordInvalid}
        />
    );
}

export default InputPassword;
