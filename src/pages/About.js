// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import Typewriter from 'typewriter-effect';
import headerImage from "../images/AboutUs-Header.png";
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
      <div>
        {/* Header Section */}
        <div className="show-header">
          <img src={headerImage} alt="about us" className="header-image" />
          <div className="header-overlay">
            <h1>about us</h1>
          </div>
        </div>
        
        <div className="homepage">
      <h1>hi! welcome to fc :)</h1>
      <h2 className="typing-line">
        a place for{' '} <span className="typewriter">
          <Typewriter
            options={{
              strings: ['models', 'dancers', 'designers'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
              pauseFor: 1200,
            }}
          />
        </span>
      </h2>

      <div className="intro-section">
        <img src={groupImage} alt="Fashion for Change Group" className="intro-img" />
          <div className="intro-text">

        <p>
          Fashion for Change is more than just a "fashion club". We are a non-profit organization that unites
          students at the University of Waterloo and Wilfrid Laurier University to host the largest student-run
          charity fashion show in the K-W region. Over the past 10 years as a club, we have raised over $125,000
          for charity! With over 130 executives and models yearly, our family is full of passionate students that
          use our talents to change the world! We use fashion, dance, film, music, and other mediums to promote
          artistic expression.

                  Each year, over 130 student volunteers from the University of Waterloo and Wilfrid Laurier University come
        together to create a vibrant blend of fashion, dance, film, music, and multimedia. Through these artistic
        mediums, we raise awareness and funds for meaningful charitable causes.

                At Fashion for Change, we believe creativity has the power to inspire action. We provide a space where
        students can express themselves, collaborate across disciplines, and make a lasting impact on their
        community. From the first concept to the final spotlight, Fashion for Change is a celebration of identity,
        innovation, and collective purpose.
        </p>
        </div>
      </div>

      <h2>our teams</h2>
      <div className="carousel-wrapper">
        <div className="carousel-scroll">
          <Link to="/teams/bod" className="team-card">
          <div className="team-card">
            <img src={team1} alt="BOD" />
            <p className="team-label">bod</p>
          </div>
          </Link>

          <Link to="/teams/artistic" className="team-card">
          <div className="team-card">
            <img src={team2} alt="Artistic" />
            <p className="team-label">artistic</p>
          </div>
          </Link>

          <Link to="/teams/events" className="team-card">
          <div className="team-card">
            <img src={team3} alt="Events" />
            <p className="team-label">events</p>
          </div>
          </Link>

          <Link to="/teams/pr" className="team-card">
          <div className="team-card">
            <img src={PRH} alt="PR" />
            <p className="team-label">public relations</p>
          </div>
          </Link>

          <Link to="/teams/model" className="team-card">
          <div className="team-card">
            <img src={MODH} alt="Models" />
            <p className="team-label">models</p>
          </div>
          </Link>

          <Link to="/teams/sponsorship" className="team-card">
          <div className="team-card">
            <img src={SPOH} alt="Sponsorships" />
            <p className="team-label">sponsorships</p>
          </div>
          </Link>

          <Link to="/teams/stage" className="team-card">
          <div className="team-card">
            <img src={STAH} alt="Stage" />
            <p className="team-label">stage</p>
          </div>
          </Link>

          {/* Add more cards if needed */}
        </div>
      </div>
    </div>

        <Footer />

      </div>
    </div>
  );
};

export default About;