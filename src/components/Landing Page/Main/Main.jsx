import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

const Main = () => {
  return (
    <div id="our-services">
      <Container className='service'>
        <Row>
          <Col xs={6}><img src={process.env.PUBLIC_URL + '/images/img_service.png'} alt="" />
          </Col>
          <Col xs={6}>
            <h1>Best Car Rental For Any Kind Of Trip In Jakarta</h1>
            <p>Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
              mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <li className='list'>
              <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" />
              Sewa Mobil Dengan Sopir di Bali 12 Jam
            </li>
            <li className='list'>
              <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" />
              Sewa Mobil Lepas Kunci di Bali 24 jam
            </li>
            <li className='list'>
              <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" />
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className='list'>
              <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" />
              Gratis Antar-Jemput Mobil di Bandara
            </li>
            <li className='list'>
              <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" />
              Layanan Airport Transfer/Drop In Out
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
