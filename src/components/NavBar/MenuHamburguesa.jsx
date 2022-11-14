import React from "react";
import "./navbar.css";

function MenuHamburguesa(props) {
  return (
    <>
      <div
        onClick={props.apretarBoton}
        className={`icon nav-icon-5 ${props.click ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default MenuHamburguesa;
