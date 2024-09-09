import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

function Marquee() {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f0f0f0'}}>
      <marquee className="marquee" behavior="scroll" direction="left" loop="infinite">
        <div>
          <ul className="d-flex">
            <li><h2>Online Support</h2></li>
            <li><h2>No Final Sale Items</h2></li>
            <li><h2>100% Payment Secure</h2></li>
            <li><h2>No restocking fee</h2></li>
            <li><h2>Returns accepted for 7 days</h2></li>
          </ul>
        </div>
      </marquee>
    </Container>
  );
}

export default Marquee;

