import React, { useState } from "react";
import "./item.css";

// Aca esta la funcion para agregar mas cantidad de un producto o no

const ItemCount = ({ stock, inicio }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > inicio) {
      setCount(count - 1);
    }
  };
 
  return (
    <div className="container">
      <div className="container-btn">
        <div className="menos">
          <button onClick={restar}>-</button>
        </div>
        <p>{count}</p>
        <div className="mas">
          <button onClick={sumar}>+</button>
        </div>
      </div>
      <button className="add-btn">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
