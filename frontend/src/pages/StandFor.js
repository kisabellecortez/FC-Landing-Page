// src/pages/StandFor.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StandFor.css";
import standForHeader from "../images/standFor_H.png";
import logoOneRoof from "../images/charity-1.png";
import logoHumane from "../images/charity-2.png";
import logoExtendAFamily from "../images/charity-3.png";
import logoFCS from "../images/charity-4.png";

const StandFor = () => {
  return (
    <div>
      <Navbar />

      <div className="header-image-section">
        <img src={standForHeader} alt="Our Charitable Mission" className="header-image" />
        <div className="header-overlay">
          <h1>charities</h1>
        </div>
      </div>
      <div className="standfor-container">

        <div className="charity-content">
          <section className="mission">
            <h1>Our Charitable Mission</h1>
            <p className="black-text">
              At Fashion for Change, giving back to the community is at the heart of what we do. Each
              year, we partner with a local or national charity that aligns with our values of equity,
              compassion, and impact. Through fundraising events, awareness campaigns, and collaborative
              initiatives, we strive to support organizations that make a tangible difference in the lives
              of others. From youth homelessness to animal welfare, our past charity partners reflect our
              ongoing commitment to fostering positive change.
            </p>
          </section>

          <section className="charities">
            <h2>Past Charities</h2>

            <div className="charity-entry">
              <div className="charity-header-row">
                <h3 className="charity-title">Oneroof Youth Services</h3>
                <img src={logoOneRoof} alt="Oneroof Youth Services Logo" className="charity-logo" />
              </div>
              <p className="charity-description">
                oneROOF Youth Services is committed to providing for the safety, support and overall well-being of youth who are experiencing homelessness, and youth who are at-risk of homelessness, aged 12–25, in Waterloo Region.
              </p>
            </div>

            <div className="charity-entry">
              <div className="charity-header-row">
                <img src={logoHumane} alt="KW Humane Society Logo" className="charity-logo" />
              </div>
              <p className="charity-description">
                KW Humane Society provides shelter, medical care, and adoption services for abandoned and neglected animals in the Waterloo Region, while promoting responsible pet ownership and animal welfare.
              </p>
            </div>

            <div className="charity-entry">
              <div className="charity-header-row">
                <h3 className="charity-title">Extend A Family Waterloo</h3>
                <img src={logoExtendAFamily} alt="Extend A Family Waterloo Logo" className="charity-logo" />
              </div>
              <p className="charity-description">
                Extend-A-Family Waterloo fosters meaningful relationships and inclusive opportunities for individuals with developmental disabilities and their families, supporting them in leading fulfilling lives within their communities.
              </p>
            </div>

            <div className="charity-entry">
              <div className="charity-header-row">
                <img src={logoFCS} alt="Family & Children’s Services Logo" className="charity-logo" />
              </div>
              <p className="charity-description">
                The Family and Children’s Services Foundation supports vulnerable children, youth, and families by funding enrichment programs, educational opportunities, and emergency assistance for those impacted by abuse, neglect, or family crisis.
              </p>
            </div>

            <div className="charity-entry">
              <div className="charity-header-row">
                <h3 className="charity-title">WE Charity</h3>
              </div>
              <p className="charity-description">
                WE Charity focused on empowering youth to become agents of change through service-learning and global citizenship programs, supporting education, clean water, and economic opportunity initiatives both locally and globally.
              </p>
            </div>


            <p className="and-more black-text"><em>and many more...</em></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StandFor;
