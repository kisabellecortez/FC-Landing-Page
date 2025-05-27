import React from 'react'
import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/SpunFromGold-Header.png";

const Soul = () => {
    const imageCount = 15; 
    const imageUrls = Array.from({ length : imageCount }, (_, i) => `/images/past-shows/Soul/${i + 1}.png`);

    return(
        <div className="shows">
            <Nav />

            <img className="header" src={header} alt="past shows"/>

            <div className="title-container">
                <h1 className="title">Soul</h1>
                <h1 className="year">(2022 - 2023)</h1>
            </div>

            <p>Summary</p>

            <div className="gallery-grid">
                {imageUrls.map((url, i) => (
                <img key={i} src={url} alt={`past show ${i + 1}`} className="gallery-img" />
                ))}
            </div>
              
            <Footer />
        </div>
    )
}

export default Soul;