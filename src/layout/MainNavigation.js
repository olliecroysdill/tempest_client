import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Landing Page</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default MainNavigation;
