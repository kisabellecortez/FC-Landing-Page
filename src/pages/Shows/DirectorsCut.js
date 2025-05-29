import React from 'react'
import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/DirectorsCut-Header.png";

const DirectorsCut = () => {
    const imageCount = 15; 
    const imageUrls = Array.from({ length : imageCount }, (_, i) => `/images/past-shows/DirectorsCut/${i + 1}.png`);

    return(
        <div className="shows">
            <Nav />

            <img className="header" src={header} alt="past shows"/>

            <div className="title-container">
                <h1 className="title">Directors Cut</h1>
                <h1 className="year">(2011 - 2012)</h1>
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

export default DirectorsCut;