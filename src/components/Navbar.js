import '../App.css'
import logo from '../images/FC-Logo.svg'

export default function Navbar(){
    return(
        <div className="nav">

            <a href='/'>
                <img className='logo' src={logo} alt='FC Logo'></img>
            </a>

            <div className="pages">
                <a href='/about-us'>about us</a>
                <a href='/events'>events</a>
                <a href='/sponsorship'>sponsorship</a>
                <a href='/teams'>teams</a>
                <a href='/stand-for'>stand for</a>

                <div className="dropdown">
                    <a href='/shows'>shows</a>

                    <div className="dropdown-content">
                        <a href="/past-shows/ffc">Fashion For Change</a>
                        <a href="/past-shows/enchanted">Enchanted</a>
                        <a href="/past-shows/fcmas">FCMAS</a>
                        <a href="/past-shows/sytygs">So You Think You Got Style</a>
                        <a href="/past-shows/ttd">Through the Decades</a>
                        <a href="/past-shows/pandoras">Pandoras Box</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
