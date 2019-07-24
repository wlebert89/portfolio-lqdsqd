import React from "react";
import "./Nav.css";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    state = {
        open: false
    };

    handleClick() {
        this.setState((prevState) => {
            return { open: !prevState.open }
        })
    }

    render() {
        return (
            <header className={this.state.open ? "header-expanded" : null}>
                <div className="container">
                    <div id="logo">
                        <NavLink className="logo-link" to="/" style={{ color: "#000" }}> lqdsqd </NavLink>
                    </div>
                    <div id="hamburger-menu">
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={21}
                            height={15}
                            strokeWidth={1}
                            rotate={0}
                            color="#9f9f9f"
                            borderRadius={0}
                            animationDuration={0.35}
                        />
                    </div>
                    <nav className={this.state.open ? "nav-expanded" : null}>
                        <NavLink className="nav-link" exact to={"/"} activeStyle={{ color: "#333" }}>HOME</NavLink>
                        <NavLink className="nav-link" to={"/portfolio"} activeStyle={{ color: "#333" }}>PROJECTS</NavLink>
                        <NavLink className="nav-link" to={"/info"} activeStyle={{ color: "#333" }}>INFO</NavLink>
                        <a className="nav-link nav-icon fab fa-instagram" href="https://www.instagram.com/lqdsqd/" target="_blank" rel="noopener noreferrer"> </a>
                        <a className="nav-link nav-icon fab fa-vimeo-v" href="https://vimeo.com/lqdsqd" target="_blank" rel="noopener noreferrer"> </a>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Nav;