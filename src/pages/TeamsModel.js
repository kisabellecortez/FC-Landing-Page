import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import MODH from '../images/MOD-H.png'
import MODC1 from '../images/MOD-C1.png'
import MODC2 from '../images/MOD-C2.png'
import MODC3 from '../images/MOD-C3.png'
import MODC4 from '../images/MOD-C4.png'
import MODC5 from '../images/MOD-C5.png'
import MODC6 from '../images/MOD-C6.png'
import MODC7 from '../images/MOD-C7.png'
import MODC8 from '../images/MOD-C8.png'
const Teams = () => {
    return(
      <div className="teams">
        <Nav/>
                       <div className="header-image-section">
          <img src={MODH} alt="models" className="header-image" />
          <div className="header-overlay">
            <h1>models</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Model Team is the group that takes center stage during our performances. At Fashion for Change, we define a "model" as any student willing to embrase new experiences and step beyond their comfort zone by participating in dance and fashion. We do not impose any prerequisites for auditions. The Model Directors, leading this team, serve as advocates for its members, addressing their concerns and need throughout the year.</p>
        </div>

        <div className="collage">
          <img src={MODC1} alt="model team"></img>
          <img src={MODC2} alt="model team"></img>
          <img src={MODC3} alt="model team"></img>
          <img src={MODC4} alt="model team"></img>
          <img src={MODC5} alt="model team"></img>
          <img src={MODC6} alt="model team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Models</h1>
            <ul>
              <li>Participate in rehearsals, fittings, photoshoots, and scene performances.</li>
            </ul>
            <h1>Model Directors (BOD)</h1>
            <ul>
              <li>Organize auditions, manage scheduling, and assign models to scenes in collaboration with the Artistic Team.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={MODC7} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={MODC8} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>Want to join?</h1>
            <p>No experience? No problem! All you need is confidence and a willingness to grow. This team is about expression, inclusion, and presence both on and off the stage. Audition sign ups go out early fall term, take a look at our Instagram for more information!</p>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  