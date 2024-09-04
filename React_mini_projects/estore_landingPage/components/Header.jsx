import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUser, FaCartShopping } from "react-icons/fa6";
import './Header.css'; // Create and import a CSS file for custom styles

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white sticky-top">
      <Container>
        <Navbar.Brand href="#home"><img src="/images/logo.avif" alt="Logo" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"> {/* Center the navigation items */}
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.2">Google Pixel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Apple</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="icon-nav">
            <Nav.Link href="#deets"><FaRegUser size={24} /></Nav.Link> {/* Increased icon size */}
            <Nav.Link eventKey={2} href="#memes"><FaCartShopping size={24} /></Nav.Link> {/* Increased icon size */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
