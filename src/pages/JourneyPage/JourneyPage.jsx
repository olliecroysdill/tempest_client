import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function JourneyPage() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state.journey);
    }, []);
    return <div>JourneyPage</div>;
}

export default JourneyPage;
