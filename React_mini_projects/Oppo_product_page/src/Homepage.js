import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// react - bootstrap
import { Container, Row, Col, Image, Nav, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Homepage.css'; // Assuming you are using a CSS file for styles

const Homepage = () => {
  const items = [
    { type: 'image', src: '/img/slider1.jpeg' },
    { type: 'image', src: '/img/slider2.jpeg' },
    { type: 'video', src: '/video/slider3video.mp4 ' },
  ];

  const carouselItems = items.map((item, index) => {
    if (item.type === 'image') {
      return (
        <div className="slider-item" key={index}>
          <img src={item.src} alt={`slide-${index}`} className="slider-media" />
        </div>
      );
    } else if (item.type === 'video') {
      return (
        <div className="slider-item" key={index}>
          <video src={item.src} className="slider-media" controls autoPlay muted loop />
           {/* <div key={i} className='' style={{height:'460px',width:'500px'}}>
  <video autoPlay muted loop style={{ height: '100%' }}>
  </video> </div>*/}

        </div>
        
      );
    }
    return null;
  });

  return (
    <div>
     {/* 1st NavBar */}
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid bg-light" style={{ marginTop: '-30px', height: '60px' }}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginTop: '8px', paddingTop: '5px', marginLeft: '3%' }}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#" style={{ fontSize: '12px' }}>WELCOME TO J.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#" style={{ fontSize: '12px' }}>
                  SIGN IN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#" style={{ fontSize: '12px' }}>TRACKING INFO.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#" style={{ fontSize: '12px' }}>CORPORATE INQUIRY</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '12px' }}>
                  PAK
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="d-flex" style={{ listStyleType: 'none', paddingTop: '20px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#" style={{ paddingTop: '25%' }}><FaShoppingBag />.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  <button className="btn" type="submit" style={{ outline: 'none' }}><IoSearch />Search</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2nd NavBar */}
      <nav className="navbar navbar-expand-sm sticky-top bg-white navbar-second">
        <div className="container-fluid">
          <Link className="navbar-brand mx-auto" to="#">
            <img src="/img/logo.jpeg" alt="Logo" style={{ width: '40px' }} className="rounded-pill" />
          </Link>
        </div>
      </nav>

      {/* 3rd NavBar */}
      <nav className="navbar navbar-expand-lg sticky-top bg-white navbar-third">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarThirdContent" aria-controls="navbarThirdContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse px-5" id="navbarThirdContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active px-3" aria-current="page" to="#" style={{ fontFamily: 'sans-serif' }}>NEW ARRIVALS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" to="#" style={{ fontSize: '18px', color: '#BCAC0C', fontFamily: 'serif' }}>CAST&CREW</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" to="#" style={{ fontFamily: 'sans-serif' }}>WOMEN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" aria-disabled="true" style={{ fontFamily: 'sans-serif' }}>MEN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" aria-current="page" to="#" style={{ fontFamily: 'sans-serif' }}>BOYS & GIRLS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" to="#" style={{ fontFamily: 'sans-serif' }}>FRAGRANCE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" to="#" style={{ fontFamily: 'sans-serif' }}>MAKEUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active px-3" aria-disabled="true" style={{ fontFamily: 'sans-serif' }}>CATALOGUE</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div className="slider-container pt-5">
      <AliceCarousel
        items={carouselItems}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={1000}
      />
    </div>

      {/* Card 1 */}
      <div class="container mt-4 pt-4" style={{marginLeft:'20%'}}>
    <div class="row equal-height pt-5 ">
     
      <div class="col-md-6 col-equal-height">
        <img src="img/image11.jpeg" class="img-fluid img-full-height" alt="Single "/>
        <div class="text-container">
          <h5>Unstitched</h5>
          <h5 style={{fontsize: '19px'}}>Shop Now</h5>
        </div>
      </div>   
      <div class="col-md-6 col-equal-height">
        <div class="stacked-images">
          <div className='Card'>
            <img src="img/image12.jpeg" alt="Top "/>
            <div class="card-body">
    <h5 class="card-title">Kurti</h5>
    <h5>Shop Now</h5>
  </div>
          </div>
          <div className='Card'>
            <img src="img/image13.jpeg" alt="Top "/>
            <div class="card-body">
    <h5 class="card-title">Stiched</h5>
    <h5>Shop Now</h5>
  </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Card 2 */}
    <div className='container1' style={{marginLeft:'15%',marginTop:'5%'}}>
       <div className="box "  >
       <div className='Card' >
            <img src="img/image21.jpeg" alt="Top " style={{width:'80%'}}/>
            <div class="card-body"  X>
    <h5 class="card-title">Kurti</h5>
    <h5>Shop Now</h5>
  </div>
          </div>
       </div>
       <div className="box span-box" style={{marginRight:'25%'}}>
       <div className='Card' >
            <img src="img/image22.jpeg" class="img-fluid  " alt="Single" style={{width:'100%',marginRight:'7%'}}/>
            <div class="card-body ">
    <h5 class="card-title">Stiched</h5>
    <h5>Shop Now</h5>
  </div>
          </div>
         </div>
         <div className="box  " style={{width:'100%'}}>
         <div className='Card'style={{width:'100%'}} >
            <img src="img/image23.jpeg" alt="Top " style={{width:'80%'}}/>
            <div class="card-body">
    <h5 class="card-title">Kurti</h5>
    <h5>Shop Now</h5>
  </div>
          </div>
          </div>
    </div>
       
      {/* Tag 1 */}
      <Container className="d-flex  align-items-center">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <div 
            className="text-center" 
            style={{ padding: '7%', backgroundColor: '#FFFFE0' }}
          >
            <Image 
              src="/img/tag1.jpeg" 
              alt="Centered Image" 
              fluid 
              className="img-responsive" 
            />
          </div>
        </Col>
      </Row>
    </Container>
    {/* Tag 2 */}
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <div 
            className="text-center" 
            style={{ padding: '7%', backgroundColor: '#FFFFE0' }}
          >
            <Image 
              src="/img/tag2.jpeg" 
              alt="Centered Image" 
              fluid 
              className="img-responsive" 
            />
          </div>
        </Col>
      </Row>
    </Container>
    {/* card 6  */}
  <div className='container pt-5 mt-5'>
  <div className='row'>
    <div className='col-md-4 ' >
    <img src="/img/image12.jpeg" class="img-fluid img-full-height" alt="Single " style={{width:'100%',}} />
    </div>
    <div className='col-md-8 '>
       <div className='row'>
         <div className='col-md-4'>
         <img src="/img/image32.jpeg" class="img-fluid img-full-height" alt="Single " style={{width:'100%'}}/>
         </div>
         <div className='col-md-4'>
         <img src="/img/image33.jpeg" class="img-fluid img-full-height" alt="Single " style={{width:'100%'}}/>
          </div>
          <div className='col-md-4'>
          <img src="/img/image34.jpeg" class="img-fluid img-full-height" alt="Single " style={{width:'100%'}}/>
           </div>
       </div>
       <div className='row text-center pt-5 pb-5 mb-5'>
             <h5 >NEW COLLECTION</h5>
             <h6>DRESS BRIGHT AND LIVELY</h6>
             <h5>WITH J. YOUNGSTERS COLLECTIONS</h5>
       </div>
    </div>
  </div>
  </div>
    {/* bottom */}
    <div className="bg-black text-white py-5 px-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h3>BE THE FIRST</h3>
            <p className="mb-4">
            New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
            </p>
            <Form className="d-flex justify-content-center">
              <Form.Group className="mb-2 mr-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  className="mr-2"
                />
              </Form.Group>
              <Button
                type="submit"
                className="mb-2"
                variant="outline-light"
                style={{ backgroundColor: 'black' }}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    {/* Footer */}
    <footer className="bg-white py-4">
      <Container>
        <Row>
          {/* First Column */}
          <Col xs={12} md={3}>
            <h5>Need Help?</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
                +92 21 111 112 111 (9am - 10pm , Mon - Sat)
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
                eshop@junaidjamshed.com
              </Nav.Link>
            </Nav>
          </Col>

          {/* Second Column */}
          <Col xs={12} md={3}>
            <h5>Customer Service</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Contact Us
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Delivery & Orders
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Returns & Exchanges
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Terms of Service
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Privacy Policy
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Track My Order
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Payment Guide
              </Nav.Link>
            </Nav>
          </Col>

          {/* Third Column */}
          <Col xs={12} md={3}>
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              About Us
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Careers
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Store Addresses
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
  <img 
    src="/img/endlogo.jpeg" 
    alt="Logo" 
    style={{ 
      maxWidth: '100px', // Adjust width as needed
      height: 'auto',    // Maintain aspect ratio
      display: 'block',  // Remove default inline spacing
      margin: 'auto'     // Center image if needed
    }} 
  />
</Nav.Link>
            </Nav>
          </Col>

          {/* Fourth Column (Social Media Icons) */}
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <li className="d-flex" style={{ listStyle: 'none', padding: '0' }}>
                <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }} className="mr-3">
                  <FaFacebookF />
                </Nav.Link>
                <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }} className="mr-3">
                  <FaTwitter />
                </Nav.Link>
                <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }} className="mr-3">
                  <FaInstagram />
                </Nav.Link>
                <Nav.Link href="#" style={{ color: 'black', textDecoration: 'none' }}>
                  <FaLinkedinIn />
                </Nav.Link>
              </li>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Homepage;
