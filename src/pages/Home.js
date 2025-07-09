import React from "react";
import Footer from "../components/Footer";

import logo from "../images/logo-white.png";
import about from "../images/about-group.png";
import events from "../images/events_H.png";
import sponsorships from "../images/spons_H.png";
import Nav from '../components/Navbar.js'

import team1 from "../images/team-bod.png";
import team2 from "../images/team-artistic.png";
import team3 from "../images/team-events.png";
import PRH from "../images/PR-H.png";
import MODH from "../images/MOD-H.png";
import SPOH from "../images/SPO-H.png";
import STAH from "../images/STA-H.png";

import charities from "../images/standFor_H.png";

import arcana from "../images/Arcana-Header.png";
import spun from "../images/SpunFromGold-Header.png";
import soul from "../images/Soul-Header.png";
import tuesday from "../images/Tuesday-Header.png";
import pandoras from "../images/PandorasBox-Header.png";
import ttd from "../images/ThroughTheDecades-Header.png"; 
import fcmas from "../images/MusicAwards-Header.png";
import enchanted from "../images/enchanted-header.png";
import covertocover from "../images/CoverToCover-Header.png";
import directorscut from "../images/DirectorsCut-Header.png";
import ffc from "../images/FashionForChange-Header.png";

const Home = () => {
  return (
    <div>
                <Nav />
    
    <div className="home-container">
      
      <img src={logo} alt="Fashion For Change Logo" className="ffc-logo" />

      <div className="nav-section">
        <a href="/about-us" className="nav-tile">
          <img src={about} alt="About Us" />
          <span>about us</span>
        </a>

        <a href="/events" className="nav-tile">
          <img src={events} alt="Events" />
          <span>events</span>
        </a>
      </div>

      <a href="/sponsorship" className="nav-tile wide">
        <img src={sponsorships} alt="Sponsorships" />
        <span>sponsorships</span>
      </a>

<h3 className="section-title">teams</h3>
<div className="carousel">
  <a href="/teams/bod" className="carousel-tile">
    <img src={team1} alt="BOD Team" />
    <span>bod</span>
  </a>
  <a href="/teams/artistic" className="carousel-tile">
    <img src={team2} alt="Artistic Team" />
    <span>artistic</span>
  </a>
  <a href="/teams/events" className="carousel-tile">
    <img src={team3} alt="Events Team" />
    <span>events</span>
  </a>
  <a href="/teams/pr" className="carousel-tile">
    <img src={PRH} alt="PR Team" />
    <span>pr</span>
  </a>
  <a href="/teams/model" className="carousel-tile">
    <img src={MODH} alt="MOD Team" />
    <span>mod</span>
  </a>
  <a href="/teams/sponsorship" className="carousel-tile">
    <img src={SPOH} alt="SPO Team" />
    <span>spo</span>
  </a>
  <a href="/teams/stage" className="carousel-tile">
    <img src={STAH} alt="STA Team" />
    <span>sta</span>
  </a>
</div>


      <a href="/stand-for" className="nav-tile wide">
        <img src={charities} alt="Charities" />
        <span>charities</span>
      </a>

<h3 className="section-title">past shows</h3>
<div className="carousel">
  <a href="past-shows/arcana" className="carousel-tile">
    <img src={arcana} alt="Arcana Show" />
  </a>
  <a href="/past-shows/spun-from-gold" className="carousel-tile">
    <img src={spun} alt="Spun From Gold Show" />
  </a>
  <a href="/past-shows/soul" className="carousel-tile">
    <img src={soul} alt="Soul Show" />
  </a>
  <a href="/past-shows/tuesday" className="carousel-tile">
    <img src={tuesday} alt="Tuesday Show" />
  </a>
    <a href="/past-shows/pandoras" className="carousel-tile">
    <img src={pandoras} alt="Pandora's Box Show" />
  </a>
  <a href="/past-shows/ttd" className="carousel-tile">
    <img src={ttd} alt="Through the Decades Show" />
  </a>
    <a href="/past-shows/fcmas" className="carousel-tile">
    <img src={fcmas} alt="FCMAS Show" />
  </a>
  <a href="/past-shows/enchanted" className="carousel-tile">
    <img src={enchanted} alt="Enchanted Show" />
  </a>
    <a href="/past-shows/cover-to-cover" className="carousel-tile">
    <img src={covertocover} alt="Cover to Cover Show" />
  </a>
  <a href="/past-shows/directors-cut" className="carousel-tile">
    <img src={directorscut} alt="Director's Cut Show" />
  </a>
    <a href="/past-shows/ffc" className="carousel-tile">
    <img src={ffc} alt="FFC Show" />
  </a>
</div>

    </div>
            <Footer />

    </div>
  );
};

export default Home;
