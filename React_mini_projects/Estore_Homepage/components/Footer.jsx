import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div id='contact'>
    <h2 className="text-center mb-1">Follow us on Instagram</h2>
    <p className="text-center mb-5">@estorepakistanofficial</p>
    <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row>
          {/* About Us Column */}
          <Col xs={12} md={3} className="mb-4">
            <h3>About Us</h3>
            <p>Welcome to eStore Pakistan: Your tech haven!</p>
            <p>Explore innovation with us. Join our tech community.</p>
          </Col>

          {/* Quick Links Column */}
          <Col xs={12} md={3} className="mb-4" >
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          {/* Policies Column */}
          <Col xs={12} md={3} className="mb-4">
            <h3>Policies</h3>
          </Col>

          {/* Contact Us Column */}
          <Col xs={12} md={3} className="mb-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +121 56556 565556</p>
            <p>Address: Your Address 123 street</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
