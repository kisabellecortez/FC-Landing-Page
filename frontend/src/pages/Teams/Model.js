// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Model = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Model/"
  const collageImgNum = Array.from({ length : 6 }, (_, i) => i+1)
  const extraImgNum = Array.from({ length : 2 }, (_, i) => i+7)

  const header = imagesArray.find(
    (url) => url.includes(folderPath) && url.includes(`Header.png`)
  )

  const collageImages = collageImgNum.map((num) => {
    return imagesArray.find(
        (url) => url.includes(folderPath) && url.includes(`${num}.png`)
    )
  }).filter((url) => url)

  const extraImages = extraImgNum.map((num) => {
    return imagesArray.find(
      (url) => url.includes(folderPath) && url.includes(`${num}.png`)
    )
  }).filter((url) => url)

  return(
    <div className="teams">
      <Nav/>
      <div className="team-header">
        <img src={header} alt="models"/>
        <div className="header-overlay">
          <h1>models</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Model Team is the group that takes center stage during our performances. At Fashion for Change, we define a "model" as any student willing to embrase new experiences and step beyond their comfort zone by participating in dance and fashion. We do not impose any prerequisites for auditions. The Model Directors, leading this team, serve as advocates for its members, addressing their concerns and need throughout the year.</p>
      </div>

      <div className="collage">
        <img src={collageImages[0]} alt="director"></img>
        <img src={collageImages[1]} alt="director"></img>
        <img src={collageImages[2]} alt="director"></img>
        <img src={collageImages[3]} alt="director"></img>
        <img src={collageImages[4]} alt="director"></img>
        <img src={collageImages[5]} alt="director"></img>
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
          <img src={extraImages[0]} alt="models"></img>
        </div>
      </div>

      <div className="box">
        <div className="inner-2">
          <img src={extraImages[1]} alt="models"></img>
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
