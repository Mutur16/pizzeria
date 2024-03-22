import { ReactNode, useEffect } from 'react'
import './header.css'

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
                <a href="/#contact" className="navbar-item">
                    Réservation
                </a>
                <a href="/menu#menu" className="navbar-item">
                    Menu
                </a>
            </nav>
            <a href="/" className="baseline">
                <h1 className="baseline-name">L'Atelier</h1>
                <span className="baseline-subtitle">- Pizza -</span>
                <p className="baseline-slogan">
                    Plus qu'une simple pizza, une passion.
                </p>
            </a>
        </div>
    )
}

export default Header
