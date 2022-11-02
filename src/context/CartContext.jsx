import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    const producto = { ...item, cantidad };

    if (dentroDelCarro(producto.id)) {
      sumaCantidadTodo(producto);
    } else {
      setCart([...cart, producto]);
    }
  };

  const sumaTotal = () => {
    return cart.reduce(
      (acc, item) => (acc = acc + item.cantidad * item.precio),
      0
    );
  };

  const sumaCantidadTodo = (prodAgregado) => {
    const carritoActualizado = cart.map((productoDelCart) => {
      if (productoDelCart.id === prodAgregado.id) {
        const productosActualizados = {
          ...productoDelCart,
          cantidad: productoDelCart.cantidad + prodAgregado.cantidad,
        };
        return productosActualizados;
      } else {
        return productoDelCart;
      }
    });

    setCart(carritoActualizado);
  };

  const dentroDelCarro = (id) => cart.some((prod) => prod.id === id);

  const borrarTodo = () => setCart([]);

  const borrarUno = (id) => {
    const prodFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrado);
  };

  const unidadesEnCarro = () => {
    let acc = 0;
    const copia = [...cart];
    copia.forEach((prod) => {
      acc = acc + prod.cantidad;
    });
    return acc;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        borrarTodo,
        borrarUno,
        sumaTotal,
        unidadesEnCarro,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
