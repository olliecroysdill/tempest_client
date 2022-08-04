import { Stack } from "@mui/material";
import React from "react";
import usePageDimensions from "../../../hooks/usePageDimensions";
import CO2InfoContent from "./CO2InfoContent";
import CO2InfoHeader from "./CO2InfoHeader";

function CO2Info() {
    const pageDimensions = usePageDimensions();
    return (
        <Stack
            width="100%"
            maxWidth="1280px"
            border="1px solid #ddd"
            sx={{
                borderRadius: "13px 13px 13px 13px",
                cursor: "pointer"
            }}
        >
            <CO2InfoHeader />
            <Stack
                padding={2}
                direction={pageDimensions.width > 800 ? "row" : "column"}
                width="100%"
                spacing={pageDimensions.width > 800 ? 5 : 2}
                alignItems="center"
            >
                <CO2InfoContent />
                {pageDimensions.width > 800 && (
                    <Stack
                        width={"2px"}
                        sx={{ backgroundColor: "#ddd" }}
                        height="80px"
                    ></Stack>
                )}
                <CO2InfoContent />
            </Stack>
        </Stack>
    );
}

export default CO2Info;
