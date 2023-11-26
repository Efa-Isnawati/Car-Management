import React from 'react';
import { useEffect, useState } from "react";
// import FilterCar from './FilterCar';
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from '../../../redux';
import FilterCar from './FilterCar';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css';

function Filter() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passenger, setPassenger] = useState("");
  const [isError, setIsError] = useState("");
  // const [carsData, setCarsData] = useState([])
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type !== "Pilih Tipe Driver") {
      const pass = passenger ? passenger : "0";
      const filter = { type, date, pickupTime, pass };
      dispatch(fetchCars(filter))
      console.log(state.error)
      // if (state.error.length !== 0) {
      //   setCarsData(state.cars)
      //   setIsError("")
    }
    // setIsError("")

  }
  // console.log(state.error)
  // if (state.error.length !== 0) {
  //   setCarsData(state.cars)
  //   setIsError("")
  // } else {
  //   setIsError(state.error)
  //   setCarsData([])
  // }
  const handleType = (e) => {
    setType(e.target.value);
  }
  const handleDate = (e) => {
    setDate(e.target.value);
  }
  const handlePickupTime = (e) => {
    setPickupTime(e.target.value);
  }
  const handlePassenger = (e) => {
    setPassenger(e.target.value);
    console.log(e.target.value)
  }

  useEffect(() => {
    console.log(state.cars);
    // if (state.error.length !== 0) {
    //   setCarsData = state.cars
    // } else {
    //   
    // }
    setIsError(state.error)
  }, [state]);

  // console.log(state.error)
  // state.cars.length === 0 && setIsError(state.error)
  // state.cars.length !== 0 && setCarsData(state.cars) && setIsError("")
  return (
    <>
      {/* {console.log(state.error)} */}
      <Container className="modal-input">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={3}>
              <label className="modal-label">Tipe Driver</label>
              <Form.Select aria-label="Default select example" value={type} required onChange={handleType}>
                <option>Pilih Tipe Driver</option>
                <option value="Automatic">Dengan Supir</option>
                <option value="Automanual">Tanpa Supir (Lepas Kunci)</option>
                {/* <option value="Manual">Manual</option> */}
              </Form.Select>
            </Col>
            <Col xs={2}>
              <label className="modal-label">Pilih Tanggal</label>
              <Form.Control
                type="date"
                id="inputDate"
                onChange={handleDate}
              // required
              />
            </Col>
            <Col xs={2}>
              <label className="modal-label">Waktu Jemput/Ambil</label>
              <Form.Control
                type="time"
                id="inputTime"
                // value={pickupTime}
                onChange={handlePickupTime}
              // required
              />
            </Col>
            <Col xs={3}>
              <label className="modal-label">Jumlah Penumpang (Optional)</label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Jumlah Penumpang"
                  value={passenger} onChange={handlePassenger}
                />
                <InputGroup.Text id="basic-addon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill"
                    viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={2}>
              <Button variant="success" className="modal-button" type="submit">Cari Mobil</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      {isError !== "" && (
        <div className="container">
          <div className="cars-container row">
            <Alert variant="danger">
              <Alert.Heading className='text-center'>{isError}</Alert.Heading>
            </Alert>
          </div>
        </div>
      )}
      {isError === "" && (
        state.cars && <FilterCar cars={state.cars} />
      )}

    </>
  )
}
export default Filter;
