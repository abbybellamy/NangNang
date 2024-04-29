// sfc tab gave this stuff
// import Home from './pages/Home';
// import About from './pages/About';
import logo from './images/final.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <img className = "logo" src={logo} alt="logo for NangNang" />
            </div>

            <div className = "nangword">
                <a href="/Home"><h2>NangNang</h2> </a>
            </div>

            <div className="links">
            <a href="/Learn">Learn</a>
                <a href="/Dictionary">Dictionary</a>
                <a href="/About">About</a>
            </div>

            
        </nav>
    );
}

export default Navbar;