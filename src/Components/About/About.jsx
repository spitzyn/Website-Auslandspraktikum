import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play_icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about_img" className="about_img"/>
                <img src={play_icon} alt="play_icon" className="play_icon"/>
            </div>
            <div className="about-right">
                <h3>About Auslandspraktikum</h3>
                <h2>Azubi Mobil</h2>
                <p>Azubi Mob!L macht die duale Ausbildung international: Auszubildende
                    können einen anerkannten Teil ihrer Ausbildung in einem anderen
                    europäischen Land absolvieren – und dabei wertvolle Berufserfahrung
                    sammeln. Wir begleiten die Azubis im Rahmen des Erasmus+ Programms
                    von Anfang bis Ende: von der Praktikumssuche über die Unterkunft bis
                    hin zur Finanzierung. Wohin die Reise geht, wie lange sie dauert und
                    wann sie stattfindet, entscheiden die Azubis mit ihren
                    Ausbildungsbetrieben selbst. Möglich sind individuelle
                    Auslandsaufenthalte von 3 bis 6 Wochen – in begründeten Fällen auch
                    kürzer oder länger. Teilnehmen können Auszubildende aus dem gesamten
                    Bundesgebiet sowie junge Fachkräfte bis zu einem Jahr nach erfolgreichem
                    Ausbildungsabschluss.</p>
            </div>
        </div>
    )
}
export default About
