import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, borrarTodo, borrarUno } = useContext(CartContext);

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
            <h5>Subtotal: ${prod.precio * prod.cantidad}</h5>
          </div>

          <button onClick={() => borrarUno(prod.id)}>Borarr</button>
        </div>
      ))}
      <div className="precio-total">
        <h2>Total: $0 </h2>
        <button onClick={borrarTodo}>Borrar todo el carrito</button>
      </div>
    </div>
  );
};

export default Cart;
