// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';

import H from '../../images/PR-H.png'
import C1 from '../../images/PR-C1.png'
import C2 from '../../images/PR-C2.png'
import C3 from '../../images/PR-C3.png'
import C4 from '../../images/PR-C4.png'
import C5 from '../../images/PR-C5.png'
import C6 from '../../images/PR-C6.png'
import C7 from '../../images/PR-C7.png'
import C8 from '../../images/PR-C8.png'

const PublicRelations = () => {
    return(
      <div className="teams">
        <Nav/>
        {/* Public Relations */}
        <div className="team-header">
          <img src={H} alt="public relations"/>
          <div className="header-overlay">
            <h1>public relations</h1>
          </div>
        </div>

        <div className="summary">
          <p>The PR Team specializes in managing our public image and communication efforts. They respresent Fashion for Change across various media outlets, social platforms, and within the University of Waterloo community. This team excels in crafting compelling narratives and mainatining a strong presence for our club in the public eye. They ensure that our message resonates with a wider audience and mainatains a strong presence in the world of arts and fashion.</p>
        </div>

        <div className="collage">
          <img src={C1} alt="public relations team"></img>
          <img src={C2} alt="public relations team"></img>
          <img src={C3} alt="public relations team"></img>
          <img src={C4} alt="public relations team"></img>
          <img src={C5} alt="public relations team"></img>
          <img src={C6} alt="public relations team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>External Relations Manager</h1>
            <ul>
              <li>Build and maintain partnersships with media outlets (radio, TV, newspapers) beyond the UW community.</li>
              <li>Collaborate with Marketing to grow FC's brand across the tri-city region.</li>
              <li>Identify new publicity opportunities and manage contact lists.</li>
              <li>Represent FC with professinalism and confidence in external-facing settings.</li>
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
            <h1>Internal PR Manager</h1>
            <ul>
              <li>Connect with campus-based media outlets to promote FC events and initiatives.</li>
              <li>Act as the main liaison for performers during key events like Holiday Showcase and Show Day.</li>
              <li>Strengthen relationships with other clubs and organizations at UW and WLU.</li>
              <li>Support outreach and content brainstorming with a strong sense of professionalism.</li>
            </ul>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default PublicRelations;
  