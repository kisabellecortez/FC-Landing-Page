import React from 'react';
import Nav from '../components/Navbar.js';
import Footer from '../components/Footer';
import "./Events.css";

// Image imports (now using .png)
import events_1 from "../images/events_1.png";
import events_2 from "../images/events_2.png";
import events_3 from "../images/events_3.png";
import events_4 from "../images/events_4.png";
import events_5 from "../images/events_5.png";
import events_6 from "../images/events_6.png";
import events_7 from "../images/events_7.png";
import events_H from "../images/events_H.png"; // used as header image

const events = [
  {
    title: "Hearts & Crafts",
    img: events_1,
    description: "Hearts & Crafts was our cozy Valentine’s collab with @itshera.co, where students took a break from studying to enjoy pizza, DIY keychains, paper flowers, goodie bags, and heartfelt letters to inspiring women. It was the perfect mix of creative expression, friendship, and good vibes—plus a cute photo booth to capture the moment.",
  },
  {
    title: "Theme Reveal!",
    img: events_2,
    description: "Our Theme Reveal Party is where we unveil the concept that shapes the creative direction of the year, Arcana. Inspired by Alice in Borderland, this year’s theme replaced traditional playing card levels with tarot cards. The night was filled with dancing, fun, and a glowing photo booth, bringing the FC community together to celebrate what’s ahead.",
  },
  {
    title: "Dress To Impress (DTI)",
    img: events_3,
    description: "Dress to Impress IRL invited students to show off their best fits in a casual, welcoming environment. Whether dressed to the nines or just there to watch, attendees had the chance to express their style, connect with others, and get photographed by our FC team.",
  },
  {
    title: "Holiday Market/Showcase",
    img: events_4,
    description: "Our Holiday Market was a festive afternoon full of crafts, games, music, and community spirit. Students supported local vendors, made handmade gifts, enjoyed holiday snacks, and donated non-perishable items to the KW Food Bank. One lucky donor even won a pair of AirPods!",
  },
  {
    title: "Model Workshop",
    img: events_5,
    description: "The Model Workshop gave new and returning models the chance to learn runway basics, build confidence, and prepare for the show. With games, training, prizes, and pizza, the day brought great energy and set the tone for the year ahead.",
  },
  {
    title: "Dance Workshop",
    img: events_6,
    description: "Our Dance Workshop welcomed anyone looking to learn new choreography and connect through movement. Open to dancers of all levels, the session built confidence, skills, and community. Plus, it was a great place to vibe and get involved with FC’s dance team.",
  },
  {
    title: "Stage Workshop",
    img: events_7,
    description: "Focused on production, lighting, and tech, the Stage Workshop introduced attendees to the behind-the-scenes magic that powers our shows. Whether you were a returning exec or just curious about joining the team, the workshop made stagecraft exciting and accessible.",
  },
];

const Events = () => {
  return (
    <div>
      <Nav />
      <div className="header-image-section">
        <img src={events_H} alt="events" className="header-image" />
        <div className="header-overlay">
          <h1> fc events</h1>
        </div>
      </div>

      <div className="events-page">
        <p className="events-intro">
          Looking to meet new people, get creative, and be part of something meaningful? Fashion for Change hosts a wide variety of events throughout the year—whether you’re into fashion, dance, crafts, or just hanging out with cool people, there’s always something happening. From cozy nights in to high-energy workshops, our events are open to everyone and built to bring people together.
        </p>
        {events.map((event, index) => (
          <div className="event-entry" key={index}>
            <div className="event-img">
              <img src={event.img} alt={event.title} />
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
        <p className="events-footer">...and more to come</p>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
