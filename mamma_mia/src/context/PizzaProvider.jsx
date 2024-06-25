import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

function PizzaProvider({ children }) {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        getPizzas();
    }, []);

    const getPizzas = async () => {
        const res = await fetch("../data/pizzas.json");
        const pizzas = await res.json();
        setPizzas(pizzas);
    };

    const addToCart = (pizza) => {
        setCarrito(prev => {
            const existingPizza = prev.find(item => item.id === pizza.id);
            if (existingPizza) {
                return prev.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                return [...prev, { ...pizza, quantity: 1 }];
            }
        });
    };

    const incrementQuantity = (pizzaId) => {
        setCarrito(prev => prev.map(item => item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decrementQuantity = (pizzaId) => {
        setCarrito(prev => {
            const updatedCart = prev.map(item => item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item);
            return updatedCart.filter(item => item.quantity > 0);
        });
    };

    return (
        <PizzasContext.Provider
            value={{ pizzas, addToCart, carrito, incrementQuantity, decrementQuantity }}
        >
            {children}
        </PizzasContext.Provider>
    );
}

export default PizzaProvider;


