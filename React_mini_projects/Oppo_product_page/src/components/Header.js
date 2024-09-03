import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Header = () => {

  const items = [
    <Nav.Item className="mx-1"><Nav.Link href="#section1" className="text-dark">Latest Products</Nav.Link></Nav.Item>,
    <Nav.Item className="mx-1"><Nav.Link href="#section2" className="text-dark">Find N Series</Nav.Link></Nav.Item>,
    <Nav.Item className="mx-1"><Nav.Link href="#section4" className="text-dark">Find X Series</Nav.Link></Nav.Item>,
    <Nav.Item className="mx-1"><Nav.Link href="#section5" className="text-dark">Reno Series</Nav.Link></Nav.Item>,
    <Nav.Item className="mx-1"><Nav.Link href="#section7" className="text-dark">A Series</Nav.Link></Nav.Item>,
  ];

  return (
    <div>
      {/* First Navbar */}
      <Navbar 
        bg="white" 
        variant="light" 
        fixed="top" 
        expand="lg" 
        className="px-1" 
        style={{ paddingLeft: '70px', font:"bold", borderBottom: '2px solid grey' }} // Added bottom border
      >
        <img src="/images/Capture.JPG" alt="" />
        <Navbar.Toggle aria-controls="navbar1" />
        <Navbar.Collapse id="navbar1">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-secondary">Smartphones</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Tablets</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Audio</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Wearables</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Routers</Nav.Link>
            <Nav.Link href="#" className="text-secondary">About</Nav.Link>
            <Nav.Link href="#" className="text-secondary">ColorOS</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#" className="text-secondary">Community</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Support</Nav.Link>
            <Form inline className="ml-3">
              <FormControl
                type="text"
                placeholder="Search OPPO.com"
                className="rounded-pill mr-sm-2"
              />
            </Form>
            <Nav.Link href="#">
              <FaRegUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* Second Navbar with Alice Carousel */}
      <Navbar 
        bg="white" 
        variant="light" 
        fixed="top" 
        className="justify-content-center" 
        style={{ top: '56px', paddingLeft: '20%', paddingRight: '20%', borderBottom: '2px solid grey' }} // Added bottom border
      >
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 3 },    
            568: { items: 5 },   
            1024: { items: 5 },  
            1200: { items: 6}, 
          }}
          disableDotsControls
          disableButtonsControls
          infinite
        />
      </Navbar>
    </div>
  );
};

export default Header;
