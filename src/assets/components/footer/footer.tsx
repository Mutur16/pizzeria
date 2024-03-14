import { ReactNode } from 'react'
import './footer.css'

function Footer(): ReactNode {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    Website by <a href="http://alexandramm.dev" target="_blank" className='footer-website-creator'>Alexandra MM <span className="underline"></span></a>
                </div>
                <div>Copyright © 2024 <span className='footer-restaurant-name'>L'Atelier</span></div>
            </div>
        </footer>
    )
}

export default Footer
