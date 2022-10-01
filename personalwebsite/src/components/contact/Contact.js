import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jv8jodd', 'template_fdxa4ta', form.current, 'JWo0_0lKq2sBCHYeM')
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Email</h5>
            <h4>gokuldasmp1999@gmail.com</h4>
            <a href="mailto:gokuldasmp1999@gmail.com" target="_blank">Send a message</a>
          </article>
        
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"  cols="30" rows="10" placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
