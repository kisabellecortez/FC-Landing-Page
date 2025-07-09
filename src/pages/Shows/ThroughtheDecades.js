// DONE

import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import header from "../../images/ThroughTheDecades-Header.png";
import { useState } from "react";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/ttd/${i + 1}.png`);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <div>
            <Nav />
            <div className="show-header">
                <img src={header} alt="artistic" className="header-image" />
                <div className="header-overlay">
                </div>
            </div>
            <div className="arcana-container">
                <div className="arcana-header">
                    <h1>Through the Decades<span className="arcana-year">(2016 - 2017)</span></h1>
                    <p className="arcana-description">
                        Travel through time with Through the Decades, Fashion for Change’s 2017 show that pays homage to the defining styles of the 1950s through the 1990s. Each scene is a time capsule, featuring meticulously curated fashion and choreography inspired by iconic eras, from the rock-and-roll rebellion of the '50s, the free-spirited '60s, disco-infused '70s, neon-powered '80s, to the grunge and minimalism of the '90s. A dynamic blend of nostalgia and contemporary flair, this show celebrates the evolution of culture and fashion while supporting education in Moyamba, Sierra Leone.
                    </p>
                </div>



                <div className="gallery-container">
                    <div className="gallery-grid">
                        {imageUrls.map((url, i) => (
                            <img key={i} src={url} alt={`past show ${i + 1}`} className="gallery-img" onClick={() => handleImageClick(url)}
                                style={{ cursor: "pointer" }} />
                        ))}
                    </div>
                </div>

            </div>
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Full view" className="modal-image" />
                        <button className="close-button" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ArcanaPage;
