import React from "react";
import "./contact.css";
import { GrLinkedinOption } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bkfvezo",
      "template_7ehm7oa",
      form.current,
      "b-sIKwSRHm8dZ22EY"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>email</h4>
            <h5>moaz.a.gad@gmail.com</h5>
            <a target="_blank" href="mailto:moaz.a.gad@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedinOption className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Moaz Gad</h5>
            <a target="_blank" href="https://linkedin.com/in/moazgad">
              Let's Talk
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+20 01021471870</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=2001021471870"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
