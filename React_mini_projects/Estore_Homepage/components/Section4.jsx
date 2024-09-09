import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Section4.css'; // Importing custom CSS

const Section4 = () => {
  return (
    <div style={{ padding: '50px 0'}} id='section2'>
    <h1 className="text-center mb-4 ">Our Latest Blog</h1>
      <Container>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col xs={10} sm={6} md={4} className="mb-4">
            <Card className="custom-card text-center">
              <div className="overflow-hidden">
                <Card.Img 
                  variant="top" 
                  src="public/images/product2.webp" 
                  alt="Card 1" 
                  className="custom-card-img"
                />
              </div>
              <Card.Body>
                <Card.Text>Calling All Tech Mavens: The Google Pixel 6 Pro is Here!.</Card.Text>
                <a href="#readmore1" className="read-more-link">Read More</a>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={10} sm={6} md={4} className="mb-4">
            <Card className="custom-card text-center">
              <div className="overflow-hidden">
                <Card.Img 
                  variant="top" 
                  src="/images/product3.webp" 
                  alt="Card 2" 
                  className="custom-card-img"
                />
              </div>
              <Card.Body>
                <Card.Text>Experience Innovation: Grab Your Google Pixel 8 Pro at a eStorepakistan.</Card.Text>
                <a href="#readmore2" className="read-more-link">Read More</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Section4;
