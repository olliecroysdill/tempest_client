import { useState, useEffect } from "react";

function getPageDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function usePageDimensions() {
    const [pageDimensions, setPageDimensions] = useState(getPageDimensions());

    useEffect(() => {
        function handleResize() {
            setPageDimensions(getPageDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return pageDimensions;
}
