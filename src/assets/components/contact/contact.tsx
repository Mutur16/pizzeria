import { ReactNode } from 'react'
import { FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import pizzeria from './../../img/pizzeria-front.png'
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
                        <li><FaLocationDot /><a href="https://maps.app.goo.gl/hRyZKnfHqY6DQyLh9" target='blank'>19 Rue Henri Barbusse, 95130 Franconville</a></li>
                        <li><FaPhoneAlt /><a href="tel:+33134137348">01 34 13 73 48</a></li>
                        <li><MdAlternateEmail /><a href="mailto:atelierpizza95@gmail.com">atelierpizza95@gmail.com</a></li>
                    </ul>
                    <h3>Horaires d'ouverture</h3>
                    <ul className='opening-hours-list'>
                        <li>
                            <span>Mardi à Jeudi & Samedi</span>
                            <span>
                                11h30 - 14h30
                                <hr />
                                18h30 - 22h30
                            </span>
                        </li>
                        <li>
                            <span>Vendredi</span>
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
