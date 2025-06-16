// src/pages/StandFor.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StandFor.css";
import standForHeader from "../images/standFor_H.png";
import logo1 from '../images/charity_logo1.png';
import logo2 from '../images/charity_logo2.png';
import logo3 from '../images/charity_logo3.png';
import logo4 from '../images/charity_logo4.png';

const StandFor = () => {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <Navbar />

      {/* Header */}
      <div className="header-image-section">
        <img src={standForHeader} alt="what we stand for" className="header-image" />

      </div>

          <div className="charity-page">
      <div className="charity-section">
        <h1>Our Charitable Mission</h1>
        <p>
          At Fashion for Change, giving back to the community is at the heart of what we do. Each year, we partner with a local or national charity that aligns with our values of equity, compassion, and impact. Through fundraising events, awareness campaigns, and collaborative initiatives, we strive to support organizations that make a tangible difference in the lives of others. From youth homelessness to animal welfare, our past charity partners reflect our ongoing commitment to fostering positive change.
        </p>

        <div className="charity-logos">
          <img src={logo1} alt="Charity 1" />
          <img src={logo2} alt="Charity 2" />
          <img src={logo3} alt="Charity 3" />
          <img src={logo4} alt="Charity 4" />
        </div>
      </div>

      <div className="past-charities">
        <h2>Past Charities</h2>

        <div className="charity-block">
          <h3>Oneroof Youth Services</h3>
          <p>
            oneROOF Youth Services is committed to providing for the safety, support and overall well-being of youth who are experiencing homelessness, and youth who are at-risk of homelessness, aged 12-25, in Waterloo Region.
          </p>
        </div>

        <div className="charity-block">
          <h3>KW Humane Society</h3>
          <p>
            KW Humane Society provides shelter, medical care, and adoption services for abandoned and neglected animals in the Waterloo Region, while promoting responsible pet ownership and animal welfare.
          </p>
        </div>

        <div className="charity-block">
          <h3>Extend A Family Waterloo</h3>
          <p>
            Extend-A-Family Waterloo fosters meaningful relationships and inclusive opportunities for individuals with developmental disabilities and their families, supporting them in leading fulfilling lives within their communities.
          </p>
        </div>

        <div className="charity-block">
          <h3>Family and Children’s Services of the Waterloo Region Foundation</h3>
          <p>
            The Family and Children’s Services Foundation supports vulnerable children, youth, and families by funding enrichment programs, educational opportunities, and emergency assistance for those impacted by abuse, neglect, or family crisis.
          </p>
        </div>

        <div className="charity-block">
          <h3>WE Charity</h3>
          <p>
            WE Charity focused on empowering youth to become agents of change through service-learning and global citizenship programs, supporting education, clean water, and economic opportunity initiatives both locally and globally.
          </p>
        </div>

        <p className="and-more">*and many more…*</p>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default StandFor;
