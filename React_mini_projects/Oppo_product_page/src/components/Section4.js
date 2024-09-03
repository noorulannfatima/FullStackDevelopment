import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Section4 = () => {
  return (
    <Container  id="section4" className="my-5">
      {/* Section Heading */}
      <h2 className="text-center mb-4">OPPO Find X Series</h2>

      <Row>
        {/* First Card - Takes space of two cards */}
        <Col xs={12} lg={6} xl={6} className="mb-4">
          <Card 
            className="h-100 border-0" 
            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a href="#">
              <Card.Img variant="top" src="/images/image3.jpeg" alt="OPPO Find N3" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X3 Pro</Card.Title>
              <Card.Text>
                Awaken Colour
              </Card.Text>
              <a 
                href="#" 
                style={{ color: 'black', textDecoration: 'none', transition: 'text-decoration 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card 
            className="h-100 border-0"
            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/images/imag1.jpeg" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X3 Pro</Card.Title>
              <Card.Text>
                Enrich Life with 1 Billion+ Colours
              </Card.Text>
              <a 
                href="#" 
                style={{ color: 'black', textDecoration: 'none', transition: 'text-decoration 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card 
            className="h-100 border-0"
            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/images/imag2.jpeg" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X2 Pro</Card.Title>
              <Card.Text>
                120Hz QHD+ Ultra Vision Screen
              </Card.Text>
              <a 
                href="#" 
                style={{ color: 'black', textDecoration: 'none', transition: 'text-decoration 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
