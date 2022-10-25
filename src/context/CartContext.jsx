import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    const producto = { ...item, cantidad };

    if (dentroDelCarro(producto.id)) {
    } else {
      setCart([...cart, producto]);
    }
  };

  const dentroDelCarro = (id) => cart.some((prod) => prod.id === id);

  const borrarTodo = () => setCart([]);

  //console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, borrarTodo }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
