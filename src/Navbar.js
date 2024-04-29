import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/final.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="logo for NangNang" />
            </div>

            <div className="nangword">
                <NavLink to="/home"><h2>NangNang</h2></NavLink>
            </div>

            <div className="links">
                <NavLink to="/learn">Learn</NavLink>
                <NavLink to="/dictionary">Dictionary</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
