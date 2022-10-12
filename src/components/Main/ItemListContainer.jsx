import React, { useEffect, useState } from "react";
import "./item.css";
import ItemList from "./ItemList";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
          (prod) => prod.category === "categoryName"
        );
        setTimeout(() => {
          res(categoryName ? prodFiltrados : products);
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
  }, [categoryName]);

  return (
    <>
    <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
