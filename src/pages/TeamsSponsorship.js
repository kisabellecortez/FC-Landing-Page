// DONE

import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import H from '../images/SPO-H.png'
import C1 from '../images/SPO-C1.png'
import C2 from '../images/SPO-C2.png'
import C3 from '../images/SPO-C3.png'
import C4 from '../images/SPO-C4.png'
import C5 from '../images/SPO-C5.png'
import C6 from '../images/SPO-C6.png'
import C7 from '../images/SPO-C7.png'


const TeamsSponsorship = () => {
    return(
      <div className="teams">
        <Nav/>
        {/* Finance */}
        <div className="team-header">
          <img src={H} alt="sponsorship"/>
          <div className="header-overlay">
            <h1>sponsorship</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Sponsorship Team is dedicated to securing non-monetary sponsorships, which encompass a variety of valuable products and services that enhance Fashion for Change events. This includes engaging with external partners such as local restaurants, design agencies, and beauty suppliers, and forming mutually beneficial partnerships where sponsors gain exposure during our events. Alingside managing these relationships, this team plays a pivotal role in planning and executing fundraisers, such as auctions for merchandise and ticketed events.</p>
        </div>

      <div className="collage-box">
        <div className="extra-collage">
          <img src={C1} alt="model team"></img>
          <img src={C2} alt="model team"></img>
          <img src={C4} alt="model team"></img>
          <img src={C5} alt="model team"></img>
        </div>

        <div className="extra-collage">
          <img src={C3} alt="model team"></img>
        </div>
      </div>

        <div className="box">
          <div className="inner-1">
            <h1>Fashion Sponsorship Managers</h1>
            <ul>
              <li>Acquiring sponsorship opportunities for the club's fashion shows.</li>
              <li>Building relationships with fashion-related companies and brands.</li>
              <li>Collaborating with the Sponsorship Director to negotiate and finalize agreements.</li>
              <li>Tracking performance of fashion show sponsors.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={C6} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={C7} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>Events Sponsorship Managers</h1>
            <ul>
              <li>Identifying sponsorship opportunities for various club events.</li>
              <li>Managing relationships with potential event sponsors.</li>
              <li>Collaborating with Sponsorship Director to develop sponsorship agreements and packages for events.</li>
              <li>Evaluating the success of event sponsorships.</li>
            </ul>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default TeamsSponsorship;
  