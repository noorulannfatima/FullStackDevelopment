import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section8 = () => {
  // State to track which card is currently hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // sets the hovered card's index
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  // resets the hovered card state
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Function to dynamically apply card styles 
  const cardStyle = (index) => ({
    transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease', 
    border: '2px solid transparent', // Border color always transparent
    boxShadow: hoveredCard === index ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // Apply box-shadow on hover
    cursor: 'pointer', // Change cursor to pointer on hover
  });

  // Style for the "Learn more" link 
  const learnMoreStyle = {
    color: 'black', 
    textDecoration: 'none', 
    transition: 'text-decoration 0.3s ease', 
  };

  // hovered style for "Learn more" link  
  const learnMoreHoverStyle = {
    textDecoration: 'underline', // Underline the text on hover
    textDecorationColor: 'black', // Underline color
  };

  return (
    <Container id="section8" className="mt-1 pt-1 mb-5 pb-5">
      
      {/* Row to hold all the cards */}
      <Row className="justify-content-center">
        {[
          // Array of product data, each object represents a card
          { title: 'OPPO A3 5G', text: 'Military-Grade Shock Resistance, Liquid Resistance', img: '/images/card14.jpeg', id: 'find-n3' },
          { title: 'OPPO A3', text: 'Military-Grade Shock Resistance, Liquid Resistance', img: '/images/card15.jpeg', id: 'find-n3-flip' },
          { title: 'OPPO A3 Pro 5G', text: '360° Damage-Proof Armour Body, 120Hz Ultra Bright Display', img: '/images/card16.jpeg', id: 'reno12-pro-5g' },
          { title: 'OPPO A60', text: 'Military-Grade Shock Resistance, Splash Touch', img: '/images/card17.jpeg', id: 'reno12-5g' },
          { title: 'OPPO A79 5G', text: 'Glowing Feather Design, FHD+ Sunlight Display', img: '/images/card20.jpeg', id: 'reno12-pro-5g' },
          { title: 'OPPO A38', text: '33W SUPERVOOCTM, 50MP AI Cameraa', img: '/images/card21.jpeg', id: 'reno12-pro-5g' },
          { title: 'OPPO A79 5G', text: 'Glowing Feather Design, FHD+ Sunlight Display', img: '/images/card20.jpeg', id: 'reno12-pro-5g' },
          { title: 'OPPO A38', text: '33W SUPERVOOCTM, 50MP AI Cameraa', img: '/images/card21.jpeg', id: 'reno12-pro-5g' },
        ].map((product, index) => (
          <Col xs={12} sm={6} md={6} lg={3} className="mb-3" key={index} id={product.id}>
            {/* Each card is rendered here */}
            <Card
              className="h-100 border-0" 
              style={cardStyle(index)} // Apply dynamic style based on hover state
              onMouseEnter={() => handleMouseEnter(index)} // Set hover state on mouse enter
              onMouseLeave={handleMouseLeave} // Reset hover state on mouse leave
            >
              {/* Image inside a link, with padding and background color */}
              <a href={`#${product.id}`} className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
                <img
                  src={product.img} // Image source from product data
                  alt={product.title} // Alt text for accessibility
                  className="img-fluid" // Responsive image class
                />
              </a>
              <Card.Body>
                {/* Product title */}
                <Card.Title>{product.title}</Card.Title>
                {/* Product description */}
                <Card.Text>{product.text}</Card.Text>
                {/* "Learn more" link */}
                <a
                  href={`#${product.id}`}
                  style={hoveredCard === index ? { ...learnMoreStyle, ...learnMoreHoverStyle } : learnMoreStyle}
                >
                  Learn more
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Section8;
