import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import TextInputField from "../../Components/FormInputs/TextInputField";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 1
};

function FlightSelectorNameModal(props) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack sx={style} spacing={3}>
                    {/* <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                    >
                        Enter a name for your Journey
                    </Typography> */}
                    <TextField
                        label=""
                        placeholder="Enter a name for your Journey"
                    />
                    <LoadingButton
                        variant="contained"
                        onClick={props.submitHandler}
                        loading={props.fetchingData}
                    >
                        Add Your Journey
                    </LoadingButton>
                </Stack>
            </Modal>
        </div>
    );
}

export default FlightSelectorNameModal;
