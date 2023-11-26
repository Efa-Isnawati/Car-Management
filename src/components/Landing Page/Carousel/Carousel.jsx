import React from 'react';

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import {
  // Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function Testimonial() {
  return (
    <div id="testimonial">
      <div>
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari pelanggan kami</p>
      </div>
      <Row>
        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={32}
          autoHeight={true}
          nav={true}
          center={true}
          dots={false}
          navText={[
            "<img src='/images/left.png' style='width: 32px; margin-right: 10px;'>",
            "<img src='/images/right.png' style='width: 32px;'>",
          ]}
          responsive={{
            0: {
              items: 1,
            },
            800: {
              items: 1,
            },
            1000: {
              items: 2,
            },
          }}
        >
          <Row>
            <Card className='card-testi'>
              <Card.Body>
                <Row>
                  <Col className='testi-photo'>
                    <img src={process.env.PUBLIC_URL + '/images/testi_photo-2.png'} alt="" />
                  </Col>
                  <Col className='testi' sm={8}>
                    <img src={process.env.PUBLIC_URL + '/images/rate.png'} className="rate" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores qui omnis, ex possimus eligendi dolorum cumque reiciendis provident, ipsam ea quis incidunt rerum laboriosam! Corrupti, eum. Et, dolore minus.</p>
                    <p className="username">John Dee, 32 Bromo</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className='card-testi'>
              <Card.Body>
                <Row>
                  <Col className='testi-photo'>
                    <img src={process.env.PUBLIC_URL + '/images/testi_photo-3.png'} alt="" />
                  </Col>
                  <Col className='testi' sm={8}>
                    <img src={process.env.PUBLIC_URL + '/images/rate.png'} className="rate" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores qui omnis, ex possimus eligendi dolorum cumque reiciendis provident, ipsam ea quis incidunt rerum laboriosam! Corrupti, eum. Et, dolore minus.</p>
                    <p className="username">John Dee, 32 Bromo</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className='card-testi'>
              <Card.Body>
                <Row>
                  <Col className='testi-photo'>
                    <img src={process.env.PUBLIC_URL + '/images/testi_photo-3.png'} alt="" />
                  </Col>
                  <Col className='testi' sm={8}>
                    <img src={process.env.PUBLIC_URL + '/images/rate.png'} className="rate" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores qui omnis, ex possimus eligendi dolorum cumque reiciendis provident, ipsam ea quis incidunt rerum laboriosam! Corrupti, eum. Et, dolore minus.</p>
                    <p className="username">John Dee, 32 Bromo</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </OwlCarousel>
      </Row>
    </div>
  )
}

export default Testimonial;
