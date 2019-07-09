import React from "react";
import "./About.css";

function About() {
    return (
        <div className="container">
            <div id="profile-picture">
                <img src="images/lqdsqd-cover.png" alt="lqdsqd" />
            </div>
            <div id="contact">
                wesley.lebert@gmail.com | (619) 929-7792
            </div>
            <div id="about-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore soluta, molestiae tenetur impedit eum cupiditate nemo, at aperiam ipsum eveniet voluptatum unde tempore earum aspernatur cum rem doloremque dicta.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus rem, optio dolore sed ducimus quasi adipisci, possimus nostrum cum nam illo deserunt tempore quod. Accusamus enim saepe molestias sequi incidunt?
                </p>
            </div>
        </div>
    )
}

export default About;