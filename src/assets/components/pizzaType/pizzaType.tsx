import { ReactNode } from 'react'
import { pizzaType } from '../../data/pizzaType'

import pizza from '../../img/pizza.png'
import './pizzaType.css'

function PizzaTypeContainer(): ReactNode {
    return (
        <>
            <h2>Les pizzas</h2>
            <div className="pizza-container">
                {pizzaType.map((item, index) => (
                    <div className="pizza-type-container" key={index}>
                        <img src={pizza} alt="photo d'une pizza" />
                        <h3 className="pizza-type-title">{item.name}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} className="pizza-discover">
                            Découvrir la carte
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PizzaTypeContainer
