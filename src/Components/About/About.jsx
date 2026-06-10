import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about_img"/>
                <img src={play_icon} alt="play_icon"/>
            </div>
            <div className="about-right">
                <h3>About Auslandspraktikum</h3>
                <h2>Brandenburgischer IT-Dienstleister</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi assumenda debitis doloribus eligendi est fugiat impedit
                    maxime modi nesciunt nostrum optio pariatur provident quae
                    quaerat quam quia sed tempore, vel?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                    beatae eaque harum labore magnam maiores non officiis perferendis
                    qui recusandae, rem repellendus repudiandae sint sit sunt
                    temporibus voluptatem! Dolore, placeat?</p>
            </div>
        </div>
    )
}
export default About
