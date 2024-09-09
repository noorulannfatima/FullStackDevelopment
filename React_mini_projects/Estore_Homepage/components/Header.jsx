import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUser, FaCartShopping } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'; // Create and import a CSS file for custom styles

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control Offcanvas visibility
  const [offcanvasContent, setOffcanvasContent] = useState(''); // State to control which content to show

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = (content) => {
    setOffcanvasContent(content); // Set which content to display
    setShowOffcanvas(true);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-white sticky-top">
        <Container>
          <Navbar.Brand href="#home"><img src="/images/logo.avif" alt="Logo" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto"> {/* Center the navigation items */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Product</Nav.Link>
              <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#section1">Google Pixel</NavDropdown.Item>
                <NavDropdown.Item href="#section2">Apple</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="icon-nav">
              {/* OnClick handlers to show Offcanvas with respective content */}
              <Nav.Link onClick={() => handleShow('user')}><FaRegUser size={24} /></Nav.Link> 
              <Nav.Link onClick={() => handleShow('cart')}><FaCartShopping size={24} /></Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Component */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {offcanvasContent === 'user' ? 'User Profile' : 'Shopping Cart'}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {offcanvasContent === 'user' && (
            <div>
              <p>User Profile Information goes here...</p>
            </div>
          )}
          {offcanvasContent === 'cart' && (
            <div>
              <p>Shopping Cart Details go here...</p>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
