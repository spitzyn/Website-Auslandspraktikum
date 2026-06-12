import React from 'react';
import {Link} from "react-scroll";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import Sevilla from "./Components/Sevilla/Sevilla.jsx";
import Title from "./Components/Title/Title.jsx"
import About from "./Components/About/About.jsx";
import Galerie from "./Components/Galerie/Galerie.jsx";
import Firma from "./Components/Firma/Firma.jsx"
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <div className="container">
                <Title subTitle='Sevilla' title='Orte & Aktivitäten'/>
                <Sevilla/>
                <About/>
                <Title subTitle='Galerie' title='Fotos & Videos vom Aufenthalt in Spanien'/>
                <Galerie/>
                <Title subTitle='Firma' title='LabCheap'/>
                <Firma/>
                <Footer/>
            </div>

        </div>
    );
}

export default App;