// ContactPage.js

import React from 'react';
import ContactUs from "../../Assets/Images/pakistan.png"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to contact us. Our team is here to help you!
          </p>
          <address>
            <strong>Travel Adventures</strong>
            <br />
            123 Explore Street
            <br />
            Adventure City, AC 12345
            <br />
            Email: info@traveladventures.com
            <br />
            Phone: +1 (123) 456-7890
          </address>
        </Col>
        <Col md={6}>
          <h2>Send Us a Message</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <h2>Our Location</h2>
          <p>
            We are located in the heart of Adventure City. Visit us to plan your next exciting journey!
          </p>
          <img
            src={ContactUs}
            alt="Adventure City"
            className="img-fluid "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
