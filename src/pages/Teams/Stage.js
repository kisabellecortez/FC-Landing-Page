// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';

import STAH from '../../images/STA-H.png'
import STAC1 from '../../images/STA-C1.png'
import STAC2 from '../../images/STA-C2.png'
import STAC3 from '../../images/STA-C3.png'
import STAC4 from '../../images/STA-C4.png'
import STAC5 from '../../images/STA-C5.png'
import STAC6 from '../../images/STA-C6.png'
import STAC7 from '../../images/STA-C7.png'
import STAC8 from '../../images/STA-C8.png'
import STAC9 from '../../images/STA-C9.png'

const Stage = () => {
    return(
      <div className="teams">
        <Nav/>
        {/* Stage */}
        <div className="team-header">
          <img src={STAH} alt="stage"/>
          <div className="header-overlay">
            <h1>stage</h1>
          </div>
        </div>

        <div className="summary">
          <p>The Stage Team operates as the technical backbone of our organization, managing backstage activities, lighting arrangements, props, and all aspects concerning the execution of our shows. This committee, marked by its high level of expertise, collaborates closely with the MOdel and Artistic Teams during the week leading up to the showcase. Furthermore, it offers opportunities for general members and the broader community to engage with Fashion for Change and its core principles.</p>
        </div>

        <div className="collage">
          <img src={STAC1} alt="stage team"></img>
          <img src={STAC2} alt="stage team"></img>
          <img src={STAC3} alt="stage team"></img>
          <img src={STAC4} alt="stage team"></img>
          <img src={STAC5} alt="stage team"></img>
          <img src={STAC6} alt="stage team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Stage Managers</h1>
            <ul>
              <li>Run dress rehearsals, cue transitions, and keep backstage running like clockwork.</li>
            </ul>
            <h1>Special Lighting Managers</h1>
            <ul>
              <li>Design and program lighting sequences that elevate every scene.</li>
            </ul>
            <h1>Props Managers Managers</h1>
            <ul>
              <li>Create custom pieces that bring designers' and choreographsers' visions to life.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={STAC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={STAC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <h1>Lighting Manager</h1>
            <h2>(aka Technical Lead)</h2>
            <ul>
              <li>Programming the special lighting used on stage.</li>
            </ul>
            <ul>
              <li>Previous lighting/stage experience preferred.</li>
            </ul>
            <ul>
              <li>Work closely with Stage Director and Artistic Team.</li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Props Manager</h1>
            <h2>(often double as stage managers)</h2>
            <ul>
              <li>Creating and collecting any props needed for the show.</li>
            </ul>
            <ul>
              <li>Previous build/woodworking experience useful (not required).</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={STAC9} alt="choreographers"></img>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default Stage;
  