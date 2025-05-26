// src/pages/Sponsorship.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import headerImage from "../images/standFor.png";
import sponsorLogos from "../images/sponsors-collage.png";

const Sponsorship = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>
        {/* Header */}
        <div className="header-image-section">
          <img src={headerImage} alt="sponsorships" className="header-image" />
          <div className="header-overlay">
            <h1>sponsorships</h1>
          </div>
        </div>

        {/* Sponsor Section */}
        <div className="section-light">
          <h2>Our Sponsors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="sponsor-logos">
            <img src={sponsorLogos} alt="sponsor logos" className="sponsor-collage" />
          </div>

          <div className="sponsor-contact">
            <h3>Interested in being a sponsor?</h3>
            <p>Send us an email to <a href="mailto:fcatuw@gmail.com">fcatuw@gmail.com</a></p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Sponsorship;