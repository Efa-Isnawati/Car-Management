import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jumbotron.css';

const Jumbotron = (props) => {
  const navigate = useNavigate();
  return (
    <Container className='jumbotron-body'>
      <Row>
        <Col className="jumbotron-desc">
          <h1>Sewa & Rental Mobil Terbaik di Kawasan Jakarta</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <Button variant="success" className="nav-button" onClick={() => navigate("/cars")}>Mulai Sewa Mobil</Button>
        </Col>
        <Col><img src={process.env.PUBLIC_URL + '/images/img_car.png'} alt="" /> </Col>
      </Row>
    </Container>
  )
}
export default Jumbotron;
