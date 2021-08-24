import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import React from "react";
// import Login from "./Login";
// import Register from "./Register";

function NavComponent() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  return (
    <div style={{ paddingBottom: "10px" }} className="">
      <Navbar bg="black" variant="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="#home">Deco-Hack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>

              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="/comedor">Comedor</NavDropdown.Item>
                <NavDropdown.Item href="/living">Living</NavDropdown.Item>
                <NavDropdown.Item href="/dormitorio">
                  Dormitorio
                </NavDropdown.Item>
                <NavDropdown.Item href="/jardin">Jardín</NavDropdown.Item>
                <NavDropdown.Item href="/complementos">
                  Complementos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="aboutus">Nosotros</Nav.Link>
              <Nav.Link href="aboutus">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* <Nav className="d-flex flex-row justify-content-end">
						<Nav.Link href="/carrito" className="me-3">
							<i className="text-secondary  fas fa-shopping-cart"></i>
						</Nav.Link>
						<Nav.Link href="/admin" className="block">
							Admin
						</Nav.Link>
						<Nav href="/login" className="block">
              {login ? (
                <Login
                  placement={"end"}
                  setLogin={setLogin}
                  startShow={register}
                />
              ) : (
                <Register
                  placement={"end"}
                  setLogin={setLogin}
                  setRegister={setRegister}
                />
              )}
						</Nav>
					</Nav> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
