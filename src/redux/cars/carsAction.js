const fetchCarsSuccess = (cars) => {
    return {
      type: "FETCH_CARS_SUCCESS",
      payload: cars,
    };
  };
  const fetchCarsRequest = () => {
    return {
      type: "FETCH_CARS_REQUEST",
    };
  };
  const fetchCarsFailure = (error) => {
    return {
      type: "FETCH_CARS_FAILURE",
      payload: error,
    };
  };
  
  const fetchCars = ({ type, date, pickupTime, pass }) => {
    return (dispatch) => {
      dispatch(fetchCarsRequest);
      fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
        .then((res) => {
          if (res.status !== 200) {
            throw Error("Fetch Failed");
          }
          return res.json();
        })
        .then((data) => {
          // date: "2022-05-19"
          // pass: "2"
          // pickupTime: "22:17"
          // type: "1"
          console.log(date.length)
          if(date.length !== 0 || pickupTime.length !== 0 ) {
            // let coba = ["Automatic","Automatic","Automanual","Manual"]
            let inputDataTime = date + "T" + pickupTime + "Z" 
            const filterType = data.filter((car) => {
              return (
                car.transmission.toLowerCase() === type.toLowerCase()
              )
            })
            dispatch(fetchCarsSuccess(filterType));
            const filterData = filterType.filter((car) => {
              if(pass.length !== 0) {
                return (
                  car.available === true && car.capacity >= pass && Date.parse(car.availableAt) <= Date.parse(inputDataTime)
                )
              } else {
                return (
                  car.available === true && Date.parse(car.availableAt) <= Date.parse(inputDataTime)
                )
              }
             
            })
            dispatch(fetchCarsSuccess(filterData));
          } else {
            dispatch(fetchCarsFailure("Please Fill Out The Form!"))
          }
          
        })
        .catch((err) => {
          const errorMsg = err.message;
          fetchCarsFailure(errorMsg);
        });
    };
  };
  
  export default fetchCars;
  