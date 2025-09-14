// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Sponsorship = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Sponsorship/"
  const collageImgNum = Array.from({ length : 4 }, (_, i) => i+1)
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
      {/* Finance */}
      <div className="team-header">
        <img src={header} alt="sponsorship"/>
        <div className="header-overlay">
          <h1>sponsorship</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Sponsorship Team is dedicated to securing non-monetary sponsorships, which encompass a variety of valuable products and services that enhance Fashion for Change events. This includes engaging with external partners such as local restaurants, design agencies, and beauty suppliers, and forming mutually beneficial partnerships where sponsors gain exposure during our events. Alingside managing these relationships, this team plays a pivotal role in planning and executing fundraisers, such as auctions for merchandise and ticketed events.</p>
      </div>

    <div className="collage-box">
      <div className="extra-collage">
        {collageImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Artistic Team ${index + 1}`}
            crossOrigin="anonymous"
          />
        ))}
      </div>

      <div className="extra-collage">
        <img src={extraImages[0]} alt="model team"></img>
      </div>
    </div>

      <div className="box">
        <div className="inner-1">
          <h1>Fashion Sponsorship Managers</h1>
          <ul>
            <li>Acquiring sponsorship opportunities for the club's fashion shows.</li>
            <li>Building relationships with fashion-related companies and brands.</li>
            <li>Collaborating with the Sponsorship Director to negotiate and finalize agreements.</li>
            <li>Tracking performance of fashion show sponsors.</li>
          </ul>
        </div>

        <div className="inner-2">
          <img src={extraImages[1]} alt="models"></img>
        </div>
      </div>

      <div className="box">
        <div className="inner-2">
          <img src={extraImages[2]} alt="models"></img>
        </div>

        <div className="inner-1">
          <h1>Events Sponsorship Managers</h1>
          <ul>
            <li>Identifying sponsorship opportunities for various club events.</li>
            <li>Managing relationships with potential event sponsors.</li>
            <li>Collaborating with Sponsorship Director to develop sponsorship agreements and packages for events.</li>
            <li>Evaluating the success of event sponsorships.</li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default Sponsorship;
