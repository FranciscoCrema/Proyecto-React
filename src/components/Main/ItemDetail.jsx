import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container-detail">
      <img src={item.img} alt={item.titulo} />
      <div>
        <h2>{item.titulo} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex.
          Culpa impedit maxime dolorum aliquam et illo labore esto.
        </p>
        <ItemCount stock={20} inicio={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
