import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // Import the CSS file for custom styling

const Hero = () => {
  return (
    <div className="hero-section" id='home'>
      <Container>
        <Row className="align-items-center">
          {/* Image on the left */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <img 
              src="/images/home cover.webp" 
              alt="Hero" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
          {/* Text and button on the right */}
          <Col xs={12} md={6} className="text-center text-md-left animate-content">
            <h1 className="animated-text">Google Pixel Series</h1>
            <p className="animated-text">Elevate your everyday with photographic aesthetics.</p>
            <Button variant="primary" className="animated-button" style={{backgroundColor:'#003366', borderColor: '#003366', padding: '10px 20px',borderRadius: '5px',}}>Shop Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
