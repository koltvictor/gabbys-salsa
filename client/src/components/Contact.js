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
        alert("Message Sent!");
    }
    return (
        <div>
            <h1 className="contactHead">Contact Form</h1>
            <form className="contactForm" onSubmit={sendEmail}>
                <input className="contactInput" type="hidden" name="contact_number" /><br/>
                <input className="contactInput" type="text" name="from_name" placeholder="Your name" required/><br/>   
                <input className="contactInput" type="email" name="from_email" placeholder="Email address" required/><br/>
                <input className="contactInput" type="text" name="subject" placeholder="Subject" required/><br/><br/>
                <textarea  className="contactInput" name="html_message"placeholder="Message" required/><br/><br/><br/><br/><br/><br/>
                <input type="submit" value="Send" className="contactButton"/>
            </form>
        </div>
    )
}