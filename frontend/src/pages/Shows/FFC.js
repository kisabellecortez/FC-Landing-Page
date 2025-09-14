import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import React, { useContext, useState } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const ArcanaPage = () => {
    const imagesArray = useContext(ImagesContext);
    const folderPath = "Shows/FFC/"
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
                    <h1>Fashion For Change <span className="arcana-year">(2011 - 2012)</span></h1>
                    <p className="arcana-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                </div>


                <div className="gallery-container">
                    <div className="gallery-grid">
                        {collageImages.map((url, index) => (
                            <img 
                                className="gallery-img"
                                key={index}
                                src={url}
                                alt={`Fashion for Change ${index + 1}`}
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
