// src/pages/Sponsorship.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Sponsorship.css";
import spons_H from "../images/spons_H.png";
import { Link } from "react-router-dom";

const Sponsorship = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>
        {/* Header */}
        <div className="header-image-section">
          <img src={spons_H} alt="sponsorships" className="header-image" />
          <div className="header-overlay">
            <h1>sponsorships</h1>
          </div>
        </div>

        <div className="sponsors-section">
          <div className="sponsors-container">
            <h1>Our Sponsors</h1>
            <p>
              We are incredibly grateful to the generous organizations who have supported our mission.
              Their contributions help make our initiatives possible, from local events to large-scale
              fundraising efforts. Through product donations, financial support, and community involvement,
              these sponsors empower us to create meaningful impact across the Waterloo Region and beyond.
            </p>

            <h2>Interested in being a sponsor?</h2>
            <p>Send us an email to <a href="mailto:fcatuw@gmail.com">fcatuw@gmail.com</a>!</p>

            <div className="sponsor-buttons">
              <a
                href="/sponsorship-package.pdf"
                className="sponsor-button white-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsorship Package
              </a>
<Link to="/contact-us" className="sponsor-button black-button">
  Contact Us!
</Link>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Sponsorship;