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
                <h3>LabCheap <img src={info_icon} alt=""/></h3>
                <p>LabCheap ist ein Technologieunternehmen mit Sitz
                    in Sevilla, das sich auf die Entwicklung und
                    Herstellung von Hardware- und Elektroniklösungen
                    spezialisiert. Das Unternehmen entwickelt
                    innovative Produkte für verschiedene technische
                    Anwendungen und legt dabei Wert auf Qualität,
                    moderne Technologien und kontinuierliche Weiterentwicklung.</p>
                <ul>
                    <li><img src={phone_icon} alt=""/>Telefon: 955388029 </li>
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
