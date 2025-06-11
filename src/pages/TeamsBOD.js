import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import BOD1 from '../images/BOD-1.png'
import BOD2 from '../images/BOD-2.png'
import BODart from '../images/BOD-art.png'
import BODeve from '../images/BOD-eve.png'
import BODfin from '../images/BOD-fin.png'
import BODmar from '../images/BOD-mar.png'
import BODmod1 from '../images/BOD-mod1.png'
import BODmod2 from '../images/BOD-mod2.png'
import BODp from '../images/BOD-p.png'
import BODpr from '../images/BOD-pr.png'
import BODspo from '../images/BOD-spon.png'
import BODsta from '../images/BOD-sta.png'
import BODvp from '../images/BOD-vp.png'
import BOD from '../images/BOD.png'

const Teams = () => {
    return(
      <div className="teams">
        <Nav/>

        {/* Board of Directors */}
        <div className="header-image-section">
          <img src={BOD1} alt="board of directors" className="header-image" />
          <div className="header-overlay">
            <h1>bod</h1>
          </div>
        </div>

        <h1>Board of Directors (BOD)</h1>
        <h2>Purpose</h2>
        <p>The Board of Directors (BOD) leads the strategic direction and execution of Fashion for Change. Each director oversees their respective commmittee, making key decisions that shape the creative and operational success of the club. The BOD collaborates to ensure every show, event, and initiative aligns with our mission of creativity, inclusivity, and charitable impact. Together, they mentor their teams, foster collaboration, and create a platform where passion and purpose meet.</p>

        <div className="director-container">
          
          <div className="presidents">
            <div>
              <h1>President</h1>
              <img src={BODp} alt="president"></img>
            </div>
            <div>
              <p>summary</p>
            </div>
          </div>

          <div className="presidents">
            <div>
              <h1>Vice President</h1>
              <img src={BODvp} alt="vice president"></img>
            </div>
            <div>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODart} alt="artistic director"></img>
            </div>
            <div>
              <h1>Artistic</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODmod1} alt="model director"></img>
              <img src={BODmod2} alt="model director"></img>
            </div>
            <div>
              <h1>Model</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODsta} alt="stage director"></img>
            </div>
            <div>
              <h1>Stage</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODfin} alt="finance director"></img>
            </div>
            <div>
              <h1>Finance</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODmar} alt="marketing director"></img>
            </div>
            <div>
              <h1>Marketing</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODpr} alt="pr director"></img>
            </div>
            <div>
              <h1>Public Relations</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODspo} alt="sponsorship director"></img>
            </div>
            <div>
              <h1>Sponsorship</h1>
              <p>summary</p>
            </div>
          </div>

          <div className="directors">
            <div>
              <img src={BODeve} alt="events director"></img>
            </div>
            <div>
              <h1>Events</h1>
              <p>summary</p>
            </div>
          </div>
        </div>

        <h1>Time Commitment</h1>
        <p>Directors are expected to commit approximately <p className="bold">5-10 hours</p> per week, with time increasing during major events such as auditions, showcases, and show week. This includes team meetings, planning sessions, hands-on event coordination, and communication with executive members. Directors should be prepared to lead, adapt, and invest energy into their team's development and the club's overall success.</p>

        <img src={BOD} alt="bod"></img>

        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  