import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import SPOC1 from '../images/SPO-H.png'
import SPOC2 from '../images/SPO-C1.png'
import SPOC3 from '../images/SPO-C2.png'
import SPOC4 from '../images/SPO-C3.png'


const Teams = () => {
    return(
      <div className="teams">
        <Nav/>
{/* Finance */}
          <div className="header-image-section">
          <img src={SPOC1} alt="sponsorship" className="header-image" />
          <div className="header-overlay">
            <h1>sponsorship</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Sponsorship Team is dedicated to securing non-monetary sponsorships, which encompass a variety of valuable products and services that enhance Fashion for Change events. This includes engaging with external partners such as local restaurants, design agencies, and beauty suppliers, and forming mutually beneficial partnerships where sponsors gain exposure during our events. Alingside managing these relationships, this team plays a pivotal role in planning and executing fundraisers, such as auctions for merchandise and ticketed events.</p>
        </div>

        <div className="collage">
          <img src={SPOC1} alt="model team"></img>
          <img src={SPOC2} alt="model team"></img>
          <img src={SPOC3} alt="model team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Fashion Sponsorship Managers</h1>
            <ul>
              <li>Work with clothing brands and designers to outfit our show.</li>
            </ul>
            <h1>Events Sponsorship Managers</h1>
            <ul>
              <li>Secure prizes, decor, and product donations for fundraisers and showcases.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={SPOC4} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            {/* <img src={MODC8} alt="models"></img> */}
          </div>

          <div className="inner-1">
            <h1>Sponsorship Coordinators</h1>
            <ul>
              <li>Research new leads and maintain communication with current sponsors.</li>
            </ul>
            <h1>Sponsorship Head Managers</h1>
            <ul>
              <li>Assist with outreach strategy and oversee deliverables.</li>
            </ul>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  