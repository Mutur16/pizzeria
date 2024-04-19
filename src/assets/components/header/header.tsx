import { ReactNode } from 'react'
import { HashLink } from 'react-router-hash-link' 
import './header.css'
import { Link } from 'react-router-dom'

function Header(): ReactNode {
    return (
        <div className="header">
            <nav className="navbar" id="navbar">
                <HashLink smooth to="/#contact" className="navbar-item">
                    Réservation
                </HashLink>
                <HashLink smooth to="/menu#menu" className="navbar-item">
                    Menu
                </HashLink>
            </nav>
            <Link to="/" className="baseline">
                <h1 className="baseline-name">Lorem</h1>
                <span className="baseline-subtitle">- Pizza -</span>
                <p className="baseline-slogan">
                    Plus qu'une simple pizza, une passion.
                </p>
            </Link>
        </div>
    )
}

export default Header
