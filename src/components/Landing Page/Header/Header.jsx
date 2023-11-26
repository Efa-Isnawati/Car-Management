import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="ms-auto">
          <Container fluid>
            <Navbar.Brand href="#home" className='logo' onClick={() => navigate("/")}></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Binar Car Rental
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 menu">
                  <Nav.Link href="#our-services">Our Services</Nav.Link>
                  <Nav.Link href="#why-us">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                  <Button variant="success" className="header-button">Search</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

  );
}

export default Header;
