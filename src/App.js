import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
