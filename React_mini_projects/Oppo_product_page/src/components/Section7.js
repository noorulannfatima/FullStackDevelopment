import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Section7 = () => {
  return (
    <Container  className="my-5">
      {/* Section Heading */}
      <h3 id="section7" className="text-center mb-2">OPPO A Series</h3>

      <Row className="no-gutters">
        {/* First Card - Takes space of two cards */}
        <Col xs={12} lg={6} xl={6} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#">
              <Card.Img variant="top" src="/images/image6.jpeg" alt="OPPO Find N3" />
            </a>
            <Card.Body>
              <Card.Title>OPPO A3 Pro 5G</Card.Title>
              <Card.Text>
                360° Damage-Proof Armour Body, 120Hz Ultra Bright Display
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center">
              <img src="/images/image7.jpeg" alt="OPPO Find N3" className="img-fluid" />
            </a>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center">
              <img src="/images/image8.jpeg" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Section7;

