import { ReactNode, useState } from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import './header.css'

function Header(): ReactNode {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    return (
        <div className="header">
            <nav className="navbar">
                <a href="#" className="navbar-item">
                    Réservation
                </a>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="dropdown">
                        <button
                            type="button"
                            className="navbar-button navbar-item"
                            onClick={handleOpen}
                        >
                            Menu
                        </button>
                        {open ? (
                            <ul className="navbar-menu">
                                <li>
                                    <a href="#">Pizza</a>
                                </li>
                                <li>
                                    <a href="#">Salade</a>
                                </li>
                                <li>
                                    <a href="#">Dessert</a>
                                </li>
                                <li>
                                    <a href="#">Boisson</a>
                                </li>
                            </ul>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </nav>
            <div className="baseline">
                <h1 className="baseline-name">L'Atelier</h1>
                <span className="baseline-subtitle">- Pizza -</span>
                <p className="baseline-slogan">
                    Plus qu'une simple pizza, une passion.
                </p>
            </div>
        </div>
    )
}

export default Header
