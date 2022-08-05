import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import FlightSelectorList from "./FlightSelectorList";

function FlightsSelectorPage() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!location?.state?.outboundFlight) {
            navigate("/");
        }
    }, []);

    return (
        <>
            {!location?.state?.outboundFlight ? (
                <></>
            ) : (
                <>
                    <Navigation />
                    <FlightSelectorList />
                </>
            )}
        </>
    );
}

export default FlightsSelectorPage;
