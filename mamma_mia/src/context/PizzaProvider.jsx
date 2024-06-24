import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

function PizzaProvider({ children }) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas();
    }, []);

    const getPizzas = async () => {
        try {
            const res = await fetch("/data/pizzas.json");
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const pizzas = await res.json();
            setPizzas(pizzas);
        } catch (error) {
            console.error("Failed to fetch pizzas:", error);
        }
    };

    return (
        <PizzasContext.Provider value={{ pizzas, setPizzas }}>
            {children}
        </PizzasContext.Provider>
    );
}

export default PizzaProvider;

