import React from "react";
import Nav from '../components/Navbar.js'
import Footer from "../components/Footer.js";

import logo from '../images/FFC-Logo.png'

import AboutUs from '../images/Home/HOME-AboutUs.png'
import Events from '../images/Home/HOME-Events.png'
import Sponsorships from '../images/Home/HOME-Sponsorships.png'
import Charities from '../images/Home/HOME-Charities.png'

import bod from "../images/BOD-H.png";
import artistic from "../images/ART-H.png";
import events from "../images/EVE-H.png";
import pr from "../images/PR-H.png";
import model from "../images/MOD-H.png";
import sponsor from "../images/SPO-H.png";
import stage from "../images/STA-H.png";
import marketing from "../images/MAR-H.png"
import finance from "../images/Teams/Finance/FIN_H.png"

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
    <div className="page">
      <Nav />

      <div className="header">
        <img src={logo} alt="Fashion for Change logo"></img>
        <div className="header-overlay">
        </div>
      </div>

      <div className="home">
        <div className="home-collage">
          <div className="image">
            <img className="small" src={AboutUs} alt="About Us header"></img>
            <h1>about us</h1>
          </div>
          <div className="image">
            <img className="small" src={Events} alt="Events header"></img>
            <h1>events</h1>
          </div>
        </div>

        <div className="image">
          <img className="big" src={Sponsorships} alt="Sponsorships header"></img>
          <h1>sponsorships</h1>
        </div>

        <div className="image">
          <img className="big" src={Charities} alt="Charities header"></img>
          <h1>charities</h1>
        </div>

        <h1 className="section-title">teams</h1>
        <div className="carousel">
          <a href="/teams/bod" className="carousel-tile">
            <img src={bod} alt="BOD Team" />
            <span>bod</span>
          </a>
          <a href="/teams/artistic" className="carousel-tile">
            <img src={artistic} alt="Artistic Team" />
            <span>artistic</span>
          </a>
          <a href="/teams/events" className="carousel-tile">
            <img src={events} alt="Events Team" />
            <span>events</span>
          </a>
          <a href="/teams/stage" className="carousel-tile">
            <img src={stage} alt="Stage Team" />
            <span>stage</span>
          </a>
          <a href="/teams/marketing" className="carousel-tile">
            <img src={marketing} alt="Marketing Team" />
            <span>marketing</span>
          </a>
          <a href="/teams/finance" className="carousel-tile">
            <img src={finance} alt="STA Team" />
            <span>finance</span>
          </a>
          <a href="/teams/pr" className="carousel-tile">
            <img src={pr} alt="PR Team" />
            <span>pr</span>
          </a>
          <a href="/teams/model" className="carousel-tile">
            <img src={model} alt="MOD Team" />
            <span>model</span>
          </a>
          <a href="/teams/sponsorship" className="carousel-tile">
            <img src={sponsor} alt="SPO Team" />
            <span>sponsorship</span>
          </a>
        </div>

        <h1 className="section-title">past shows</h1>
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
