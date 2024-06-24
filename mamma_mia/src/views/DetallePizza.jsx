import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PizzasContext } from "../context/PizzaProvider";

function DetallePizza(){
    const [pizzaDetail, setPizzaDetail] = useState({});
    const { pizzas, addToCart } = useContext(PizzasContext);
    const { id } = useParams();
  
    const obtenerDatos = () => {
      const datosPizza = pizzas.find((pizza) => pizza.id === id);
  
      setPizzaDetail(datosPizza || {});
    };
  
    useEffect(() => {
      obtenerDatos();
    }, [pizzas]);
    return(
        <>
              
      <div>
        <div>
          <div>
            <div>
              <img
                src={pizzaDetail.img}
                alt={pizzaDetail.name}
              />
            </div>
            <div>
              <div className="card-body">
                <h5 className="card-title">
                  {pizzaDetail.name}
                </h5>
                <p className="card-text">{pizzaDetail.desc}</p>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => (
                    <li key={i}>&#127829; {ingredient}</li>
                  ))}
                </ul>
                <div>
                  <h4>Precio: ${pizzaDetail.price}</h4>
                  <button
                    onClick={() => addToCart(pizzaDetail)}
                  >
                    Añadir &#128722;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default DetallePizza;