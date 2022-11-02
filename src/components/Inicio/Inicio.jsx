import React, { useState, useEffect } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { baseDeDatos } from "../../servicios/fireBaseConfig";
import ItemList from "../Main/ItemList";
import "../Main/item.css";

function Inicio() {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const document1 = query(
        collection(baseDeDatos, "productos"),
        where("categoria", "==", "buzo"),
        limit(3)
      );

      const col1 = await getDocs(document1);
      const result1 = col1.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      const document2 = query(
        collection(baseDeDatos, "productos"),
        where("categoria", "==", "camisetas"),
        limit(3)
      );

      const col2 = await getDocs(document2);
      const result2 = col2.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      setItems([...result1, ...result2]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default Inicio;
