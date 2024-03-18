import { ReactNode } from 'react'
import { pizzaType } from '../../data/pizzaType'

import pizza from '../../img/pizza.png'
import './pizzaType.css'

function PizzaTypeContainer(): ReactNode {
    return (
        <div className="pizza-container">
            <h2>Les pizzas</h2>
            <div className="pizza-small-container">
                {pizzaType.map((item) => (
                    <div className="pizza-type-container">
                        <span>
                            <img src={pizza} alt="photo d'une pizza" />
                            <h3 className="pizza-type-title">{item.name}</h3>
                            <p>{item.description}</p>
                        </span>
                        <a href={item.link} className='pizza-discover'>Découvrir la carte</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PizzaTypeContainer
