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
                    Liquid Squid is the visual design alias of Wes Lebert - freelance motion designer, visual effects artist, and 3D generalist in Austin, TX.
                    With six years of professional experience in the post-production industry, Wes has worked both full-time and contract for a number of creative agencies and brands, and has experience working with teams of all sizes.
                    He brings a tireless eye for detail and a passion for problem solving to all of his projects.
                    Please get in touch any time via the above channels.
                </p>
            </div>
        </div>
    )
}


export default Info;