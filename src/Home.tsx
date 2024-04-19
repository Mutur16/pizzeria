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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7424.210051493951!2d2.321180743912004!3d48.86098226386383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2c30000001%3A0xc219db09e1bfefc7!2sJardin%20des%20Tuileries!5e0!3m2!1sfr!2sfr!4v1713538787418!5m2!1sfr!2sfr"
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
