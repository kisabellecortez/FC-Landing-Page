import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/Tuesday-Header.png";

const ArcanaPage = () => {
    const imageCount = 15;
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `/images/past-shows/Tuesday/${i + 1}.png`);

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
                    <h1>Tuesday <span className="arcana-year">(2018 - 2019)</span></h1>
                    <p className="arcana-description">
Tuesday was our invitation to notice the extraordinary in the everyday. Set against real cities like New York, Toronto, Hong Kong, and Rio, each chapter told a story tucked inside an ordinary day—the bustle, the quiet moments, the shared humanity. We wanted to remind ourselves that even the simplest days are worth celebrating. Thank you for joining us on this journey, and for supporting our continued commitment to education and growth in Moyamba, Sierra Leone.
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
