import { ReactNode } from 'react'
import About from './assets/components/about/about'
import Contact from './assets/components/contact/contact'
import Footer from './assets/components/footer/footer'
import Header from './assets/components/header/header'
import PizzaTypeContainer from './assets/components/pizzaType/pizzaType'

function Home(): ReactNode {
    return (
        <>
            <Header />
            <div className="container">
                <About />
                <PizzaTypeContainer />
                <Contact />
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.2939403816245!2d2.231722378462695!3d48.99448786658809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66711ffbeaaab%3A0xc14244a0cc0df19a!2sL&#39;atelier%20pizza%20Franconville!5e0!3m2!1sfr!2sfr!4v1710860152571!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                frameBorder="0"
                loading="lazy"
            ></iframe>
            <Footer />
        </>
    )
}

export default Home
