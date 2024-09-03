import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Section3 = () => {
  // card hover effect
  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  };

  // image style without hover effect
  const imageStyle = {
    transition: 'transform 0.3s ease',
  };

  return (
    <Container className="my-5">
      <Row>
        {/* First Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card
            className="h-100 border-0"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a
              href="#"
              className="d-block text-center"
              style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}
            >
              <img
                src="/images/card5.jpeg"
                alt="OPPO Find N3"
                className="img-fluid"
                style={imageStyle}
              />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3</Card.Title>
              <Card.Text>
                Slim and Lightweight, Vitality Imaging Triple Camera System
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card
            className="h-100 border-0"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a
              href="#"
              className="d-block text-center"
              style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}
            >
              <img
                src="/images/card2.jpeg"
                alt="OPPO Find N3 Flip"
                className="img-fluid"
                style={imageStyle}
              />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              <Card.Text>
                Intuitive Cover Screen, Hasselblad Camera for Mobile
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card
            className="h-100 border-0"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a
              href="#"
              className="d-block text-center"
              style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}
            >
              <img
                src="/images/card4.jpeg"
                alt="OPPO Find N2 Flip"
                className="img-fluid"
                style={imageStyle}
              />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N2 Flip</Card.Title>
              <Card.Text>
                3.26" Cover Screen, New Generation Flexion Hinge
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Empty Space (for the 4th card space) */}
        <Col xs={12} sm={6} md={3} className="mb-4"></Col>
      </Row>
    </Container>
  );
};

export default Section3;
