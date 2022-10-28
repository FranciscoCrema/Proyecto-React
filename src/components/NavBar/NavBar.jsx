import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

import CartWidget from "../NavBar/CartWidget";

function NavBar({ logo, inicio, camisetas, buzos, contacto }) {
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
                  <ul id="links">
                    <li>
                      <NavLink to={"/"}>{inicio}</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/category/camisetas"}>{camisetas}</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/category/buzo"}>{buzos}</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contacto"}>{contacto}</NavLink>
                    </li>
                  </ul>
                </nav>
                <Link to={"/cart"} id="icono">
                  <CartWidget />
                </Link>
              </div>
            </header>
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
