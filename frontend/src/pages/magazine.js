// DONE

import Nav from '../components/Navbar.js'
import Footer from "../components/Footer.js";

const Magazine = () => {
    return(
        <div className="magazine-page">
            <Nav/>
                <iframe title="magazine" allowfullscreen allow="clipboard-write" scrolling="no" className="fp-iframe" style={{ border: "1px solid lightgray", width: "100%", height: "600px" }} src="https://heyzine.com/flip-book/19cebe0029.html"></iframe>         
            <Footer/>
        </div>
    )
}

export default Magazine; 