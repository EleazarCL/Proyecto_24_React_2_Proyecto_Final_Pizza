import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import { formatoNumero } from "../formatoNumero";

function Card() {
    const { pizzas, addToCart } = useContext(PizzasContext);
    const navigate = useNavigate();

    return (
        <>
            {pizzas.map((pizza) => (
                <div key={pizza.id} className="col">
                    <div className="card">
                        <img src={pizza.img} alt="imagen pizza" className="custom-card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Pizza {pizza.name}</h4>
                            <hr />
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>

                            <ul>
                                {pizza.ingredients.map((ingredient, i) => (
                                    <li key={i}>&#127829; {ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="text-center">Precio: ${formatoNumero(pizza.price)}</h2>
                        <div className="btn-group">
                            <button
                                className="btn btn-info"
                                onClick={() => navigate(`/pizzas/${pizza.id}`)}
                            >
                                Ver Más &#128064;
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => addToCart(pizza)}
                            >
                                Añadir &#128722;
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
