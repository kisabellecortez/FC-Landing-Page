// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import headerImage from "../images/about-header.png";
import groupImage from "../images/about-group.png";
import team1 from "../images/team-bod.png";
import team2 from "../images/team-artistic.png";
import team3 from "../images/team-events.png";
import PRH from "../images/PR-H.png";
import MODH from "../images/MOD-H.png";
import SPOH from "../images/SPO-H.png";
import STAH from "../images/STA-H.png";
import { Link } from "react-router-dom"; // <-- import Link at the top

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>
        {/* Header Section */}
        <div className="header-image-section">
          <img src={headerImage} alt="about us" className="header-image" />
          <div className="header-overlay">
            <h1>about us</h1>
          </div>
        </div>
        <div className="intro-banner">
          <h2 className="intro-line">hi! welcome to fc :</h2>
          <h2 className="intro-line">a place for...</h2>
        </div>

        <div className="about-section">
          <div className="about-grid">
            <img src={groupImage} alt="group" className="about-img" />
            <p className="about-text">
              Fashion for Change is a non-profit organization that unites students at the University of Waterloo and Wilfrid Laurier University to host the largest student-run charity fashion show in the K-W region. Over the past 10 years as a club, we have raised over $125,000 for charity! With over 130 executives and models yearly, our family is full of passionate students that use our talents to change the world! We use fashion, dance, film, music, and other mediums to promote artistic expression.
            </p>
          </div>

          <div className="about-paragraph-below">
            <p>
              Each year, over 130 student volunteers from the University of Waterloo and Wilfrid Laurier University come together to create a vibrant blend of fashion, dance, film, music, and multimedia. Through these artistic mediums, we raise awareness and funds for meaningful charitable causes. At Fashion for Change, we believe creativity has the power to inspire action. We provide a space where students can express themselves, collaborate across disciplines, and make a lasting impact on their community. From the first concept to the final spotlight, Fashion for Change is a celebration of identity, innovation, and collective purpose.
            </p>
          </div>
        </div>


        <div className="full-width teams-section">
          <h2>our teams</h2>
          <div className="horizontal-scroll-wrapper">
            <div className="horizontal-scroll" id="teams-scroll">
              <Link to="/teams/bod" className="team-card">
                <img src={team1} alt="bod" />
  <div className="team-label">bod</div>
              </Link>
              <Link to="/teams/artistic" className="team-card">
                <img src={team2} alt="artistic" />
  <div className="team-label">artistic</div>
              </Link>
              <Link to="/teams/events" className="team-card">
                <img src={team3} alt="events" />
  <div className="team-label">events</div>
              </Link>
              <Link to="/teams/stage" className="team-card">
                <img src={STAH} alt="stage" />
  <div className="team-label">stage</div>
              </Link>
              <Link to="/teams/finance" className="team-card">
                <img src={team2} alt="finance" />
  <div className="team-label">finance</div>
              </Link>
              <Link to="/teams/pr" className="team-card">
                <img src={PRH} alt="pr" />
  <div className="team-label">public relations</div>
              </Link>
              <Link to="/teams/model" className="team-card">
                <img src={MODH} alt="model" />
  <div className="team-label">model</div>
              </Link>
              <Link to="/teams/sponsorships" className="team-card">
                <img src={SPOH} alt="sponsorships" />
  <div className="team-label">sponsorship</div>
              </Link>
            </div>
            <button
              className="scroll-arrow"
              onClick={() => {
                const scrollContainer = document.getElementById("teams-scroll");
                scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
              }}
            >
              ❯
            </button>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
};

export default About;