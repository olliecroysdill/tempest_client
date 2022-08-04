import { LoadingButton } from "@mui/lab";
import { Modal, Stack, TextField } from "@mui/material";
import React from "react";

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
                    <TextField
                        label=""
                        placeholder="Enter a name for your Journey"
                        value={props.journeyName}
                        onChange={props.onChangeJourneyName}
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
