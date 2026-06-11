import React from 'react'
import './Galerie.css'
import foto_1 from '../../assets/foto_1.JPEG'
import foto_2 from '../../assets/foto_2.JPEG'
import foto_3 from '../../assets/foto_3.jpg'
import foto_4 from '../../assets/foto_4.JPEG'
import arrow from '../../assets/arrow.png'

const Galerie = () => {
    return (
        <div className='Galerie'>
            <div className="Fotos">
                <img src={foto_1} alt=""/>
                <img src={foto_2} alt=""/>
                <img src={foto_3} alt=""/>
                <img src={foto_4} alt=""/>
            </div>
            <button className='btn dark'>Noch mehr Fotos <img src={arrow} alt=""/></button>
        </div>
    )
}
export default Galerie
