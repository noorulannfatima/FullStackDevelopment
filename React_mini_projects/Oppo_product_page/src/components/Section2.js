import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Section2 = () => {
  // Styles for card and image hover effects
  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden', // Ensure that the zoomed image does not overflow the card
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)', // Move card up by 10px on hover
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', // Add shadow effect on hover
  };

  const imageStyle = {
    transition: 'transform 0.3s ease', // Smooth transition for the zoom effect
  };

  return (
    <Container id="section2" className="my-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <Card.Title className="display-6 fw-bold">OPPO Find N Series</Card.Title>
      </div>

      <Row>
        {/* First Card */}
        <Col md={6} className="p-1">
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
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img
                variant="top"
                src="images/image1.jpeg"
                alt="Card Image 1"
                style={imageStyle}
              />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Find N3</Card.Title>
              {/* Card Description */}
              <Card.Text>Ultra Thin, Ultra Light, Ultra Powerful</Card.Text>
              <a 
                href="#" 
                style={{ 
                  color: 'black', 
                  textDecoration: 'none' 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Learn more
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={6} className="p-1">
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
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img
                variant="top"
                src="images/image2.jpeg"
                alt="Card Image 2"
                style={imageStyle}
              />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              {/* Card Description */}
              <Card.Text>Snap for Style, Tap for More</Card.Text>
              <a 
                href="#" 
                style={{ 
                  color: 'black', 
                  textDecoration: 'none' 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
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

export default Section2;
