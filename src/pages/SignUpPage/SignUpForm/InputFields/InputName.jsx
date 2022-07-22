import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

function InputName(props) {
    const [nameInput, setNameInput] = useState("");
    const [helperText, setHelperText] = useState("");
    const [nameInvalid, setNameInvalid] = useState(false);

    function handleValidateName() {
        if (nameInput.length === 0) {
            setNameInvalid(true);
            setHelperText(`${props.label} is required`);
        } else if (nameInput.length > 14) {
            setNameInvalid(true);
            setHelperText("Must be less than 14 characters");
        } else if (!/^[a-zA-Z]+$/.test(nameInput)) {
            setNameInvalid(true);
            setHelperText("Can only contain letters");
        } else {
            setNameInvalid(false);
            setHelperText("");
        }
    }

    return (
        <TextField
            fullWidth={true}
            id={props.id}
            label={props.label}
            variant="outlined"
            required={true}
            value={nameInput}
            onChange={(e) => {
                setNameInput(e.target.value);
            }}
            onBlur={handleValidateName}
            helperText={helperText}
            error={nameInvalid}
        />
    );
}

export default InputName;
