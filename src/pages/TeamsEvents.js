// DONE

import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import EVEH from '../images/EVE-H.png'
import EVEC1 from '../images/EVE-C1.png'
import EVEC2 from '../images/EVE-C2.png'
import EVEC3 from '../images/EVE-C3.png'
import EVEC4 from '../images/EVE-C4.png'
import EVEC5 from '../images/EVE-C5.png'
import EVEC6 from '../images/EVE-C6.png'
import EVEC7 from '../images/EVE-C7.png'
import EVEC8 from '../images/EVE-C8.png'

const TeamsEvents = () => {
    return(
      <div className="teams">
        <Nav/>


        {/* Events */}
        <div className="team-header">
          <img src={EVEH} alt="events" className="header-image" />
          <div className="header-overlay">
            <h1>events</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Events Team is responsible for planning and executing a variety of engaging activities that promote Fashion for Change's mission and enhance community involvement. They take charge of organizing events that showcase our members' talents and contribute to building a strong sense of community. These events serve as platforms to convey our message, leaving a lasting impact on our audience.</p>
        </div>

        <div className="collage">
          <img src={EVEC1} alt="artistic team"></img>
          <img src={EVEC2} alt="artistic team"></img>
          <img src={EVEC3} alt="artistic team"></img>
          <img src={EVEC4} alt="artistic team"></img>
          <img src={EVEC5} alt="artistic team"></img>
          <img src={EVEC6} alt="artistic team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Event Managers</h1>
            <ul>
              <li>Plan, coordinate, and execute monthly non-fashion show events to raise awareness and funds.</li>
              <li>Correspond with WUSA on a regular basis to ensure event compliance.</li>
              <li>Work with Finance and Sponsorship to determine event feasibility and necessary items required for the success of the event.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={EVEC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={EVEC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <p>Over the past year, the Events Team brought our community together through a wide range of experiences, including the Hearts & Crafts social, our highly aanticipated Theme Reveal, and the Dress to Impress (DTI) showcase, among many others. This team works with dedication and creativity to promote Fashion for Change, engage students, and raise funds for our charitable mission.</p>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default TeamsEvents;
  