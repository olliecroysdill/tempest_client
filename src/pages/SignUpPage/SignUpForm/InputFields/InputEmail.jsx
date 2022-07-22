import { useState } from "react";
import { TextField } from "@mui/material";

function InputEmail(props) {
    const [emailInput, setEmailInput] = useState("");
    const [helperText, setHelperText] = useState("");
    const [emailInvalid, setEmailInvalid] = useState(false);

    function handleValidateEmail() {
        if (emailInput.length === 0) {
            setEmailInvalid(true);
            setHelperText("Email is required");
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmailInvalid(true);
            setHelperText("Must be a valid email");
        } else {
            setEmailInvalid(false);
            setHelperText("");
        }
    }

    return (
        <TextField
            margin="normal"
            fullWidth={true}
            id={props.id}
            label={props.label}
            variant="outlined"
            required={true}
            value={emailInput}
            onChange={(e) => {
                setEmailInput(e.target.value);
            }}
            onBlur={handleValidateEmail}
            helperText={helperText}
            error={emailInvalid}
        />
    );
}

export default InputEmail;
