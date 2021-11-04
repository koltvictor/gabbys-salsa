import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_1cl1egj", "template_u54d3xr", e.target, "user_Jhf473QBsymPnicTrMVk1")
            .then(
                (data) => {window.location.reload()},
                error => console.log(error.text)
            );
        e.target.reset();
    }
    return (
        <div className="contactForm">
            <form className="contactForm" onSubmit={sendEmail}>
                <input className="contactInput" type="hidden" name="contact_number" /><br/>
                <label className="contactInputLabel">Name</label>
                <input className="contactInput" type="text" name="from_name"/><br/>   
                <label className="contactInputLabel">Email</label>
                <input className="contactInput" type="email" name="from_email"/><br/>
                <label className="contactInputLabel">Subject</label>
                <input className="contactInput" type="text" name="subject"/><br/>
                <label className="contactInputLabel">Message</label>
                <textarea  className="contactInput" name="html_message"/><br/>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}