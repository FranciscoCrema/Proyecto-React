import React, { useEffect, useState } from "react";
import "./item.css";
import ItemDetail from "./ItemDetail";
import { products } from "../productos/productos";

const ItemDetailContainer = ({ saludo }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === 1);
        setTimeout(() => {
          res(producto);
        }, 2000);  
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-list-container">
      <h3 className="text"> {saludo} </h3>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
