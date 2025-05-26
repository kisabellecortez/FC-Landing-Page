// src/pages/Shows.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import { Link } from "react-router-dom";


const shows = [
  { title: "enchanted", path: "/past-shows/enchanted" },
  { title: "fashion for change", path: "/past-shows/ffc" },
  { title: "so you think you got style", path: "/past-shows/sytygs" },
  { title: "pandoras box", path: "/past-shows/pandoras" },
  { title: "through the decades", path: "/past-shows/ttd" },
  { title: "FCMAS", path: "/past-shows/fcmas" },
];


const Shows = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>
        <div className="section-light">
          <h2>Past Shows</h2>
          <ul className="shows-list">
  {shows.map((show, index) => (
    <li key={index}>
      <Link to={show.path}>{show.title}</Link>
    </li>
  ))}
</ul>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shows;