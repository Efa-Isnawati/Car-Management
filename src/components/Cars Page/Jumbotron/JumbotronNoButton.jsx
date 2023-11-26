import React from 'react';
import {
	Container,
	Row,
	Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Landing Page/Jumbotron/Jumbotron.css';

const Jumbotrons = () => {
	return (
		<Container className='jumbotron-body'>
			<Row>
				<Col xs={6}>
					<h1>Sewa & Rental Mobil Terbaik di Kawasan Jakarta</h1>
					<p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
						Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
				</Col>
				<Col xs={6}><img src={process.env.PUBLIC_URL + '/images/img_car.png'} alt="" /> </Col>
			</Row>
		</Container>
	)
}
export default Jumbotrons;
