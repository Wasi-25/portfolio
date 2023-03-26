import React, { useRef } from 'react';
import "./contact.css";
import {MdOutlineMail} from "react-icons/md";
import {RiInstagramLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n94xihg', 'template_2hmjnm3', form.current, 'YIvvvXpl4m2_rlpqx');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>wasiullahkhalique25@gmail.com</h5>
            <a href="mailto:wasiullahkhalique25@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiInstagramLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@wasi_x_25</h5>
            <a href="https://ig.me/m/wasi_x_25" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9936217927</h5>
            <a href="https://wa.me/919936217927?text=Hello%20Wasiullah%20Khalique" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact