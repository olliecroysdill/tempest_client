import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRestrictToLoginOnly() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.getYourWay_session_token) {
            navigate("/login");
        }
    }, []);
}

export default useRestrictToLoginOnly;
