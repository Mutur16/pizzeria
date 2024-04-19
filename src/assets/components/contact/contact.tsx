import { ReactNode } from 'react'
import { FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import pizzeria from './../../img/pizzeria.istock.jpg'
import './contact.css'

function Contact(): ReactNode {
    return (
        <div id="contact">
            <h2>Contact & Réservation</h2>
            <div className="contact-container">
                <img
                    src={pizzeria}
                    alt="Photographie de la devanture de la pizzeria"
                />
                <div className="contact-container-text">
                    <h3>Informations</h3>
                    <ul className='information-list'>
                        <li><FaLocationDot /><a href="https://maps.app.goo.gl/3TLMKhhu6AF4CmMX8" target='blank'>Île-de-France</a></li>
                        <li><FaPhoneAlt /><a href="tel:#">00 00 00 00 00</a></li>
                        <li><MdAlternateEmail /><a href="mailto:alex.m-m@outlook.com">alex.m-m@outlook.com</a></li>
                    </ul>
                    <h3>Horaires d'ouverture</h3>
                    <ul className='opening-hours-list'>
                        <li>
                            <span>Mardi à Vendredi</span>
                            <span>
                                11h30 - 14h30
                                <hr />
                                18h30 - 22h30
                            </span>
                        </li>
                        <li>
                            <span>Samedi</span>
                            <span>18h30 - 22h30</span>
                        </li>
                        <li>
                            <span>Lundi & Dimanche</span>
                            <span>Fermé</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact
