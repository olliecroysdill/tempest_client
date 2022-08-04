import { LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightSearchPage from "./pages/FlightSearchPage/FlightSearchPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FlightsSelectorPage from "./pages/FlightsSelectorPage/FlightsSelectorPage";
import JourneyPage from "./pages/JourneyPage/JourneyPage";

const defaultTheme = createTheme();
const theme = createTheme({
    ...defaultTheme,
    palette: {
        primary: {
            main: "#05AFE2",
            contrastText: "#fff"
        }
    },
    typography: {
        h4: {
            fontWeight: 600
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/flight-search"
                            element={<FlightSearchPage />}
                        />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route
                            path="/flights-selector"
                            element={<FlightsSelectorPage />}
                        />
                        <Route path="/journey" element={<JourneyPage />} />
                    </Routes>
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
