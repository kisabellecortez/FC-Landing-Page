import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import React, { useContext, useState } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const ArcanaPage = () => {
    const imagesArray = useContext(ImagesContext);
    const folderPath = "Shows/SYTYGS/"
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
                    <h1>So You Think You Got Style<span className="arcana-year">(2016 - 2017)</span></h1>
                    <p className="arcana-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
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
                                alt={`So You Think You Got Style ${index + 1}`}
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
