import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProvider";

function Carrito() {
    const { carrito, incrementQuantity, decrementQuantity } = useContext(PizzasContext);

    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="supra-container">
            <div className="container-general">
                <h4>Detalles del pedido</h4>
                <div className="container-items">
                    {carrito.map(item => (
                        <div key={item.id} className="items">
                            <div className="sub-items-img-name">
                            <img src={item.img} />
                            <h2>{item.name}</h2>
                            </div>
                            <div className="sub-items-price-bottom">
                            <p>Precio: ${item.price}</p>
                            <button className="btn btn-rest" onClick={() => decrementQuantity(item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="btn btn-sum" onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        </div>
                        
                    ))}
                </div>
                <h2>Total: ${total}</h2>
                <button className="btn btn-pagar" onClick={() => alert('Procediendo al pago...')}>Ir a pagar</button>
            </div>
        </div>
    );
}

export default Carrito;
