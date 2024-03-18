import './App.css'
import About from './assets/components/about/about'
import Footer from './assets/components/footer/footer'
import Header from './assets/components/header/header'
import PizzaTypeContainer from './assets/components/pizzaType/pizzaType'

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <About />
                <PizzaTypeContainer />
            </div>
            <Footer />
        </>
    )
}

export default App
