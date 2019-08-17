import React from "react";
import "./Info.css";

function Info() {
    const eOne = "wesley";
    const eTwo = ".";
    const eThree = "lebert";
    const eFour = "@";
    const eFive = "gmail.com";
    const email = eOne + eTwo + eThree + eFour + eFive;

    const pOne = 619;
    const pTwo = 929;
    const pThree = 7792;
    const phone = pOne + "-" + pTwo + "-" + pThree;

    return (
        <div className="container">
            <div id="profile-picture">
                <img src="images/lqdsqd-cover.png" alt="lqdsqd" />
            </div>
            <div id="contact">
                <span className="contact-info">{email}</span>
                <span className="contact-divider"></span>
                <span className="contact-info">{phone}</span>
            </div>

            <div id="about-text">
                <p>
                    My name is Wes Lebert and I'm a freelance motion designer, visual effects artist, and 3D generalist based in Austin, TX.
                    With over six years of professional experience in the post-production industry, I've worked both full-time and contract for a number of creative agencies and brands, and I have experience working with teams of all sizes.
                    I bring a tireless eye for detail and a passion for problem solving to all of my projects.
                </p>
            </div>
        </div>
    )
}

export default Info;