// DONE

import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import header from "../../images/PandorasBox-Header.png";
import { useState } from "react";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/pandoras/${i + 1}.png`);

    const [selectedImage, setSelectedImage] = useState(null);

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
                    <h1>Pandoras Box <span className="arcana-year">(2017 - 2018)</span></h1>
                    <p className="arcana-description">
                        Pandora’s Box is a dramatic, mythologically inspired production that brings to life the story of Pandora and the evils unleashed upon the world. Each segment of the show personifies a different force released from the box, Pride, Greed, Pain, Discrimination, Mediocrity, Addiction, Chaos, Deception, Lust, Destruction, Vulnerability, and finally, Hope. With stunning choreography, striking fashion designs, and immersive storytelling, Pandora’s Box confronts universal human struggles while reminding us of our collective capacity for hope and change. Proceeds support sustainable education in Moyamba, Sierra Leone.
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
