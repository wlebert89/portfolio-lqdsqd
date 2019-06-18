import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <header>
            <div className="container">
                <div id="logo">
                    lqdsqd
            </div>
                <div id="nav">
                    <a className="nav-link" href="portfolio.html" target="_blank">PROJECTS</a>
                    <a className="nav-link" href="index.html">ABOUT</a>
                    <a className="nav-link" href="contact.html">CONTACT</a>
                    <a className="nav-link fab fa-instagram" href="https://www.instagram.com/lqdsqd/" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="nav-link fab fa-github-square" href="https://github.com/wlebert89" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="nav-link fab fa-linkedin-in" href="https://www.linkedin.com/in/wesley-lebert-9a147a180/" target="_blank" rel="noopener noreferrer"> </a>
                </div>
                <div id="hamburger-menu">
                    <div id="nav-icon1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Nav;