import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
    return (
        <div>
            <div id="landing">
                <div id="centered">
                    <div id="main-title">
                        <div>The motion design portfolio</div>
                        <div>of Wes Lebert</div>
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
                    <div id="contact-icons">
                        <a className="contact-icon fab fa-instagram" href="https://www.instagram.com/lqdsqd/" target="_blank" rel="noopener noreferrer"> </a>
                        <a className="contact-icon fab fa-vimeo-v" href="https://vimeo.com/lqdsqd" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing;