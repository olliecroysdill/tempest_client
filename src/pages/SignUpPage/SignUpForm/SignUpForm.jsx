import InputName from "./InputName";
import { Stack, Box, Typography, Button } from "@mui/material";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

function SignUpForm() {
    return (
        <Box
            width={400}
            sx={{
                marginLeft: "80px",
                marginTop: "100px",
                padding: "20px"
            }}
        >
            <Typography variant="h4" sx={{ paddingBottom: "40px" }}>
                Sign Up
            </Typography>
            <Stack
                spacing={5}
                direction="column"
                component="form"
                alignItems="center"
            >
                <Stack spacing={2} direction="row">
                    <InputName id="first-name" label="First Name" />
                    <InputName id="last-name" label="Last Name" />
                </Stack>
                <InputEmail id="email" label="Email" />
                <InputPassword id="password" label="Password" />
                <Button
                    variant="contained"
                    sx={{ margin: "20px", width: "200px" }}
                >
                    Create Account
                </Button>
            </Stack>
        </Box>
    );
}

export default SignUpForm;
