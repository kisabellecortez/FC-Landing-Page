import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/fcmas-header.png";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/fcmas/${i + 1}.png`);

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
                    <h1>FCMAS <span className="arcana-year">(2015 - 2016)</span></h1>
                    <p className="arcana-description">
Step onto the red carpet for FCMAs, where fashion and music collide in an unforgettable spectacle. Inspired by the glamour and energy of the world's biggest award shows, this production showcases bold styles, confident choreography, and the artistry of student designers and models who transform the stage into a living tribute to the music industry. From edgy rockstar looks to classic elegance worthy of a Grammy night, this show celebrates the spirit of performance and self-expression while raising funds for global education initiatives.
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
