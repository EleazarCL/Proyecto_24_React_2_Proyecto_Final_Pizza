import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";

function Navbar() {
    const { carrito } = useContext(PizzasContext);

    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="div-links">
                <Link className="logo-nombre" to="/">&#127829; Pizzería Mamma Mia!</Link>
                <Link className="logo-nombre" to="/carrito">&#128722; ${total.toFixed(2)}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
