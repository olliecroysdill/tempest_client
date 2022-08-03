import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//     stepper: {
//         zIndex: 1,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "fixed",
//         left: "50%",
//         transform: "translate(-50%, 0)"
//     }
// }));

const steps = [
    "Select an Outgoing Flight",
    "Select a Return Flight",
    "Create your Journey!"
];

function FlightSelectStepper() {
    // const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: "75%" }}>
            <Stepper sx={{ position: "fixed" }} activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Step {activeStep + 1}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default FlightSelectStepper;
