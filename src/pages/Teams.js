import Nav from '../components/Navbar.js'
import Footer from '../components/Footer';


const Teams = () => {
  return (
    <div className="teams">
      <Nav />

      <h1 className="title">Meet the Teams</h1>

      <div className="team-list">
        <a className="team-nav" href='/teams/bod'>board of directors</a>
        <a className="team-nav" href='/teams/artistic'>artistic</a>
        <a className="team-nav" href='/teams/events'>events</a>
        <a className="team-nav" href='/teams/stage'>stage</a>
        <a className="team-nav" href='/teams/finance'>finance</a>
        <a className="team-nav" href='/teams/pr'>public relations</a>
        <a className="team-nav" href='/teams/model'>model</a>
      </div>
      <Footer />
    </div>
  )
};

export default Teams;
