import React, { useState } from "react";
import "./item.css";

const ItemCount = ({ stock, inicio, prueba }) => {
  const [count, setCount] = useState(1);

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
    <div className="contenedor">
      <div className="container-btn">
        <div className="menos">
          <button onClick={restar}>-</button>
        </div>
        <p>{count}</p>
        <div className="mas">
          <button onClick={sumar}>+</button>
        </div>
      </div>
      <button
        onClick={() => {
          prueba(count);
        }}
        className="add-btn">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
