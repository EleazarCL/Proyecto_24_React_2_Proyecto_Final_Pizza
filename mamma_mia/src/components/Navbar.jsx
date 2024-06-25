import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";

function Navbar() {
    const { carrito } = useContext(PizzasContext);

    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <nav className="navbar">
                <Link className="logo-nombre logo-pizza" to="/">&#127829; Pizzería Mamma Mia!</Link>
                <Link className="logo-nombre logo-carrito" to="/carrito">&#128722; ${total}
                </Link>
        </nav>
    );
}

export default Navbar;
