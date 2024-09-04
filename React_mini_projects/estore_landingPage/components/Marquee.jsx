import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";  

function Marquee() {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f0f0f0', padding: '40px 0' }}>
      <marquee className="marquee" behavior="scroll" direction="left">
        
        <h4>Online Support</h4>
        <h4>No Final Sale Items</h4>
        <h4>100% Payment Secure</h4>
        
      </marquee>
    </Container>
  );
}

export default Marquee;
