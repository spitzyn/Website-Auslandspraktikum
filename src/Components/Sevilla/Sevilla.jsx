import React, {useRef} from 'react'
import './Sevilla.css'
import sevilla_1 from '../../assets/sevilla_1.JPG'
import sevilla_2 from '../../assets/sevilla_2.JPG'
import sevilla_3 from '../../assets/sevilla_3.JPG'
import next_icon from '../../assets/arrow.png'
import back_icon from '../../assets/arrow.png'

const Sevilla = () => {

        const slider = useRef();
        let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx > 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='Sevilla'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="program">
                                <img src={sevilla_2} alt=""/>
                                <div className="caption">
                                    <p>Plaza de España</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='program'>
                                <img src={sevilla_1} alt=""/>
                                <div className="caption">
                                    <p>Itálica</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='program'>
                                <img src={sevilla_3} alt=""/>
                                <div className="caption">
                                    <p>Plaza de América</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sevilla
