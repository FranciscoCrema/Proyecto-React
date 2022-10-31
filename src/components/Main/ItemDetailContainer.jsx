import React, { useEffect, useState } from "react";
import "./item.css";
import ItemDetail from "./ItemDetail";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [recarga, setRecarga] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res) => {
        const producto = products.find((prod) => prod.id === Number(id));
        setTimeout(() => {
          res(producto);
        }, 500);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setRecarga(false);
      });
  });

  if (recarga) {
    return (
      <div className="item-contenedor">
        <h3>Cargando</h3>
        <div className="item-recarga">
          <PulseLoader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
