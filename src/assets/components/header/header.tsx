import { ReactNode, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header(): ReactNode {
    useEffect(() => {
        const scrollToAnchor = (anchor: string) => {
            const element = document.querySelector(anchor)!
            element.scrollIntoView({ behavior: 'smooth' })
        }

        if (window.location.hash) {
            scrollToAnchor(window.location.hash)
        }

    }, [])

    return (
        <div className="header">
            <nav className="navbar" id="navbar">
                <Link to="/#contact" className="navbar-item">
                    Réservation
                </Link>
                <Link to="/menu#menu" className="navbar-item">
                    Menu
                </Link>
            </nav>
            <Link to="/" className="baseline">
                <h1 className="baseline-name">L'Atelier</h1>
                <span className="baseline-subtitle">- Pizza -</span>
                <p className="baseline-slogan">
                    Plus qu'une simple pizza, une passion.
                </p>
            </Link>
        </div>
    )
}

export default Header
