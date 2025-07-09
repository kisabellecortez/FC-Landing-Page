import Nav from '../../components/Navbar.js'
import Footer from "../../components/Footer";
import header from "../../images/CoverToCover.png";

const ArcanaPage = () => {
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
                    <h1>Cover To Cover <span className="arcana-year">(2013 - 2014)</span></h1>
                    <p className="arcana-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ArcanaPage;
