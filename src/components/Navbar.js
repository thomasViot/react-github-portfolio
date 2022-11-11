import "../styles/NavbarStyle.css";

import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
    <div className="header">
        <Link to={"/react-github-portfolio"}>
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/react-github-portfolio">Home</Link>
            </li>
            <li>
                <Link to="/react-github-portfolio/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/react-github-portfolio/Studies">Studies</Link>
            </li>
            <li>
                <Link to="/react-github-portfolio/Contact">Contact</Link>
            </li>
        </ul>
        
        <div className="humburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
        </div>
        
    </div>
    )
}

export default Navbar