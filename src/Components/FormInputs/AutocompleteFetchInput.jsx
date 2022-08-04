import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AutocompleteFetchInput(props) {
    const [optionsArray, setOptionsArray] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [fetchingOptionsArray, setFetchingOptionsArray] = useState(false);
    const fetchURL = props.URL;

    useEffect(() => {
        if (inputValue === "") setOptionsArray([]);
        else {
            setFetchingOptionsArray(true);
            (async () => {
                const response = await axios.get(fetchURL, {
                    params: {
                        searchText: inputValue
                    }
                });
                setOptionsArray(response.data);
                setFetchingOptionsArray(false);
            })();
        }
    }, [inputValue]);

    function getOptionLabel(option) {
        if (option.locationType === "CITY") {
            return `${option.name}, ${option.country} (Any)`;
        }
        if (option.locationType === "AIRPORT") {
            return `${option.name} (${option.iataCode})`;
        }
    }

    function inputChangeHandler(event, newInputValue) {
        setInputValue(newInputValue);
    }

    return (
        <Autocomplete
            id={props.id}
            disabled={props.disabled}
            options={optionsArray}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={(option, value) =>
                getOptionLabel(option) === getOptionLabel(value)
            }
            loading={fetchingOptionsArray}
            fullWidth={true}
            value={props.data.value}
            onChange={(event, newValue) => {
                props.onChange(newValue);
            }}
            inputValue={inputValue}
            onInputChange={inputChangeHandler}
            renderInput={(params) => (
                <TextField
                    {...params}
                    error={!props.data.isValid && props.data.shouldDisplayError}
                    helperText={
                        props.data.shouldDisplayError
                            ? props.data.helperText
                            : " "
                    }
                    label={props.label}
                    required={props.required}
                    placeholder={props.placeholder}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {fetchingOptionsArray ? (
                                    <CircularProgress
                                        color="primary"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
}

export default AutocompleteFetchInput;
