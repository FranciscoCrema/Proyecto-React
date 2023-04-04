import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, borrarTodo, borrarUno, sumaTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="texto">
        <h3>No tiene ningun producto agregado</h3>
      </div>
    );
  }

  return (
    <div className="contenedor-todo">
      {cart.map((prod) => (
        <div className="descripcion-prod" key={prod.id}>
          <img src={prod.img} alt={prod.titulo} width="80px" />

          <div className="descripcion-final">
            <h2>{prod.titulo}</h2>
            <h3>$ {prod.precio}</h3>
            <h4>Cantidad: {prod.cantidad}</h4>
            <h3>Subtotal: ${prod.precio * prod.cantidad}</h3>
          </div>

          <button onClick={() => borrarUno(prod.id)}>Borrar</button>
        </div>
      ))}
      <div className="precio-total">
        <h2>Total : ${sumaTotal()} </h2>
        <button onClick={borrarTodo}>Borrar todo el carrito</button>
        <Link to="/chequeo" className="btn-chequeo">
          Chequeo
        </Link>
      </div>
    </div>
  );
};

export default Cart;
