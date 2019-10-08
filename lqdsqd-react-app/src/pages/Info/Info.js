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
    const phone = pOne + "." + pTwo + "." + pThree;

    return (
        <div>
            <div>
                <div id="info-left">
                    <div id="about-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempore earum doloribus eligendi animi tempora, nemo, accusantium repellendus eius illum maxime id neque aut. 
                            At adipisci numquam debitis veritatis esse explicabo!
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Eveniet dignissimos possimus aperiam similique quia, molestiae consectetur dolorum earum tenetur tempore iure soluta officiis ex nam ut neque, reprehenderit, odit magni.
                        </p>
                    </div>
                    <div id="contact">
                        <p className="contact-info">{email}</p>
                        <p className="contact-info">{phone}</p>
                    </div>
                </div>
                <div id="info-right">
                    <div id="profile-picture">
                        <img src="images/self_portrait.jpg" alt="lqdsqd" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;