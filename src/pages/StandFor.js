// src/pages/StandFor.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import standForHeader from "../images/standFor.png";
import pastCharityImage from "../images/past-charity.png";

const pastCharities = [
  {
    title: "valentines day",
    description: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: ""
  },
  {
    title: "humane society",
    description: "(2023 - 2024)\nfdhaslfjaslfjaisfhdaslfjdsal write stuff here yay.",
    image: ""
  },
  {
    title: "extra events",
    description: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: ""
  },
  {
    title: "extra events",
    description: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: pastCharityImage
  },
  {
    title: "extra events",
    description: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: ""
  },
];

const StandFor = () => {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <Navbar />

      {/* Header */}
      <div className="header-image-section">
        <img src={standForHeader} alt="what we stand for" className="header-image" />
        <div className="header-overlay">
          <h1>what do we stand for</h1>
        </div>
      </div>

      {/* Section: Our Charities */}
      <div className="section-light">
        <h2>Our Charities</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Past Charities */}
        <div className="charities-list">
          {pastCharities.map((charity, index) => (
            <div className="charity-entry" key={index}>
              <div className="charity-text">
                <h3>{charity.title}</h3>
                <p>{charity.description}</p>
              </div>
              <div className="charity-img">
                {charity.image && <img src={charity.image} alt={charity.title} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StandFor;
