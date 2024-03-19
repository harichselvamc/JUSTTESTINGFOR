import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero container"
      animate={{ opacity: [1, 10, 1] }}
      transition={{ duration: 3, delay: 0.1 }}
    >
      <div className="hero-text">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            Your go-to destination for all your scrap collection needs!
          </motion.h1>
        </AnimatePresence>
        <p>
          At Meenakshi Scraps, we are passionate about environmental
          sustainability and recycling. We strive to make the process of
          collecting scraps easy and convenient for our customers, while also
          playing our part in preserving the planet for future generations.
        </p>
        <div className="btn">
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
