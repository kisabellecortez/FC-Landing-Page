// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js';
import React, { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext.js"

const Artistic = () => {
  const imagesArray = useContext(ImagesContext);
  const folderPath = "Teams/Artistic/"
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
        <img src={header} alt="artistic"/>
        <div className="header-overlay">
          <h1>artistic</h1>
        </div>
      </div>

      <div className="summary">
        <p>The Artistic Team is responsible for shaping the creative vision of the production. This group includes choreographers and designers with other creative roles who work together to bring each scene to life. They oversee choreography, fashion design, lighting, music, and overall aesthetics, ensuring a choesive and visually engaging performance. Collaboration, creativity, and strong time management are essential as they lead rehearsals, creativity, and strong time management are essential as they lead rehearsals, attend workshops, and execute their artistic concepts on schedule.</p>
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
          <img src={extraImages[0]} alt="choreographers"></img>
        </div>
      </div>

      <div className="box">
        <div className="inner-2">
          <img src={extraImages[1]} alt="designers"></img>
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

export default Artistic;
  