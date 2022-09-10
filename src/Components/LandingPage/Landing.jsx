import React from "react";
import "../LandingPage/Landing.css";

import {
  NavDropdown,
  Form,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//rafce

const landing = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="rensponsive-navbar-nav" />
        <Navbar.Offcanvas placement="end" scroll="true">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">O PROJEKTU</Nav.Link>
                <Nav.Link href="#">PANEL</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">RADIONICE</Nav.Link>
                <Nav.Link href="#">AGENDA</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
                <Nav.Link href="#">PARTNERI</Nav.Link>
                <Nav.Link className="drugaBoja" href="#">
                  PRIJAVI SE
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <div className="container first-page text-center">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="text">
              <p>
                WHERE <span id="learning">LEARNING</span> BEGINS!
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img className="responsive" src="logo3.png" alt="" />
        </div>
        <div className="dugme-sve">
          <div className="dugme">
            <button type="button" class="dugmeZaPrijavu">
              PRIJAVI SE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
