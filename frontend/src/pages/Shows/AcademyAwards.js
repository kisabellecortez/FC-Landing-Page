// DONE

import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer.js";
import React, { useContext, useState } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const ArcanaPage = () => {
    const imagesArray = useContext(ImagesContext);
    const folderPath = "Shows/AcademyAwards/"
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
                    <h1>The Academy Awards <span className="arcana-year">(2021 - 2022)</span></h1>
                    <p className="arcana-description">
                        FC Presents: The Academy Awards was our tribute to the power of film to move us, inspire us, and bring us together. Each scene reimagined an Oscar-winning or -nominated movie, La La Land, The Great Gatsby, Spirited Away, The Shape of Water, The Matrix, Black Panther, and more, through fashion, music, and dance.
                        This show was a testament to our community’s creativity and flexibility, especially as campus reopened after COVID closures. Every look, every rehearsal, every late-night brainstorm was about building something special together, and supporting the Food Bank of Waterloo Region so that no one in our local community goes hungry.
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
                                alt={`Academy Awards ${index + 1}`}
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
