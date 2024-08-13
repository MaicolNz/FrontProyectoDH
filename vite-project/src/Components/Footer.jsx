import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <a href="/">
              <img src="/public/images/Logos/Logo White.png" alt="Logo" className="img-fluid" />
            </a>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <ul className="list-unstyled d-flex gap-3 justify-content-center">
              <li><img src="/public/images/icons/Facebook.svg" alt="Facebook" className="img-fluid" /></li>
              <li><img src="/public/images/icons/Youtube.svg" alt="YouTube" className="img-fluid" /></li>
              <li><img src="/public/images/icons/Twitter.svg" alt="Twitter" className="img-fluid" /></li>
              <li><img src="/public/images/icons/Instagram.svg" alt="Instagram" className="img-fluid" /></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-end">
            <p className="mb-2 text-center text-md-end">Copyright © 2024. All rights reserved.</p>
            <div className="d-flex">
              <Form.Control
                type="email"
                placeholder="Ingrese su email..."
                className="rounded-start border-0 me-2"
                style={{ maxWidth: '200px' }}
              />
              <Button variant="dark" className="rounded-end" style={{ minWidth: '120px' }}>
                Suscribirme
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
