import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import headerImage from "../images/standFor.png";


const ShowsFFC = () => {
  const imageCount = 15;
  const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/ffc/${i + 1}.png`);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "10vh" }}>

      <div className="header-image-section">
          <img src={headerImage} alt="past shows" className="header-image" />
          <div className="header-overlay">
            <h1>Fashion For Change</h1>
          </div>
        </div>

      <div style={{ paddingTop: "10vh" }}>
        <div className="section-light">
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="gallery-grid">
            {imageUrls.map((url, i) => (
              <img key={i} src={url} alt={`past show ${i + 1}`} className="gallery-img" />
            ))}
          </div>
        </div>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default ShowsFFC;
