import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    const producto = { ...item, cantidad };

    if (dentroDelCarro(producto.id)) {
      sumarCantidad(producto);
    } else {
      setCart([...cart, producto]);
    }
  };

  const sumarCantidad = (prodAgregado) => {
    const carritoActualizado = cart.map((prodDelCart) => {
      if (prodDelCart.id === prodAgregado.id) {
        const prodActualizado = {
          ...prodDelCart,
          cantidad: prodDelCart.cantidad + prodAgregado.cantidad,
        };
        return prodActualizado;
      } else {
        return prodDelCart;
      }
    });

    setCart(carritoActualizado);
  };

  const dentroDelCarro = (id) => cart.some((prod) => prod.id === id);

  const borrarTodo = () => setCart([]);

  const borrarUno = (id) => {
    const prodFiltrado = cart.filter((prod) => prod.id !== id)
    setCart(prodFiltrado)
  };

  //console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, borrarTodo, borrarUno }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
