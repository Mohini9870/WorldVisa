import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsChevronCompactDown } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarComponent = () => {
  return (
    <>
      {/* Start Navbar Section */}

      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav shadow-sm p-3 mb-0  rounded"
        style={{ backgroundColor: "#edf4f7" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="./image/logo.png"
              alt="not found"
              width="240px"
              height="40px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ms-2">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/packages">Packages</Nav.Link>
              <NavDropdown title="Immigration" id="basic-nav-dropdown">
                <NavDropdown.Item href="/canada">Canada</NavDropdown.Item>
                <NavDropdown.Item href="/australia">Austraila</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Team</Nav.Link>
              <Nav.Link href="/offernow">Blog</Nav.Link>
              <Nav.Link href="/Contact">Contacts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="Login"
                className="me-2"
                style={{ color: "#3b3b3b" }}
              >
                Login
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signup" className="signup">
                Signup
              </Nav.Link>
              <Nav.Link
                href="Login"
                className="ms-2"
                style={{ color: "#3b3b3b" }}
              >
                EN
                <BsChevronCompactDown />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="rgba(248,236,50,255)"
        className="nav"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo.png" alt="not found" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav classNamems="ms-5" style={{ color: "#000" }}>
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link href="#deets">BOOK A PLAY AREA</Nav.Link>
              <Nav.Link href="#deets">PLAN YOUR EVENT</Nav.Link>
              <Nav.Link href="#deets">TESTIMONIALS</Nav.Link>
              <Nav.Link href="#deets">BLOG</Nav.Link>
              <Nav.Link href="#deets">NEWS</Nav.Link>
              <Nav.Link href="#deets">CLOOABRATION</Nav.Link>
              <Nav.Link href="#deets">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/*End Navbar Section */}
    </>
  );
};
export default NavbarComponent;
