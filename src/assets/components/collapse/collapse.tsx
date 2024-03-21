import './collapse.css'
import { useState, useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa'

type PizzaContentProp = {
    name: string
    price: string
    description: string
}

type PizzaProp = {
    label: string
    id: string
    content: PizzaContentProp[]
}

function Collapse({ item }: { item: PizzaProp }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
        const content = contentRef.current

        if (content) {
            content.style.maxHeight = isOpen ? '0' : `${content.scrollHeight}px`
        }
    }

    return (
        <div>
            <div className="collapsible-header" onClick={toggleCollapse}>
                <h3 className="collapsible-header-label">{item.label}</h3>
                <FaArrowDown
                    id="#"
                    className={`collapsible-arrow ${
                        isOpen ? 'turn-arrow' : ''
                    }`}
                />
            </div>
            <div className="collapsible-content" ref={contentRef}>
                {item.content.map(
                    (content: PizzaContentProp, index: number) => {
                        return (
                            <span key={index}>
                                <h4 className="collapsible-header-label">
                                    <span>{content.name}</span>
                                    <span>{content.price}</span>
                                </h4>
                                <p>{content.description}</p>
                            </span>
                        )
                    }
                )}
                <br />
            </div>
        </div>
    )
}

export default Collapse
