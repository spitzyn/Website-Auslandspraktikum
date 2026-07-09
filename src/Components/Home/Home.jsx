import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';
import Arrow from '../../assets/arrow.png';

const Home = () => {
    return (
        <div className='home container'>
            <div className="home-text">
                <h1>Auslandspraktikum Sevilla 2026</h1>
                <h2>17.05 - 13.06.2026</h2>
                <p>Diese Website dokumentiert ein Auslandspraktikum in Sevilla,
                    Spanien. Im Mittelpunkt stehen das Unternehmen LabCheap,
                    die Tätigkeiten während des Praktikums sowie Eindrücke aus
                    dem Arbeitsalltag und dem Leben in Spanien.</p>
                <p>Nele, P24, Brandenburgischer IT-Dienstleister</p>

                <Link to="info" smooth={true} duration={500} offset={-80}>
                    <button className='btn'>
                        Mehr erfahren <img src={Arrow} alt="" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;