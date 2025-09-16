// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Events = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Events/"
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


      {/* Events */}
      <div className="team-header">
        <img src={header} alt="events" className="header-image" />
        <div className="header-overlay">
          <h1>events</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Events Team is responsible for planning and executing a variety of engaging activities that promote Fashion for Change's mission and enhance community involvement. They take charge of organizing events that showcase our members' talents and contribute to building a strong sense of community. These events serve as platforms to convey our message, leaving a lasting impact on our audience.</p>
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
          <h1>Event Managers</h1>
          <ul>
            <li>Plan, coordinate, and execute monthly non-fashion show events to raise awareness and funds.</li>
            <li>Correspond with WUSA on a regular basis to ensure event compliance.</li>
            <li>Work with Finance and Sponsorship to determine event feasibility and necessary items required for the success of the event.</li>
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
          <p>Over the past year, the Events Team brought our community together through a wide range of experiences, including the Hearts & Crafts social, our highly aanticipated Theme Reveal, and the Dress to Impress (DTI) showcase, among many others. This team works with dedication and creativity to promote Fashion for Change, engage students, and raise funds for our charitable mission.</p>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default Events;
  