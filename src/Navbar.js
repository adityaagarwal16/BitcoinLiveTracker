import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export const NavbarFunc = () => {
  return (
      <>
        <Navbar data-testid={"navbar"}  className={"navbar-expand-lg"} variant={"dark"}>
          <Container>
            <Navbar.Brand href="/">LearnApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="float-right">
                <Nav.Link href="https://www.linkedin.com/in/adityaagarwal15/">LinkedIn</Nav.Link>
              <Nav.Link href="">Aditya Agarwal</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
};
