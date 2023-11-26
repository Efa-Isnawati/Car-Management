import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card className="banner">
        <Card.Body>
          <Card.Title className='banner-title'>Sewa Mobil di Jakarta Sekarang</Card.Title>
          <Card.Text className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </Card.Text>
          <Card.Text className='desc'>
            tempor incididunt ut labore et dolore magna aliqua
          </Card.Text>
          <Button variant="success" className="button" onClick={() => navigate("/cars")}>Mulai Sewa Mobil</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Banner;
