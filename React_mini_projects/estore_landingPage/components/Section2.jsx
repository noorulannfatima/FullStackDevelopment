import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Section2 = () => {
  // Timer state
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const targetDate = new Date('2024-12-31T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text and Timers */}
          <Col xs={12} md={6} className="text-center text-md-left mb-4 mb-md-0">
            <h2>Special Event Countdown</h2>
            <p>Join us in this special event, happening soon!</p>

            <Row className="justify-content-center my-4">
              <Col xs={3} className="p-2">
                <div style={styles.timerBox}>
                  <h4>{time.days}</h4>
                  <p>Days</p>
                </div>
              </Col>
              <Col xs={3} className="p-2">
                <div style={styles.timerBox}>
                  <h4>{time.hours}</h4>
                  <p>Hrs</p>
                </div>
              </Col>
              <Col xs={3} className="p-2">
                <div style={styles.timerBox}>
                  <h4>{time.minutes}</h4>
                  <p>Mins</p>
                </div>
              </Col>
              <Col xs={3} className="p-2">
                <div style={styles.timerBox}>
                  <h4>{time.seconds}</h4>
                  <p>Secs</p>
                </div>
              </Col>
            </Row>

            <Button variant="primary" style={styles.button}>
              Learn More
            </Button>
          </Col>

          {/* Right Side - Image */}
          <Col xs={12} md={6} className="d-none d-md-block text-center">
            <img 
              src="/images/cover1.webp" 
              alt="Event" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  timerBox: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003366',
    borderColor: '#003366',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};

export default Section2;
