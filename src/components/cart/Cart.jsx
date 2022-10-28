import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, borrarTodo, borrarUno } = useContext(CartContext);

  return (
    <div>
      {cart.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <img src={prod.img} alt={prod.titulo} width="80px" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>{prod.titulo}</h2>
            <h3>$ {prod.precio}</h3>
            <h4>Cantidad: {prod.cantidad}</h4>
            <h5>Subtotal: ${prod.precio * prod.cantidad}</h5>
          </div>

          <button onClick={() => borrarUno(prod.id)}>Borarr</button>
        </div>
      ))}
      <h2>Total: $0</h2>
      <button onClick={borrarTodo}>Borrar todo el carrito</button>
    </div>
  );
};

export default Cart;
