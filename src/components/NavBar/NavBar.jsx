import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

import CartWidget from "../NavBar/CartWidget";

function NavBar({logo, inicio, productos, contacto}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="logo">
            {logo}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" id="color">
                {inicio}
              </Nav.Link>
              <Nav.Link href="#pricing" id="color">
                {productos}
              </Nav.Link>
              <Nav.Link href="#pricing" id="color">
                {contacto}
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
