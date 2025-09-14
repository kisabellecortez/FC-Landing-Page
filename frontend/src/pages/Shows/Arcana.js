// DONE

import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import React, { useContext, useState } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const ArcanaPage = () => {
    const imagesArray = useContext(ImagesContext);
    const folderPath = "Shows/Arcana/"
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
                    <h1>ARCANA <span className="arcana-year">(2024 - 2025)</span></h1>
                    <p className="arcana-description">
                        Arcana reimagined the tage as a tarot-inspired world of fate, choice, and consequence. Drawing from Alice in Borderland, this production replaced playing card levels with richly symbolic tarot cards-each scene merging these themes into a personal journey of interpretation. From The Moon and The Sun to The Hermit and The Lovers, the show invited the audience to reflect on the meanings we assign to our own paths. Months of creative collaboration brought this vision to life, turning storytelling into purpose. All proceeds supported oneROOF Youth Services, working to end youth homelessness in our community.
                    </p>
                </div>
                <div className="arcana-video-wrapper">
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="gallery-container">
                    <div className="gallery-grid">
                        {collageImages.map((url, index) => (
                            <img 
                                className="gallery-img"
                                key={index}
                                src={url}
                                alt={`Arcana ${index + 1}`}
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
