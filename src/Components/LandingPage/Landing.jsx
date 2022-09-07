import React from "react";
import "../LandingPage/Landing.css";
import { Button, Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//rafce

function obavestenje() {
  alert("Hello! I am an alert box!!");
}

const landing = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">O PROJEKTU</Nav.Link>
          <Nav.Link href="#pricing">PANEL</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default landing;
