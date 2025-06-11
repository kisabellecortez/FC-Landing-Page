import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import PRH from '../images/PR-H.png'
import PRC1 from '../images/PR-C1.png'
import PRC2 from '../images/PR-C2.png'
import PRC3 from '../images/PR-C3.png'
import PRC4 from '../images/PR-C4.png'
import PRC5 from '../images/PR-C5.png'
import PRC6 from '../images/PR-C6.png'
import PRC7 from '../images/PR-C7.png'
import PRC8 from '../images/PR-C8.png'

const Teams = () => {
    return(
      <div className="teams">
        <Nav/>
        {/* Public Relations */}
                <div className="header-image-section">
          <img src={PRH} alt="public relations" className="header-image" />
          <div className="header-overlay">
            <h1>public relations</h1>
          </div>
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

        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  