
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Contact from "./Components/Contact/Contact"
import Location from "./Components/Location/Location"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
};

export default App;
