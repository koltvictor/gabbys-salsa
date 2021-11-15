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
        <div>
            <h1 className="contactHead">Contact Form</h1>
            <form className="contactForm" onSubmit={sendEmail}>
                <input className="contactInput" type="hidden" name="contact_number" /><br/>
                <input className="contactInput" type="text" name="from_name" placeholder="What's your name?"/><br/>   
                <input className="contactInput" type="email" name="from_email" placeholder="What's your email address?"/><br/>
                <input className="contactInput" type="text" name="subject" placeholder="What's the subject of your message?"/><br/><br/>
                <textarea  className="contactInput" name="html_message"placeholder="Your message goes here:"/><br/><br/><br/><br/><br/><br/>
                <input type="submit" value="Send" className="contactButton"/>
            </form>
        </div>
    )
}