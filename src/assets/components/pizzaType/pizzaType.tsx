import { ReactNode } from 'react'
import { pizzaType } from '../../data/pizzaType'

import pizza from '../../img/pizza.png'
import './pizzaType.css'
import { Link } from 'react-router-dom'

function PizzaTypeContainer(): ReactNode {
    return (
        <>
            <h2>Les pizzas</h2>
            <div className="pizza-container">
                {pizzaType.map((item, index) => (
                    <div className="pizza-type-container" key={index}>
                        <img src={pizza} alt="photo d'une pizza" />
                        <h3 className="pizza-type-title">{item.name}</h3>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <Link to={item.link} className="pizza-discover">
                            Découvrir la carte
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PizzaTypeContainer
