import { LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightSearchForm from "./pages/FlightSearchPage/FlightSearchForm/FlightSearchForm";
import FlightSearchPage from "./pages/FlightSearchPage/FlightSearchPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
    return (
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
                </Routes>
            </div>
        </LocalizationProvider>
    );
}

export default App;
