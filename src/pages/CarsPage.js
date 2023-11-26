import React from "react";
import { useEffect } from "react";

import Header from '../components/Landing Page/Header/Header'
import Jumbotron from '../components/Cars Page/Jumbotron/JumbotronNoButton'
// import FilterCar from '../components/Cars Page/FilterCar'
import Filter from '../components/Cars Page/Filter/Filter'
import Footer from '../components/Landing Page/Footer/Footer'
import FilterCar from "../components/Cars Page/Filter/FilterCar";

function CarsPage() {
  useEffect(() => {
    document.title = "Cars Page";
  }, []);
  return (
    <div>
      <Header />
      <Jumbotron />
      <Filter />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default CarsPage;