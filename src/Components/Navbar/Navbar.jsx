import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Sevilla</li>
                <li>Firma</li>
                <li>Website</li>
                <li>Galerie</li>
                <li><button className='btn'>About</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;