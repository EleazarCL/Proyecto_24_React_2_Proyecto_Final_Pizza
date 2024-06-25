import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProvider";

function Carrito() {
    const { carrito, incrementQuantity, decrementQuantity } = useContext(PizzasContext);

    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => decrementQuantity(item.id)}>-1</button>
                    <button onClick={() => incrementQuantity(item.id)}>+1</button>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => alert('Procediendo al pago...')}>Ir a pagar</button>
        </div>
    );
}

export default Carrito;
