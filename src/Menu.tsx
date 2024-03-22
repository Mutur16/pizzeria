import { FaArrowUp } from 'react-icons/fa'
import Collapse from './assets/components/collapse/collapse'
import Footer from './assets/components/footer/footer'
import Header from './assets/components/header/header'
import MenuItem from './assets/components/menuItems/menuItem'
import { menuDessert } from './assets/data/menuDessert'
import { menuDrink } from './assets/data/menuDrink'
import { menuPizza } from './assets/data/menuPizza'
import { menuSide } from './assets/data/menuSide'
import './menu.css'
import { ReactNode } from 'react'

function Menu(): ReactNode {
    return (
        <>
            <Header />
            <div className="menu-container">
                <span className="menu-page-title" id="menu">
                    Menu
                </span>
                <h2>Pizzas</h2>
                <div className="pizza-menu-container">
                    {menuPizza.map((item) => (
                        <Collapse item={item} key={item.id} />
                    ))}
                    <span>
                        <h3>La pizza du moment</h3>
                        <span>
                            Elle s'inspire des produits de saison. Pour
                            émerveiller votre palais, mais aussi, se garnir de
                            ce que la nature offre de meilleur. <hr />
                            <b>Demandez-nous la recette du jour !</b>
                        </span>
                    </span>
                </div>
                <h2>Accompagnements</h2>
                <div className="item-menu-container">
                    {menuSide.map((item) => (
                        <MenuItem item={item} key={item.id} />
                    ))}
                </div>
                <div>
                    <h2>La Bruschetta</h2>
                    <div>
                        <div className="bruschetta">
                            <span>
                                Tartine de pain frottée à l'ail, arrosée d'huile
                                d'olive et garnie de divers ingrédients...
                            </span>
                            <span className="item-price">9,00€</span>
                        </div>
                        <b>Demandez-nous la recette du moment !</b>
                    </div>
                </div>
                <h2>Desserts</h2>
                <div className="item-menu-container">
                    {menuDessert.map((item) => (
                        <MenuItem item={item} key={item.id} />
                    ))}
                </div>
                <h2>Boissons</h2>
                <div className="item-menu-container">
                    {menuDrink.map((item) => (
                        <MenuItem item={item} key={item.id} />
                    ))}
                </div>
                <a href="#navbar" className="arrow-up-container">
                    <FaArrowUp className="arrow-up" />
                </a>
            </div>
            <Footer />
        </>
    )
}

export default Menu
