import React, { useEffect, useState } from "react";
import "./item.css";
import ItemList from "./ItemList";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [recarga, setRecarga] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res) => {
        const prodFiltrados = products.filter(
          (prod) => prod.categoria === categoryName
        );
        setTimeout(() => {
          res(categoryName ? prodFiltrados : products);
        }, 500);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setRecarga(false);
      });

    return () => setRecarga(true);
  }, [categoryName]);

  if (recarga) {
    return <SyncLoader />;
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
