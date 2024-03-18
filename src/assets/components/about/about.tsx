import { ReactNode } from 'react'
import pizzaiolo from './../../img/pizzaiolo.png'
import "./about.css"

function About(): ReactNode {
    return (
        <div className="about">
            <div className="about-text">
                <h2>Une approche authentique et chaleureuse</h2>
                <p>
                    Ici, la Pizza est une oeuvre d'art. Qu'elle soit classique
                    ou créative. Momo crée avec amour et inspiration, il
                    envisage la Pizza comme de la vraie cuisine, faite à partir
                    d'ingrédients scrupuleusement choisis. D'abord la pâte.
                    Impossible d'en parler, c'est son secret. Ensuite, tout est
                    savamment mijoté à partir de produits frais. Choisissez une
                    classique, osez une créative ou laissez-vous surprendre par
                    la Pizza du moment, qui respecte toujours les produits de
                    saison.
                </p>
            </div>
            <img src={pizzaiolo} alt="photographie du cuisinier" />
        </div>
    )
}

export default About
