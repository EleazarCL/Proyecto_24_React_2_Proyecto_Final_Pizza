import './App.css';
import Navbar from './components/Navbar';
import Carrito from './components/Carrito';
import Home from './views/Home';
import { Routes, Route } from "react-router-dom";
import PizzaProvider from './context/PizzaProvider';
import DetallePizza from './views/DetallePizza';

function App() {
    return (
        <PizzaProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/pizzas/:id' element={<DetallePizza/>} />
            </Routes>
        </PizzaProvider>
    );
}

export default App;


