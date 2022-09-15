import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
      <div className="main">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <img src="favicon.ico" className="logo" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="rensponsive-navbar-nav" />
          <Navbar.Offcanvas placement="end" scroll="true">
            <Offcanvas.Header closeButton>
              <img
                className="icon"
                src="logo2.png"
                width="80"
                height="80"
                alt=""
              />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar.Collapse
                className="text-center"
                id="responsive-navbar-nav"
              >
                <Nav className="menu">
                  <Nav.Link href="#" className="oprojektu">
                    O PROJEKTU
                  </Nav.Link>
                  <Nav.Link href="#" className="panel">
                    PANEL
                  </Nav.Link>
                  <Nav.Link href="#" className="radionice">
                    RADIONICE
                  </Nav.Link>
                  <Nav.Link href="#" className="agenda">
                    AGENDA
                  </Nav.Link>
                  <Nav.Link href="#" className="faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link href="#" className="partneri">
                    PARTNERI
                  </Nav.Link>
                  <Nav.Link className="prijavise" href="#">
                    PRIJAVI SE
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
