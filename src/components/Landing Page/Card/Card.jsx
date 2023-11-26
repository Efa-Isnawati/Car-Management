import React from 'react';
import {
  Card,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Cards = () => {
  return (
    <div id="why-us">
      <Container>
        <div className='title-card'>
          <h1>Why Us?</h1>
          <p>Mengapa harus memilih Binar Car Rental?</p>
        </div>
        <Row sm={4} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <img src={process.env.PUBLIC_URL + '/images/icon_complete.png'} className="image" alt="" />
                <Card.Title className="card-title">Mobil Lengkap</Card.Title>
                <Card.Text className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <img src={process.env.PUBLIC_URL + '/images/icon_price.png'} className="image" alt="" />
                <Card.Title className="card-title">Harga Murah</Card.Title>
                <Card.Text className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <img src={process.env.PUBLIC_URL + '/images/icon_24hrs.png'} className="image" alt="" />
                <Card.Title className="card-title">Layanan 24 Jam</Card.Title>
                <Card.Text className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <img src={process.env.PUBLIC_URL + '/images/icon_professional.png'} className="image" alt="" />
                <Card.Title className="card-title">Sopir Profesional</Card.Title>
                <Card.Text className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
