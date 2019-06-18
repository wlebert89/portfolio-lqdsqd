import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div id="contact">
            <div id="contact-title">
                Contact
        </div>
            <div class="contact-info">
                wesley.lebert@gmail.com
        </div>
            <div class="contact-info">
                (619) 929-7792
        </div>
            <form>
                <label for="name"></label>
                <input type="text" class="input-box" name="name" placeholder="name" />
                <label for="Email"></label>
                <input type="text" class="input-box" name="Email" placeholder="email" />
                <label for="subject"></label>
                <textarea id="message-input" name="message" placeholder="message"></textarea>
                <input id="submit" type="submit" value="SEND" />
            </form>
        </div>
    )
}

export default Contact;