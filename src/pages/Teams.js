import Nav from '../components/Navbar.js'
import Footer from '../components/Footer';

import BOD1 from '../images/BOD-1.png'
import BOD2 from '../images/BOD-2.png'
import BODC1 from '../images/BOD-C1.png'
import BODC2 from '../images/BOD-C2.png'
import BODC3 from '../images/BOD-C3.png'
import BODC4 from '../images/BOD-C4.png'
import BODC5 from '../images/BOD-C5.png'
import BODC6 from '../images/BOD-C6.png'
import BODC7 from '../images/BOD-C7.png'
import BODC8 from '../images/BOD-C8.png'
import BODC9 from '../images/BOD-C9.png'
import BODC10 from '../images/BOD-C10.png'
import BODC11 from '../images/BOD-C11.png'
import BODC12 from '../images/BOD-C12.png'
import BODC13 from '../images/BOD-C13.png'
import BODC14 from '../images/BOD-C14.png'

import ART_H from '../images/ART-H.png'
import ARTC1 from '../images/ART-C1.png'
import ARTC2 from '../images/ART-C2.png'
import ARTC3 from '../images/ART-C3.png'
import ARTC4 from '../images/ART-C4.png'
import ARTC5 from '../images/ART-C5.png'
import ARTC6 from '../images/ART-C6.png'
import ARTC7 from '../images/ART-C7.png'
import ARTC8 from '../images/ART-C8.png'

import EVEH from '../images/EVE-H.png'
import EVEC1 from '../images/EVE-C1.png'
import EVEC2 from '../images/EVE-C2.png'
import EVEC3 from '../images/EVE-C3.png'
import EVEC4 from '../images/EVE-C4.png'
import EVEC5 from '../images/EVE-C5.png'
import EVEC6 from '../images/EVE-C6.png'
import EVEC7 from '../images/EVE-C7.png'
import EVEC8 from '../images/EVE-C8.png'

import STAH from '../images/STA-H.png'
import STAC1 from '../images/STA-C1.png'
import STAC2 from '../images/STA-C2.png'
import STAC3 from '../images/STA-C3.png'
import STAC4 from '../images/STA-C4.png'
import STAC5 from '../images/STA-C5.png'
import STAC6 from '../images/STA-C6.png'
import STAC7 from '../images/STA-C7.png'
import STAC8 from '../images/STA-C8.png'

import MARH from '../images/MAR_H.png'
import MARC1 from '../images/MAR_C1.png'
import MARC2 from '../images/MAR_C2.png'
import MARC3 from '../images/MAR_C3.png'
import MARC4 from '../images/MAR_C4.png'
import MARC5 from '../images/MAR_C5.png'
import MARC6 from '../images/MAR_C6.png'
import MARC7 from '../images/MAR_C7.png'
import MARC8 from '../images/MAR_C8.png'

import PRH from '../images/PR-H.png'
import PRC1 from '../images/PR-C1.png'
import PRC2 from '../images/PR-C2.png'
import PRC3 from '../images/PR-C3.png'
import PRC4 from '../images/PR-C4.png'
import PRC5 from '../images/PR-C5.png'
import PRC6 from '../images/PR-C6.png'
import PRC7 from '../images/PR-C7.png'
import PRC8 from '../images/PR-C8.png'

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

        <h1 className="title">Meet the Teams</h1>

        <div className="team-list">
          <a className="team-nav" href='#bod'>board of directors</a>
          <a className="team-nav" href='#art'>artistic</a>
          <a className="team-nav" href='#eve'>events</a>
          <a className="team-nav" href='#sta'>stage</a>
          <a className="team-nav" href='/'>finance</a>
          <a className="team-nav" href='/'>public relations</a>
          <a className="team-nav" href='#mod'>model</a>
        </div>

        {/* Board of Directors */}
        <div className="team-header">
          <div className="header-text">
            <h1>bod</h1>
          </div>
          <img src={BOD1} alt="BOD" id="bod"></img>
          <img src={BOD2} alt="BOD"></img>
        </div>

        <div className="collage">
          <img src={BODC1} alt="bod"></img>
          <img src={BODC2} alt="bod"></img>
          <img src={BODC3} alt="bod"></img>
          <img src={BODC4} alt="bod"></img>
          <img src={BODC5} alt="bod"></img>
          <img src={BODC6} alt="bod"></img>
          <img src={BODC7} alt="bod"></img>
          <img src={BODC8} alt="bod"></img>
          <img src={BODC9} alt="bod"></img>
          <img src={BODC10} alt="bod"></img>
          <img src={BODC11} alt="bod"></img>
          <img src={BODC12} alt="bod"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={BODC13} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={BODC14} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>
        </div>

        {/* Artistic */}
        <div className="team-header">
          <div className="header-text">
            <h1>artistic</h1>
          </div>
          <img src={ART_H} alt="ART" id="art"></img>
        </div>

        <div className="summary">
          <p>The Artistic Team is responsible for shaping the creative vision of the production. This group includes choreographers and designers with other creative roles who work together to bring each scene to life. They oversee choreography, fashion design, lighting, music, and overall aesthetics, ensuring a cohesive and visually engaging performance. Collaboration, creativity, and strong time management are essential as they lead rehersals, attend workshops, and execute their artistic concepts on schedule.</p>
        </div>

        <div className="collage">
          <img src={ARTC1} alt="artistic team"></img>
          <img src={ARTC2} alt="artistic team"></img>
          <img src={ARTC3} alt="artistic team"></img>
          <img src={ARTC4} alt="artistic team"></img>
          <img src={ARTC5} alt="artistic team"></img>
          <img src={ARTC6} alt="artistic team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Choreographers</h1>
            <ul>
              <li>Experience in one or more dance styles (Hip-Hop, Contemporary, Jazz, etc.).</li>
              <li>Choreograph, teach, and coordinate lighting/music for your scene.</li>
              <li>Lead independent rehearsals (Winter Term).</li>
              <li>Attend the Dance Workshop (Fall Term).</li>
              <li>Strong time management skills.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={ARTC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={ARTC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <h1>Designers</h1>
            <ul>
              <li>Experience in fashion or jewelry design.</li>
              <li>Create designs, a catwalk, and coordinate lighting/music for your sccene.</li>
              <li>Collaborate with your stylist.</li>
              <li>Lead independent rehearsals (Winter Term).</li>
              <li>Attend the Model Workshop (Fall Term).</li>
              <li>Strong time management skills.</li>
            </ul>
          </div>
        </div>

        {/* Events */}
        <div className="team-header">
          <div className="header-text">
            <h1>events</h1>
          </div>
          <img src={EVEH} alt="EVE" id="eve"></img>
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

        {/* Stage */}
        <div className="team-header">
          <div className="header-text">
            <h1>stage</h1>
          </div>
          <img src={STAH} alt="STA" id="sta"></img>
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
          </div>
        </div>

        {/* Marketing */}
        <div className="team-header">
          <div className="header-text">
            <h1>marketing</h1>
          </div>
          <img src={MARH} alt="MOD" id="mod"></img>
        </div>

        <div className="summary">
          <p>The Marketing Team is responsible for developing and enhancing Fashion for Change's visual identity. They create captivating marketing materials through photography, graphic design, and innovate outreach. Their focus is on promoting our club, events, and initiatives by designing eye-catching promotiional content that appeals to our target audience. Their work not only attracts attention but also adds to the overall aesthetic and branding of Fashion for Change.</p>
        </div>

        <div className="collage">
          <img src={MARC1} alt="marketing team"></img>
          <img src={MARC2} alt="marketing team"></img>
          <img src={MARC3} alt="marketing team"></img>
          <img src={MARC4} alt="marketing team"></img>
          <img src={MARC5} alt="marketing team"></img>
          <img src={MARC6} alt="marketing team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Social Media Outreach Coordinator</h1>
            <ul>
              <li>Manage and grow Fashion for Change's presence across all social media platforms.</li>
            </ul>
            <h1>Blog/Content Writer</h1>
            <ul>
              <li>Write engaging and on-brand content for blogs, newsletters, and social media.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={MARC7} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={MARC8} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>Graphic Designer</h1>
            <ul>
              <li>Design eye-catching digital and print materials that reflect FC's visual identity.</li>
            </ul>
            <h1>Photographer</h1>
            <ul>
              <li>Capture high-quality photos at events and photoshoots that represent FC's style and energy.</li>
            </ul>
            <h1>Videographer</h1>
            <ul>
              <li>Film and edit promotional and event videos that showcase FC's mission and community.</li>
            </ul>
          </div>
        </div>

        {/* Finance */}
        <div className="team-header">
          <div className="header-text">
            <h1>finance</h1>
          </div>
          {/* <img src={MODH} alt="MOD" id="mod"></img> */}
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

        {/* Public Relations */}
        <div className="team-header">
          <div className="header-text">
            <h1>public relations</h1>
          </div>
          <img src={PRH} alt="MOD" id="mod"></img>
        </div>

        <div className="summary">
          <p>The PR Team specializes in managing our public image and communication efforts. They respresent Fashion for Change across various media outlets, social platforms, and within the University of Waterloo community. This team excels in crafting compelling narratives and mainatining a strong presence for our club in the public eye. They ensure that our message resonates with a wider audience and mainatains a strong presence in the world of arts and fashion.</p>
        </div>

        <div className="collage">
          <img src={PRC1} alt="public relations team"></img>
          <img src={PRC2} alt="public relations team"></img>
          <img src={PRC3} alt="public relations team"></img>
          <img src={PRC4} alt="public relations team"></img>
          <img src={PRC5} alt="public relations team"></img>
          <img src={PRC6} alt="public relations team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Social Media Outreach Coordinator</h1>
            <ul>
              <li>Manage and grow Fashion for Change's presence across all social media platforms.</li>
            </ul>
            <h1>Blog/Content Writer</h1>
            <ul>
              <li>Write engaging and on-brand content for blogs, newsletters, and social media.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={PRC7} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={PRC8} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>Graphic Designer</h1>
            <ul>
              <li>Design eye-catching digital and print materials that reflect FC's visual identity.</li>
            </ul>
            <h1>Photographer</h1>
            <ul>
              <li>Capture high-quality photos at events and photoshoots that represent FC's style and energy.</li>
            </ul>
            <h1>Videographer</h1>
            <ul>
              <li>Film and edit promotional and event videos that showcase FC's mission and community.</li>
            </ul>
          </div>
        </div>

        {/* Model */}
        <div className="team-header">
          <div className="header-text">
            <h1>model</h1>
          </div>
          <img src={MODH} alt="MOD" id="mod"></img>
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

        {/* Finance */}
        <div className="team-header">
          <div className="header-text">
            <h1>sponsorship</h1>
          </div>
          {/* <img src={MODH} alt="MOD" id="mod"></img> */}
        </div>

        <div className="summary">
          <p>The Sponsorship Team is dedicated to securing non-monetary sponsorships, which encompass a variety of valuable products and services that enhance Fashion for Change events. This includes engaging with external partners such as local restaurants, design agencies, and beauty suppliers, and forming mutually beneficial partnerships where sponsors gain exposure during our events. Alingside managing these relationships, this team plays a pivotal role in planning and executing fundraisers, such as auctions for merchandise and ticketed events.</p>
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
            {/* <img src={MODC7} alt="models"></img> */}
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
  