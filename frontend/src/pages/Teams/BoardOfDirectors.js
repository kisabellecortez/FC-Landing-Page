// waiting on photos

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const BoardOfDirectors = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/BOD/"
  const dirImgNum= Array.from({ length : 10 }, (_, i) => i)
  const collageImgNum = Array.from({ length : 6 }, (_, i) => i+11)

  const header = imagesArray.find(
    (url) => url.includes(folderPath) && url.includes(`Header.png`)
  )

  const dirImages = dirImgNum.map((num) => {
    return imagesArray.find(
      (url) => url.includes(folderPath) && url.includes(`D${num}.png`)
    )
  }).filter(Boolean)

  const collageImages = collageImgNum.map((num) => {
    return imagesArray.find(
        (url) => url.includes(folderPath) && url.includes(`${num}.png`)
    )
  }).filter(Boolean)

  return (
    <div className="teams">
      <Nav />
      {/* Board of Directors */}

      <div className="team-header">
        <img src={header} alt="board of directors" />
        <div className="header-overlay">
          <h1>bod</h1>
        </div>
      </div>

      <div className="bod">
        <h1>Board of Directors (BOD)</h1>
        <h2>Purpose</h2>
        <p>The Board of Directors (BOD) leads the strategic direction and execution of Fashion for Change. Each director oversees their respective commmittee, making key decisions that shape the creative and operational success of the club. The BOD collaborates to ensure every show, event, and initiative aligns with our mission of creativity, inclusivity, and charitable impact. Together, they mentor their teams, foster collaboration, and create a platform where passion and purpose meet.</p>

        <div className="directors-box">
          <div className="directors">
            <img src={dirImages[0]} alt="director"></img>
            <div className="text">
              <h1>President</h1>
              <p>The President is responsible for leading the club, setting its direction, and overseeing the work of all teams. They make final decisions, coordinate major initiatives, and ensre the club stays on track throughout the year.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[1]} alt="director"></img>
            <div className="text">
              <h1>Vice President</h1>
              <p>The Vice President is responsible for supporting the President and ensuring teams stay organized, meet deadlines, and communicate effectively. They help manage logistics, resolve issues, and keep operations running smoothly.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[2]} alt="director"></img>
            <div className="text">
              <h1>Artistic</h1>
              <p>The Artistic Director is responsible for hiring choreographers and designers, creating the theme and scenes for the final winter showcase, and organizing the dance workshop in the fall. They work closely with other teams to oversee artistic progress and ensure cohesion across all creative elements.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[3]} alt="director"></img>
            <div className="text">
              <h1>Model</h1>
              <p>The Model Director is responsible for recruiting, training, and coordinating models, ensuring their involvement in workshops, rehearsals, and fittings. They also work with choreographers and designers to assign roles and gide models throughout the fashion show process.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[4]} alt="director"></img>
            <div className="text">
              <h1>Stage</h1>
              <p>The Stage Director oversees technical and backstage preparations by managing the Stage Team and coordinating the lighting and sound elements of the show. They work closely with the Artistic and Model teams in the lead-up to show day to make sure everything runs smoothly on stage.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[5]} alt="director"></img>
            <div className="text">
              <h1>Finance</h1>
              <p>The Finance Director manages the club's budget and financial planning by leading the Finance Team and processing expenditures and reimbursements. They also draft endowment fund proposals to secure funding in support of the club's initiatives.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[6]} alt="director"></img>
            <div className="text">
              <h1>Events</h1>
              <p>The Events Director leads the Events Committee in organizing social events and club activities throughout the year. They coordinate logistics, manage resources, and ensure events align with the club's goals and WUSA regulations.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[7]} alt="director"></img>
            <div className="text">
              <h1>Sponsorhsip</h1>
              <p>The Sponsorship Director leads efforts to secure both monetary and non-monetary sponsorships, overseeing the Sponsorship Team and engaging with external partners.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[8]} alt="director"></img>
            <div className="text">
              <h1>Public Relations</h1>
              <p>The PR Director leads the Public Relations Team, promoting the FC brand across online, digital, and physical meddia. They also manage communication with the selected charity and help strengthen the club's external relationships.</p>
            </div>
          </div>

          <div className="directors">
            <img src={dirImages[9]} alt="director"></img>
            <div className="text">
              <h1>Marketing</h1>
              <p>The Marketing Director oversees the development of visual and promotional content by managing a team of photographers/videographers, graphic designers and writers. They coordinate creative efforts to build a consistent and engaging brand image across all club activities.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="collage">
        <img src={collageImages[0]} alt="director"></img>
        <img src={collageImages[1]} alt="director"></img>
        <img src={collageImages[2]} alt="director"></img>
        <img src={collageImages[3]} alt="director"></img>
        <img src={collageImages[4]} alt="director"></img>
        <img src={collageImages[5]} alt="director"></img>
      </div>
      <Footer />
    </div>
  )
};

export default BoardOfDirectors;
