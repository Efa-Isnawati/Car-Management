import React from "react";
import { useEffect } from "react";
import Header from '../components/Landing Page/Header/Header'
import App from '../App'
import Footer from '../components/Landing Page/Footer/Footer'

function LandingPage() {
  useEffect(() => {
    document.title = "Homepage Binar Rental Car";
  }, []);
  return (
    <div>
      <Header />
      <App />
      <Footer />
    </div>
  );
}

export default LandingPage;