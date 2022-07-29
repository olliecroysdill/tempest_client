import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import React, { useState } from "react";

function PasswordInputField(props) {
    const [showPassword, setShowPassword] = useState(false);

    function handleClickShowPassword() {
        setShowPassword((prev) => !prev);
    }

    return (
        <FormControl
            sx={{ m: 1 }}
            variant="outlined"
            fullWidth={true}
            error={!props.data.isValid && props.data.shouldDisplayError}
        >
            <InputLabel htmlFor="props.id">Password</InputLabel>
            <OutlinedInput
                sx={{ paddingRight: "20px" }}
                id={props.id}
                type={showPassword ? "text" : "password"}
                disabled={props.disabled}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.data.value}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={props.label}
            />
            <FormHelperText id={`${props.id}-helper-text`}>
                {props.data.shouldDisplayError ? props.data.helperText : " "}
            </FormHelperText>
        </FormControl>
    );
}

export default PasswordInputField;
