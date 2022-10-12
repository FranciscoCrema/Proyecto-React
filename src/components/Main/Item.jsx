import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <div className="cards">
        <article className="card-1">
          <img src={prod.img} alt={prod.titulo} />

          <div className="card-info">
            <h3>{prod.titulo} </h3>
            <p>${prod.precio} </p>
            <Link to={`/item/${prod.id}`} className="card-btn">
              Comprar
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Item;
