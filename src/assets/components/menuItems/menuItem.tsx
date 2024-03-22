import { ReactNode } from 'react'
import './menuItems.css'

type ItemProp = {
    name: string
    price: string
}

function MenuItem({ item }: { item: ItemProp }): ReactNode {
    return (
        <div className='item-container'>
            <span>{item.name}</span>
            <span className='item-price'>{item.price}</span>
        </div>
    )
}

export default MenuItem