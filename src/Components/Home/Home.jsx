import React from 'react';
import './Home.css';
import Arrow from '../../assets/arrow.png'

const Home = () => {
    return (
        <div className='home container'>
            <div className="home-text">
                <h1>Auslandspraktikum Sevilla 2026</h1>
                <p>Spanien, Nele, P24, Brandenburgischer IT-Dienstleister</p>
                <button className='btn'>Mehr erfahren <img src={Arrow} alt=""/></button>
            </div>
        </div>
    )
}

export default Home;