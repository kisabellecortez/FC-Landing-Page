import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';

import H from '../../images/Teams/Finance/FIN_H.png'

import C1 from '../../images/Teams/Finance/FIN_C1.png'
import C2 from '../../images/Teams/Finance/FIN_C2.png'
import C3 from '../../images/Teams/Finance/FIN_C3.png'
import C4 from '../../images/Teams/Finance/FIN_C4.png'
import C5 from '../../images/Teams/Finance/FIN_C5.png'
import C6 from '../../images/Teams/Finance/FIN_C6.png'
import C7 from '../../images/Teams/Finance/FIN_C7.png'
import C8 from '../../images/Teams/Finance/FIN_C8.png'

const Finance = () => {
    return(
      <div className="teams">
        <Nav/>


        {/* Finance */}
        <div className="team-header">
          <img src={H} alt="finance team"></img>
          <div className="header-overlay">
            <h1>finance</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Finance Team is dedicated to securing monetary sponsorships and providing essential financial support for Fashion for Change events. They also manage the club's budget with meticulous attention to ensure that financial resources are allocated judiciously to various aspects of our events and initiatives. This includes seeking financial contributions from sponsors, donors, and grants to underpin the club's activites and ambitions.</p>
        </div>

        <div className="collage">
          <img src={C1} alt="finance team"></img>
          <img src={C2} alt="finance team"></img>
          <img src={C3} alt="finance team"></img>
          <img src={C4} alt="finance team"></img>
          <img src={C5} alt="finance team"></img>
          <img src={C6} alt="finance team"></img>
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
            <img src={C7} alt="finance team"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={C8} alt="finance team"></img>
          </div>

          <div className="inner-1">
            <p>You'll gain hands-on experience in nonprofit finance, sponsorship development, and strategic event budgeting, while learning how to manage real-world financial operations within a creative organization. If you're looking to apply your skills in a way that supports a meaningful cause and directly impacts the success of high-profile events, the Finance Team is where you'll thrive.</p>
          </div>
        </div>


        <Footer/>
      </div>
    )
  };
  
  export default Finance;
  