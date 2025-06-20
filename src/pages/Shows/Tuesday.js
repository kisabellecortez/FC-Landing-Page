import React from 'react'
import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/Tuesday-Header.png";

const Tuesday = () => {
    const imageCount = 15; 
    const imageUrls = Array.from({ length : imageCount }, (_, i) => `/images/past-shows/Tuesday/${i + 1}.png`);

    return(
        <div className="shows">
            <Nav />

                       <div className="header-image-section">
          <img src={header} alt="tuesday" className="header-image" />
        </div>
            <div className="title-container">
                <h1 className="title">tuesday</h1>
                <h1 className="year">(2018 - 2019)</h1>
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

export default Tuesday;