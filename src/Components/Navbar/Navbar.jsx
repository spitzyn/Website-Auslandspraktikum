import React, {useEffect, useState} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            /* Wenn scrollY über 50 dann setSticky auf true, ansonsten false */
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })
    }, []);

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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