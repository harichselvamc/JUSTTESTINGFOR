import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import "../Services/Services.css";
import Title from "../Title/Title";

const Services = () => {
  return (
    <div className="services">
      <Navbar />
      <div className="container">
        <Title title="Our Services" />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
