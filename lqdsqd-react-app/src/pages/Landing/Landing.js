import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
    return (
        <div>
            <div id="landing">
                <div id="main-title">
                    lqdsqd
            </div>
                <div id="sub-title">
                    motion design | 3D | visual effects
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
                <div id="contact-icons">
                    <a className="contact-icon fab fa-instagram" href="https://www.instagram.com/lqdsqd/" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="contact-icon fab fa-linkedin-in" href="https://www.linkedin.com/in/wesley-lebert-9a147a180/" target="_blank" rel="noopener noreferrer"> </a>
                </div>
            </div>
        </div>
    )
}

export default Landing;