import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";

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
                <HashLink href="#oS2S" className=" nav-link oprojektu" on>
                  <span>O PROJEKTU</span>
                </HashLink>
                <HashLink href="#" className=" nav-link panel">
                  <span>PANEL</span>
                </HashLink>
                <HashLink href="#" className=" nav-link radionice">
                  <span>RADIONICE</span>
                </HashLink>
                <HashLink to="#agenda" className=" nav-link agenda ">
                  <span>AGENDA</span>
                </HashLink>
                <HashLink href="#faq" className=" nav-link faq">
                  <span>FAQ</span>
                </HashLink>
                <HashLink href="#" className=" nav-link partneri">
                  <span>PARTNERI</span>
                </HashLink>
                <HashLink className=" nav-link prijavise" href="#/prijava">
                  <span> PRIJAVI SE</span>
                </HashLink>
                {/* <a href="#agenda">PROBA</a> */}
              </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default NavBar;
