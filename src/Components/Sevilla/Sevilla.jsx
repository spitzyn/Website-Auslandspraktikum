import React from 'react'
import './Sevilla.css'
import sevilla_1 from '../../assets/sevilla_1.JPG'
import sevilla_2 from '../../assets/sevilla_2.JPG'
import sevilla_3 from '../../assets/sevilla_3.JPG'

const Sevilla = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={sevilla_2} alt=""/>
                <div className="caption">
                    <p>Plaza de España</p>
                </div>
            </div>
            <div className='program'>
                <img src={sevilla_1} alt=""/>
                <div className="caption">
                    <p>Itálica</p>
                </div>
            </div>
            <div className='program'>
                <img src={sevilla_3} alt=""/>
                <div className="caption">
                    <p>Plaza de América</p>
                </div>
            </div>
        </div>
    )
}
export default Sevilla
