import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/MusicAwards-Header.png";
import { useState } from "react";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/fcmas/${i + 1}.png`);

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
                    <h1>FCMAS <span className="arcana-year">(2015 - 2016)</span></h1>
                    <p className="arcana-description">
                        Step onto the red carpet for FCMAs, where fashion and music collide in an unforgettable spectacle. Inspired by the glamour and energy of the world's biggest award shows, this production showcases bold styles, confident choreography, and the artistry of student designers and models who transform the stage into a livving tribute to the music industry. From edgy rockstar looks to classic elegance worthy of a Grammy night, this show celebrates the spirit of performance and self-expression while raising funds for global education initiatives.
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
