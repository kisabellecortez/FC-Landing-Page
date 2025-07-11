// DONE

import Nav from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'

import H from '../../images/MAR-H.png'
import C1 from '../../images/MAR-C1.png'
import C2 from '../../images/MAR-C2.png'
import C3 from '../../images/MAR-C3.png'
import C4 from '../../images/MAR-C4.png'
import C5 from '../../images/MAR-C5.png'
import C6 from '../../images/MAR-C6.png'
import C7 from '../../images/MAR-C7.png'
import C8 from '../../images/MAR-C8.png'
import C9 from '../../images/MAR-C9.png'
import C10 from '../../images/MAR-C10.png'
import C11 from '../../images/MAR-C11.png'

const Marketing = () => {
    return(
        <div className="teams">
            <Nav/>
            
            {/* Events */}
            <div className="team-header">
                <img src={H} alt="events" className="header-image" />
                <div className="header-overlay">
                <h1>marketing</h1>
                </div>
            </div>
    
            <div className="summary">
                <p>The Marketing Team is repsonsible for developing and enhancing Fashion for Change's visual identity. They create captivating marketing materials through photography, graphic design, and innovate outreach. Their focus is on promotinng our club, events, and initiatives by designing eye-cathing promotional content that appeals to our target audience. Their work not only attracts attention but also adds to the overall aesthetic and branding of Fashion for Change.</p>
            </div>
    
            <div className="collage">
                <img src={C1} alt="marketing team"></img>
                <img src={C2} alt="marketing team"></img>
                <img src={C3} alt="marketing team"></img>
                <img src={C4} alt="marketing team"></img>
                <img src={C5} alt="marketing team"></img>
                <img src={C6} alt="marketing team"></img>
            </div>
    
            <div className="box">
                <div className="inner-1">
                <h1>Social Media Outreach Coordinator</h1>
                <ul>
                    <li>Manage and grow Fashion for Change's social media presence.</li>
                    <li>Create and run engaging campaigns that align with our brand.</li>
                    <li>Respond to comments and messages in a timely professional manner.</li>
                    <li>Represent the club confidently and help drive traffic to our events.</li>
                </ul>
                </div>
    
                <div className="inner-2">
                <img src={C7} alt="choreographers"></img>
                </div>
            </div>
    
            <div className="box">
                <div className="inner-2">
                <img src={C8} alt="designers"></img>
                </div>
    
                <div className="inner-1">
                    <h1>Blog/Content Writer</h1>
                    <ul>
                        <li>Write compelling and well-researched content for web, email, and socials.</li>
                        <li>Reflect FC's tone, values, and voice in everything you write.</li>
                        <li>Research relevant topics and meet consistent deadlines.</li>
                        <li>Strong, writing, editing, and communication skills are key.</li>
                    </ul>
                </div>
            </div>

            <div className="box">
                <div className="inner-1">
                <h1>Graphic Designer</h1>
                <ul>
                    <li>Design eye-catching digital and print materials that match FC's brand.</li>
                    <li>Use Canva, Adobe Creative Suite or similar tools to create assets on deadline.</li>
                    <li>Collaborate with the team to maintain a cohesive visual identity.</li>
                    <li>Must be organized, creative, and deetail-oriented.</li>
                </ul>
                </div>
    
                <div className="inner-2">
                <img src={C9} alt="choreographers"></img>
                </div>
            </div>
    
            <div className="box">
                <div className="inner-2">
                <img src={C10} alt="designers"></img>
                </div>
    
                <div className="inner-1">
                    <h1>Photographer</h1>
                    <ul>
                        <li>Plan and capture high-quality photos that showcase FC's events and energy.</li>
                        <li>Edit images with Adobe Suite or similar software.</li>
                        <li>Own or have access to a DSLR camera and basic gear.</li>
                        <li>Mut be reliable, detail-oriented, and able to work within brand guidelines.</li>
                    </ul>
                </div>
            </div>

            <div className="box">
                <div className="inner-1">
                <h1>SVideographer</h1>
                <ul>
                    <li>Film and edit dynamic video content for marketing and internal use.</li>
                    <li>Plan shoots and work with teams on storyboarding and execution.</li>
                    <li>Use video editing software such as Capcut, Adobe Priemiere Pro or similar.</li>
                    <li>Must be adaptable, collaborative, and attentive to detail.</li>
                </ul>
                </div>
    
                <div className="inner-2">
                <img src={C11} alt="choreographers"></img>
                </div>
            </div>
    
            <Footer/>
        </div>
    )
};

export default Marketing; 