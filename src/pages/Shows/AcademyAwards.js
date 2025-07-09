import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/standFor.png";
import { useState } from "react";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/AcademyAwards/${i + 1}.png`);

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
            <div className="header-image-section">
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
