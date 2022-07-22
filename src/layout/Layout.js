import { ClassNames } from "@emotion/react";
import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
    return (
        <section className={classes["app-container"]}>
            <MainNavigation />
            <main>{props.children}</main>
        </section>
    );
}

export default Layout;
