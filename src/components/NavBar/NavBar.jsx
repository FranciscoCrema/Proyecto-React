import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

import CartWidget from "../NavBar/CartWidget";
import MenuHamburguesa from "./MenuHamburguesa";

function NavBar({ logo, inicio, camisetas, buzos, contacto }) {
  const [click, setClick] = useState(false);

  const apretarBoton = () => {
    setClick(!click);
  };
  return (
    <>
      <header>
        <section id="inicio">
          <div className="contenido">
            <header>
              <div className="contenido-header">
                <Link to="/" id="logo">
                  {logo}
                </Link>
                <nav id="nav">
                  <div className={`links ${click ? "active" : ""} `}>
                    <ul>
                      <li>
                        <NavLink to={"/"}>{inicio}</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/category/camisetas"}>
                          {camisetas}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/category/buzo"}>{buzos}</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/contacto"}>{contacto}</NavLink>
                      </li>

                      <Link to={"/cart"} id="icono">
                        <CartWidget />
                      </Link>
                    </ul>
                  </div>
                </nav>

                <div className="hamburguesa">
                  <MenuHamburguesa click={click} apretarBoton={apretarBoton} />
                </div>
              </div>
            </header>
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
