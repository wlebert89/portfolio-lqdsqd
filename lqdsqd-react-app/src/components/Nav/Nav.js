import React from "react";
import "./Nav.css";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    state = {
        open: false
    };

    handleClick() {
        !this.state.open ? this.setState({ open: true }) : this.setState({ open: false });
    }

    render() {
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
                        {/* <a className="nav-link fab fa-github-square" href="https://github.com/wlebert89" target="_blank" rel="noopener noreferrer"> </a> */}
                        <a className="nav-link fab fa-linkedin-in" href="https://www.linkedin.com/in/wesley-lebert-9a147a180/" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                    <div id="hamburger-menu">
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={21}
                            height={15}
                            strokeWidth={1}
                            rotate={0}
                            color='black'
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </div>
                </div>
            </header>
        );
    }
};

export default Nav;