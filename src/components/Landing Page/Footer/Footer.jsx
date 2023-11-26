import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footers = () => {
  return (
    <footer>
      <Container>
        <Row className='footer'>
          <Col xs={4}>
            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
            <li>binarcarrental@gmail.com</li>
            <li>081-233-334-808</li>
          </Col>
          <Col xs={3} className="list-service">
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </Col>
          <Col xs={3}>
            <p>Connect With Us</p>
            <img src={process.env.PUBLIC_URL + '/images/icon_facebook.png'} alt="facebook" />
            <img src={process.env.PUBLIC_URL + '/images/icon_instagram.png'} alt="instagram" />
            <img src={process.env.PUBLIC_URL + '/images/icon_mail.png'} alt="mail" />
            <img src={process.env.PUBLIC_URL + '/images/icon_twitter.png'} alt="twitter" />
            <img src={process.env.PUBLIC_URL + '/images/icon_twitch.png'} alt="twitch" />
          </Col>
          <Col xs={2}>
            <p>Copyright Binar 2022</p>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="twitter" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;
