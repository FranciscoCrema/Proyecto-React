import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="logo">
            Lauvi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" id="color">
                Inicio
              </Nav.Link>
              <Nav.Link href="#pricing" id="color">
                Productos
              </Nav.Link>
              <Nav.Link href="#pricing" id="color">
                Contacto
              </Nav.Link>
              <Nav.Link href="#pricing" id="color">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link id="icono">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
