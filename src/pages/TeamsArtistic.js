import Nav from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import ART_H from '../images/ART-H.png'
import ARTC1 from '../images/ART-C1.png'
import ARTC2 from '../images/ART-C2.png'
import ARTC3 from '../images/ART-C3.png'
import ARTC4 from '../images/ART-C4.png'
import ARTC5 from '../images/ART-C5.png'
import ARTC6 from '../images/ART-C6.png'
import ARTC7 from '../images/ART-C7.png'
import ARTC8 from '../images/ART-C8.png'


const Teams = () => {
    return(
      <div className="teams">
        <Nav/>
        {/* Artistic */}
                        <div className="header-image-section">
          <img src={ART_H} alt="artistic" className="header-image" />
          <div className="header-overlay">
            <h1>artistic</h1>
          </div>
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


        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  