import React, { useEffect, useState } from "react";
import "./item.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDeDatos } from "../../servicios/fireBaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [recarga, setRecarga] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    const coleccionDeProd = collection(baseDeDatos, "productos");
    
    const ubicacion = categoryName
      ? query(coleccionDeProd, where("categoria", "==", categoryName))
      : coleccionDeProd;

    getDocs(ubicacion)
      .then((res) => {
        const productos = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(productos);
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
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
