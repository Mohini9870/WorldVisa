import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "./Navebar.css";
const NavebarMain = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="menu-banner-up">
        <Container fluid>
          <Navbar.Brand href="/" className="menu-banner-up-img">
            <img
              src="./image/logo.png"
              alt="not found"
              width="240px"
              height="40px"
              className="ms-5 img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto justify-content-around ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/packages">Package</Nav.Link>
              <NavDropdown title="Immigration" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Canada</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Austraila
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Team</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Blog
              </Nav.Link>
              <Nav.Link href="#pricing" className="me-5">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavebarMain;
