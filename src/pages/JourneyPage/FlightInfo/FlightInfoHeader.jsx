import { Button, Stack, Typography } from "@mui/material";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";

function FlightInfoHeader(props) {
    return (
        <Stack direction="row">
            <Button
                onClick={() => {
                    props.setSelected("outbound");
                }}
                variant="text"
                fullWidth
                sx={{
                    borderRadius: "12px 0px 0px 0px",
                    backgroundColor:
                        props.selected === "outbound" ? "primary.main" : "#eee",
                    border: "none"
                }}
                disabled={props.selected === "outbound" ? true : false}
            >
                <Typography
                    variant="h5"
                    color={props.selected === "outbound" ? "#fff" : "#666"}
                >
                    OUTBOUND FLIGHT
                </Typography>
            </Button>
            <Button
                onClick={() => {
                    props.setSelected("return");
                }}
                variant="text"
                fullWidth
                sx={{
                    borderRadius: "0px 12px 0px 0px",
                    backgroundColor:
                        props.selected === "return" ? "primary.main" : "#eee",
                    border: "none"
                }}
                disabled={props.selected === "return" ? true : false}
            >
                <Typography
                    variant="h5"
                    color={props.selected === "return" ? "#fff" : "#666"}
                >
                    RETURN FLIGHT
                </Typography>
            </Button>
        </Stack>
    );
}

export default FlightInfoHeader;
