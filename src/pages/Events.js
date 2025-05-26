// src/pages/Events.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import headerImage from "../images/standFor.png";
import img1 from "../images/event-hearts.png";
import img2 from "../images/event-theme.png";
import img3 from "../images/event-dti.png";
import img5 from "../images/event-model.png";
import img6 from "../images/event-dance.png";

const events = [
  {
    title: "hearts & crafts",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: img1,
  },
  {
    title: "theme reveal!",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: img2,
  },
  {
    title: "dress to impress (DTI)",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: img3,
  },
  {
    title: "holiday market/showcase",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: "",
  },
  {
    title: "model workshop",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: img5,
  },
  {
    title: "dance workshop",
    desc: "beyond our charity show case in march, fashion for change also has many events that happen throughout the year.",
    image: img6,
  },
];

const Events = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>
        {/* Header */}
        <div className="header-image-section">
          <img src={headerImage} alt="events" className="header-image" />
          <div className="header-overlay">
            <h1>fc events!</h1>
          </div>
        </div>

        {/* Events Section */}
        <div className="section-light">
          <h2>extra events</h2>
          <p>
            beyond our charity show case in march, fashion for change also has many events that happen throughout the year.
          </p>

          <div className="events-list">
            {events.map((e, i) => (
              <div className="event-entry" key={i}>
                <div className="event-img">
                  {e.image ? <img src={e.image} alt={e.title} /> : <div className="placeholder-box"></div>}
                </div>
                <div className="event-info">
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "2rem" }}>...and more to come</p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Events;
