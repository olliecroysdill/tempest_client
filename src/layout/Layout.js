import React from "react";
import MainNavigation from "./MainNavigation";

function Layout(props) {
    return (
        <section>
            <MainNavigation />
            <main>{props.children}</main>
        </section>
    );
}

export default Layout;
