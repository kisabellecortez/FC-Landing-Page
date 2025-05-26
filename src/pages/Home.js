import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../App.css';
import Nav from '../components/Navbar.js'

const Home = () => (
  <div>
    <Hero />
    <Nav />

    <div className="grid-two">
      <div>
        <h2>about us</h2>
        <div className="card bordered-card">
          <img src="your_about_us_image.jpg" alt="About us" className="home-img" />
        </div>
      </div>
      <div>
        <h2>events</h2>
        <div className="card bordered-card">
          <img src="your_events_image.jpg" alt="Events" className="home-img" />
        </div>
      </div>
    </div>



    {/* Sponsorship full width */}
    <div className="full-width">
      <h2>sponsorships</h2>
      <div className="card bordered-card"></div>
    </div>

    <div className="full-width">
      <h2>Teams</h2>
      {/* Teams section (scrollable cards) */}
      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll" id="teams-scroll">
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />
          <div className="team-card" />

        </div>
        <button
          className="scroll-arrow"
          onClick={() => {
            const scrollContainer = document.getElementById("teams-scroll");
            scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
          }}
        >
          ❯
        </button>
      </div>
    </div>



    {/* What We Stand For full width */}
    <div className="full-width">
      <h2>what we stand for</h2>
      <div className="card bordered-card"></div>
    </div>
    {/* Past Shows: grid of 3 */}
    <div className="full-width">
      <h2>past shows</h2>
      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll" id="past-shows-scroll">
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
          <div className="show-card" />
        </div>
        <button
          className="scroll-arrow"
          onClick={() => {
            const scrollContainer = document.getElementById("past-shows-scroll");
            scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
          }}
        >
          ❯
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
