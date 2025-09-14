import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Finance = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Finance/"
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


      {/* Finance */}
      <div className="team-header">
        <img src={header} alt="finance team"></img>
        <div className="header-overlay">
          <h1>finance</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Finance Team is dedicated to securing monetary sponsorships and providing essential financial support for Fashion for Change events. They also manage the club's budget with meticulous attention to ensure that financial resources are allocated judiciously to various aspects of our events and initiatives. This includes seeking financial contributions from sponsors, donors, and grants to underpin the club's activites and ambitions.</p>
      </div>

      <div className="collage">
        {collageImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Artistic Team ${index + 1}`}
            crossOrigin="anonymous"
          />
        ))}
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
          <img src={extraImages[0]} alt="finance team"></img>
        </div>
      </div>

      <div className="box">
        <div className="inner-2">
          <img src={extraImages[1]} alt="finance team"></img>
        </div>

        <div className="inner-1">
          <p>You'll gain hands-on experience in nonprofit finance, sponsorship development, and strategic event budgeting, while learning how to manage real-world financial operations within a creative organization. If you're looking to apply your skills in a way that supports a meaningful cause and directly impacts the success of high-profile events, the Finance Team is where you'll thrive.</p>
        </div>
      </div>


      <Footer/>
    </div>
  )
};

export default Finance;
