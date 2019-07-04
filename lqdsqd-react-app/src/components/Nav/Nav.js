import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <div className="container">
                <div id="logo">
                    <Link to="/" style={{ color: "#000" }}> lqdsqd </Link>
                </div>
                <div id="nav">
                    <span className="nav-link"><Link to={"/portfolio"}>PROJECTS</Link></span>
                    <span className="nav-link"><Link to={"/about"}>ABOUT</Link></span>
                    <a className="nav-link fab fa-instagram" href="https://www.instagram.com/lqdsqd/" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="nav-link fab fa-github-square" href="https://github.com/wlebert89" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="nav-link fab fa-linkedin-in" href="https://www.linkedin.com/in/wesley-lebert-9a147a180/" target="_blank" rel="noopener noreferrer"> </a>
                </div>
            </div>
        </header>
    )
}

export default Nav;