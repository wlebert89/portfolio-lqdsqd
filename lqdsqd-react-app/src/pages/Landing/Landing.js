import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
    return (
        <div id="landing">
            <div id="main-title">
                lqdsqd
            </div>
            <div id="sub-title">
                motion design | visual effects | 3D
            </div>
            <div id="buttons">
                <Link to={"/portfolio"}>
                    <button className="button-link button-projects">
                        Projects
                    </button>
                </ Link>
                <Link to={"/info"}>
                    <button className="button-link button-info">
                        Info
                    </button>
                </ Link>
            </div>
            <div id="cta">
                Available for freelance.
            </div>
        </div>
    )
}

export default Landing;