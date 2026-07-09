import React, {useEffect, useState} from 'react';
import {Link, Element} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.png'
import Home from "../Home/Home.jsx";
import Sevilla from "../Sevilla/Sevilla.jsx";
import Firma from "../Firma/Firma.jsx";
import Galerie from "../Galerie/Galerie.jsx";
import About from "../About/About.jsx";
import Info from "../PraktikumInfo/Info.jsx";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            /* Wenn scrollY über 50 dann setSticky auf true, ansonsten false */
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo'/>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='Sevilla' smooth={true} offset={-210} duration={500}>Sevilla</Link></li>
                {/* <li><Link to={Website} smooth={true} offset={0} duration={500}>Website</Link></li> */}
                <li><Link to='about' smooth={true} offset={-140} duration={500}>About</Link></li>
                <li><Link to='Galerie' smooth={true} offset={-230} duration={500}>Galerie</Link></li>
                <li><Link to='Firma' smooth={true} offset={-220} duration={500}>Firma</Link></li>
                <li><Link to='Info' smooth={true} offset={-250} duration={500}>Info</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
}

export default Navbar;