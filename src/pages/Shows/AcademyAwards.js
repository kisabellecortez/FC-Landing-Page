import React from 'react'
import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import headerImage from "../../images/standFor.png";

const AcademyAwards = () => {
    const imageCount=15; 
    const imageUrls = Array.from({ length : imageCount }, (_, i) => `/images/past-shows/enchanted/${i + 1}.png`);

    return(
        <div>
            <Nav />
            <div style={{ paddingTop: "10vh" }}>

            <div className="header-image-section">
                <img src={headerImage} alt="past shows" className="header-image" />
                <div className="header-overlay">
                    <h1>The Academy Awards</h1>
                    <h2>(2021 - 2022)</h2>
                </div>
                </div>

            <div style={{ paddingTop: "10vh" }}>
                <div className="section-light">
                    <h1>The Academy Awards</h1>
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
    )
}

export default AcademyAwards;