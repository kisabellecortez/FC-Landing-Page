// DONE

import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import React, { useContext, useState } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const ArcanaPage = () => {
    const imagesArray = useContext(ImagesContext);
    const folderPath = "Shows/ThroughTheDecades/"
    const collageImgNum = Array.from({ length : 15 }, (_, i) => i+1)
    const [selectedImage, setSelectedImage] = useState(null);

    const header = imagesArray.find(
        (url) => url.includes(folderPath) && url.includes(`Header.png`)
    )

    const collageImages = collageImgNum.map((num) => {
        return imagesArray.find(
            (url) => url.includes(folderPath) && url.includes(`${num}.png`)
        )
    }).filter((url) => url)

    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <div className="page">
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
                        {collageImages.map((url, index) => (
                            <img 
                                className="gallery-img"
                                key={index}
                                src={url}
                                alt={`Through the Decades ${index + 1}`}
                                crossOrigin="anonymous"
                                   onClick={() => handleImageClick(url)}
                            />
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
