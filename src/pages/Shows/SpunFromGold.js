import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/SpunFromGold-Header.png";
import { useState } from "react";


const ArcanaPage = () => {
    const imageCount = 18;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/SpunFromGold/${i + 1}.png`);


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
                    <h1>Spun From Gold <span className="arcana-year">(2023 - 2024)</span></h1>
                    <p className="arcana-description">
                        Spun From Gold was our invitation to step into a world where fashion meets fairytale. Celebrating FC’s 14th year, this show wove six classic stories, Hercules, Mulan, Peter Pan, The Snow Queen, Beauty and the Beast, Alice in Wonderland, into couture designs, music, and dance. Every scene explored themes of courage, transformation, magic and hope, brought to life by the artistry of our student designers and choreographers. All proceeds supported the KW Humane Society, helping care for vulnerable animals in our community. Thank you for joining us on this magical journey and for helping us make real change possible.
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
