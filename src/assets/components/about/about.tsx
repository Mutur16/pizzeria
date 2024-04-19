import { ReactNode } from 'react'
import pizzaiolo from './../../img/pizzaiolo.istock.jpg'
import "./about.css"

function About(): ReactNode {
    return (
        <div className="about">
            <div className="about-text">
                <h2>Une approche authentique et chaleureuse</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corporis quasi beatae saepe harum, dolorum minus necessitatibus, debitis eos, ea possimus nulla. Architecto magni, sed dolor officiis ullam ut reiciendis!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique neque alias eius quasi architecto aperiam perferendis maxime repudiandae! Voluptatum ipsam provident ipsa voluptas illum ad laborum eius pariatur fuga tenetur.
                </p>
            </div>
            <img src={pizzaiolo} alt="photographie du cuisinier" />
        </div>
    )
}

export default About
