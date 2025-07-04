import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import MODH from '../images/MOD-H.png'

const Teams = () => {
    return(
      <div className="teams">
        <Nav/>


        {/* Finance */}
                        <div className="header-image-section">
          <img src={MODH} alt="finance" className="header-image" />
          <div className="header-overlay">
            <h1>finance</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Finance Team is dedicated to securing monetary sponsorships and providing essential financial support for Fashion for Change events. They also manage the club's budget with meticulous attention to ensure that financial resources are allocated judiciously to various aspects of our events and initiatives. This includes seeking financial contributions from sponsors, donors, and grants to underpin the club's activites and ambitions.</p>
        </div>

        <div className="collage">
          {/* <img src={MODC1} alt="model team"></img>
          <img src={MODC2} alt="model team"></img>
          <img src={MODC3} alt="model team"></img>
          <img src={MODC4} alt="model team"></img>
          <img src={MODC5} alt="model team"></img>
          <img src={MODC6} alt="model team"></img> */}
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Corporate Engagement</h1>
            <ul>
              <li>Managers pitch FC to corporate sponsors, handle funding proposals, and process reimbursements.</li>
            </ul>
            <h1>Finance Managers</h1>
            <ul>
              <li>Maintain our club budget and ensure responsible financial planning for all initiatives.</li>
            </ul>
          </div>

          <div className="inner-2">
            {/* <img src={MODC7} alt="models"></img> */}
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            {/* <img src={MODC8} alt="models"></img> */}
          </div>

          <div className="inner-1">
            <p>You'll gain hands-on experience in nonprofit finance, sponsorship development, and strategic event budgeting, while learning how to manage real-world financial operations within a creative organization. If you're looking to apply your skills in a way that supports a meaningful cause and directly impacts the success of high-profile events, the Finance Team is where you'll thrive.</p>
          </div>
        </div>


        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  