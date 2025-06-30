import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/ffc-header.png";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/ffc/${i + 1}.png`);

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
                    <h1>Fashion For Change <span className="arcana-year">(2011 - 2012)</span></h1>
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
                        {imageUrls.map((url, i) => (
                            <img key={i} src={url} alt={`past show ${i + 1}`} className="gallery-img" />
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ArcanaPage;
