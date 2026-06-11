import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import Sevilla from "./Components/Sevilla/Sevilla.jsx";
import Title from "./Components/Title/Title.jsx"
import About from "./Components/About/About.jsx";
import Galerie from "./Components/Galerie/Galerie.jsx";

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
            </div>

        </div>
    );
}

export default App;