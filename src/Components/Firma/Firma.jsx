import React from 'react'
import './Firma.css'
import info_icon from '../../assets/info_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import labcheap_logo from '../../assets/labcheap_logo.png'


const Firma = () => {
    return (
        <div className='Firma'>
            <div className="kontakt-col">
                <h3>Platzhalter <img src={info_icon} alt=""/></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Adipisci commodi delectus eligendi excepturi
                    explicabo fugit illo, incidunt ipsa molestiae nobis,
                    odit officia quibusdam quidem quo recusandae tenetur
                    totam ut vitae!</p>
                <ul>
                    <li><img src={phone_icon} alt=""/>Atención al Cliente: 955388029 </li>
                    <li><img src={location_icon} alt=""/>C/Zoologia 48 <br/>
                        Parque Empresarial Nuevo Torneo <br/>
                        41015 - Sevilla - Spain</li>
                    <li><img src={mail_icon} alt=""/>atcliente@labcheap.es</li>
                </ul>
            </div>
            <div className="kontakt-col">
                <img src={labcheap_logo} alt="" className="labcheap_logo"/>
            </div>
        </div>
    )
}
export default Firma
