const FilterCar = ({ cars }) => {
  return (
    <div className="container">
      <div className="cars-container row">
        {cars.map((car) => (
          <div className="col-md-4 my-2" key={car.id}>
            <div className="card h-100">
              <div className="card-body" style={{ boxShadow: 20 + "px" }}>
                <img src={car.image} className="card-img" style={{ objectFit: "cover", width: 320 + "px", height: 250 + "px" }} alt="" />
                <h6 className="card-title mt-3 card-title-text">
                  {car.manufacture}/{car.model}
                </h6>
                <h5 className="card-title mt-3 card-title-text">Rp {car.rentPerDay} / hari</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rem natus maxime harum assumenda illum quibusdam quis qui facere obcaecati quod officia, molestias recusandae eius
                  ducimus voluptate possimus, quisquam nulla.
                </p>
                <h6>
                  <i className="bi bi-people" style={{ fontSize: 20 + "px" }}></i> {car.capacity} orang
                </h6>
                <h6>
                  <i className="bi bi-gear" style={{ fontSize: 20 + "px" }}></i> {car.transmission}
                </h6>
                <h6>
                  <i className="bi bi-calendar" style={{ fontSize: 20 + "px" }}></i> Tahun {car.year}
                </h6>
                <div className="d-flex flex-column mt-3 align-items-stretch">
                  <button className="btn btn-success">Pilih Mobil</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCar;
