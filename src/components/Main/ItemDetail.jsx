import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);

  const { addToCart } = useContext(CartContext);

  const prueba = (numero) => {
    setUnidades(numero);
    addToCart(item, numero);
  };

  return (
    <div className="container-detail">
      <img src={item.img} alt={item.titulo} />
      <div>
        <h2>{item.titulo} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex.
          Culpa impedit maxime dolorum aliquam et illo labore esto.
        </p>
        {unidades === 0 ? (
          <ItemCount prueba={prueba} stock={20} inicio={1} />
        ) : (
          <Link to={"/cart"}>Ir al carrito</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
