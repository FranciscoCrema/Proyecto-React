import React from "react";

const Item = ({ prod }) => {
  return (
    <>
      <div className="cards">
        <article className="card-1">
          <img src={prod.img} alt="Manzana" />

          <div className="card-info">
            <h3>{prod.titulo} </h3>
            <p>${prod.precio} </p>
            <button className="card-btn">Comprar</button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Item;
