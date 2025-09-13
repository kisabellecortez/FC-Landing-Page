// src/pages/Contact.js
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css" 
import { FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    // Wait for FB to be available before calling parse
    const interval = setInterval(() => {
      if (window.FB) {
        window.FB.XFBML.parse();
        clearInterval(interval);
      }
    }, 500);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="subtitle">Interested in working with us? Let’s talk :)</p>

        <div className="contact-card elevated">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li><FaEnvelope /> <a href="mailto:fcatuw@gmail.com">fcatuw@gmail.com</a></li>
              <li><FaInstagram /> <a href="https://instagram.com/fashionforchange" target="_blank" rel="noreferrer">@fashionforchange</a></li>
              <li><FaFacebook /> <a href="https://www.facebook.com/fashionforchange" target="_blank" rel="noreferrer">fashionforchange</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://facebook.com/fashionforchange" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com/fashionforchange" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://discord.com" target="_blank" rel="noreferrer"><FaDiscord /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/meoknegb" // Replace with your actual Formspree endpoint
            method="POST"
          >
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="4" placeholder="Write your message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="instagram-section">
          <iframe
            title="Instagram Feed"
            src="https://www.instagram.com/fashionforchange/embed"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="facebook-embed">
  <div
    className="fb-page"
    data-href="https://www.facebook.com/fashionforchange"
    data-tabs="timeline"
  data-width="1000"
    data-height="700"
    data-small-header="false"
    data-adapt-container-width="true"
    data-hide-cover="false"
    data-show-facepile="true"
  >
    <blockquote
      cite="https://www.facebook.com/fashionforchange"
      className="fb-xfbml-parse-ignore"
    >
      <a href="https://www.facebook.com/fashionforchange">Fashion for Change</a>
    </blockquote>
  </div>
</div>


        <div className="contact-footer">
          <p>Join us!</p>
          <p>@fcatuw</p>
          <p>fcatuw@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;