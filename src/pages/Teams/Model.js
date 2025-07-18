// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';

import H from '../../images/MOD-H.png'
import C1 from '../../images/MOD-C1.png'
import C2 from '../../images/MOD-C2.png'
import C3 from '../../images/MOD-C3.png'
import C4 from '../../images/MOD-C4.png'
import C5 from '../../images/MOD-C5.png'
import C6 from '../../images/MOD-C6.png'
import C7 from '../../images/MOD-C7.png'
import C8 from '../../images/MOD-C8.png'

const Model = () => {
    return(
      <div className="teams">
        <Nav/>
        <div className="team-header">
          <img src={H} alt="models"/>
          <div className="header-overlay">
            <h1>models</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Model Team is the group that takes center stage during our performances. At Fashion for Change, we define a "model" as any student willing to embrase new experiences and step beyond their comfort zone by participating in dance and fashion. We do not impose any prerequisites for auditions. The Model Directors, leading this team, serve as advocates for its members, addressing their concerns and need throughout the year.</p>
        </div>

        <div className="collage">
          <img src={C1} alt="model team"></img>
          <img src={C2} alt="model team"></img>
          <img src={C3} alt="model team"></img>
          <img src={C4} alt="model team"></img>
          <img src={C5} alt="model team"></img>
          <img src={C6} alt="model team"></img>
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
            <img src={C7} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={C8} alt="models"></img>
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
  
  export default Model;
  