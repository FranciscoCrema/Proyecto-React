import React, { useEffect, useState } from "react";
import "./item.css";
import ItemList from "./ItemList";
import { products } from "../productos/productos";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        }, 2000);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-list-container">
      <h3 className="text"> {saludo} </h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
