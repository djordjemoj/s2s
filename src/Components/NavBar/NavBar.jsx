import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
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
            <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
              <Nav className="menu">
                <Nav.Link href="#" className="oprojektu" on>
                  <span>O PROJEKTU</span>
                </Nav.Link>
                <Nav.Link href="#" className="panel">
                  <span>PANEL</span>
                </Nav.Link>
                <Nav.Link href="#" className="radionice">
                  <span>RADIONICE</span>
                </Nav.Link>
                <Nav.Link href="#" className="agenda">
                  <span>AGENDA</span>
                </Nav.Link>
                <Nav.Link href="#" className="faq">
                  <span>FAQ</span>
                </Nav.Link>
                <Nav.Link href="#" className="partneri">
                  <span>PARTNERI</span>
                </Nav.Link>
                <Nav.Link className="prijavise" href="#">
                  <span> PRIJAVI SE</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default NavBar;
