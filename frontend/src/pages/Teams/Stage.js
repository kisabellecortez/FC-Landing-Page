// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Stage = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Stage/"
  const collageImgNum = Array.from({ length : 6 }, (_, i) => i+1)
  const extraImgNum = Array.from({ length : 3 }, (_, i) => i+7)

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
      {/* Stage */}
      <div className="team-header">
        <img src={header} alt="stage"/>
        <div className="header-overlay">
          <h1>stage</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Stage Team operates as the technical backbone of our organization, managing backstage activities, lighting arrangements, props, and all aspects concerning the execution of our shows. This committee, marked by its high level of expertise, collaborates closely with the MOdel and Artistic Teams during the week leading up to the showcase. Furthermore, it offers opportunities for general members and the broader community to engage with Fashion for Change and its core principles.</p>
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
          <img src={extraImages[0]} alt="choreographers"></img>
        </div>
      </div>

      <div className="box">
        <div className="inner-2">
          <img src={extraImages[1]} alt="designers"></img>
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
          <img src={extraImages[2]} alt="choreographers"></img>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default Stage;
