// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const PublicRelations = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/PR/"
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
      {/* Public Relations */}
      <div className="team-header">
        <img src={header} alt="public relations"/>
        <div className="header-overlay">
          <h1>public relations</h1>
        </div>
      </div>

      <div className="summary">
        <p>The PR Team specializes in managing our public image and communication efforts. They respresent Fashion for Change across various media outlets, social platforms, and within the University of Waterloo community. This team excels in crafting compelling narratives and mainatining a strong presence for our club in the public eye. They ensure that our message resonates with a wider audience and mainatains a strong presence in the world of arts and fashion.</p>
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
          <h1>External Relations Manager</h1>
          <ul>
            <li>Build and maintain partnersships with media outlets (radio, TV, newspapers) beyond the UW community.</li>
            <li>Collaborate with Marketing to grow FC's brand across the tri-city region.</li>
            <li>Identify new publicity opportunities and manage contact lists.</li>
            <li>Represent FC with professinalism and confidence in external-facing settings.</li>
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
