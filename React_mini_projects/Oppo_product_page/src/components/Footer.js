import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { BsFillThreadsFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: 'grey', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>Smartphones</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Find N3</li>
              <li>OPPO Find N3 Flip</li>
              <li>OPPO Find N2 Flip</li>
              <li>OPPO Reno12 Pro 5G</li>
              <li>OPPO Reno12 5G</li>
              <li>OPPO Reno12 F 5G</li>
              <li>OPPO A3 Pro 5G</li>
              <li>OPPO A3 5G</li>
              <li>OPPO A3</li>
              <li>OPPO A3x</li>
              <li>OPPO A60</li>
              <li>See All Smartphones</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>IoT Products</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Pad Neo</li>
              <li>OPPO Pad 2</li>
              <li>OPPO Enco Air4 Pro</li>
              <li>OPPO Enco X3i</li>
              <li>OPPO Enco Air3s</li>
              <li>OPPO Enco Buds2 Pro</li>
              <li>OPPO Enco Air3i</li>
              <li>OPPO Watch X</li>
              <li>OPPO Watch</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>Support</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>Contact Us</li>
              <li>Warranty Status</li>
              <li>Android Enterprise</li>
              <li>User Guide</li>
              <li>FAQ</li>
              <li>HeyTap</li>
              <li>Declaration of Conformity</li>
              <li>Game Space</li>
              <li>Security Response Center</li>
              <li>Quick Start Guide</li>
              <li>Online Safety Act</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>About OPPO</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>Our Story</li>
              <li>OPPO imagine IF</li>
              <li>OPPO 5G</li>
              <li>Newsroom</li>
              <li>Campaign</li>
              <li>AI Smartphone White Paper</li>
              <li>OPPO Sustainability</li>
              <li>Intellectual Property</li>
              <li>Supplier Portal</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>OPPO Community</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Community</li>
            </ul>
          </Col>
        </Row>

        {/* First hr with icons and h4 */}
        <hr style={{ borderColor: 'grey' }} />
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h4 style={{ color: 'white' }}>Get Support From OPPO</h4>
          </Col>
          <Col xs={12} md={6} className="text-md-right">
            <FaFacebook size={30} style={{ paddingRight: '10px' }} />
            <AiFillTwitterCircle size={35} style={{ paddingRight: '10px' }} />
            <FaYoutube size={30} style={{ paddingRight: '10px' }} />
            <FaSquareInstagram size={30} style={{ paddingRight: '10px' }} />
            <BsFillThreadsFill size={30} style={{ paddingRight: '10px' }} />
          </Col>
        </Row>

        {/* Second hr */}
        <hr style={{ borderColor: 'grey' }} />

        {/* Last 5 li elements */}
        <Row>
          <Col>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', gap: '10px', color: 'grey' }}>
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>Legal & Compliance</li>
              <li>Copyright © 2004-2024 OPPO.</li>
              <li>All rights reserved.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
