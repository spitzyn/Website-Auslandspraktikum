import React, {useState} from 'react';
import {Link, Element} from "react-scroll";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import Sevilla from "./Components/Sevilla/Sevilla.jsx";
import Title from "./Components/Title/Title.jsx"
import About from "./Components/About/About.jsx";
import Galerie from "./Components/Galerie/Galerie.jsx";
import Firma from "./Components/Firma/Firma.jsx"
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";
import Info from "./Components/PraktikumInfo/Info.jsx";
import Sevilla_info from "./Components/Sevilla_Info/sevilla_info.jsx";

const App = () => {

    const [playState, setPlayState] = useState(false);

    return (
        <div>
            <Navbar/>
            <Home/>
            <div className="container">
                <Title subTitle='Sevilla' title='Orte & Aktivitäten'/>
                <Sevilla/>
                <Sevilla_info/>
                <About setPlayState={setPlayState}/>
                <Title subTitle='Galerie' title='Fotos & Videos vom Aufenthalt in Spanien'/>
                <Galerie/>
                <Title subTitle='Firma' title='LabCheap'/>
                <Firma/>
                <Element name="info">
                    <Title subTitle='Info' title='Mein Auslandspraktikum'/>
                    <Info/>
                </Element>
                <Footer/>
            </div>
            <VideoPlayer playState={playState}
                         setPlayState={setPlayState}/>

        </div>
    );
}

export default App;