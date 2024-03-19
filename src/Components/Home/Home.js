import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Details from "../Details/Details";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Details />
        <Cards />
        <div className="location-details">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1768568158263!2d78.10799077487026!3d9.919224190182085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52a902b1a9b%3A0xb1726e4af0c22d30!2sMadurai%20Railway%20Station!5e0!3m2!1sen!2sin!4v1710497325617!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="reach-us">
            <h2>Reach Us</h2>
            <div>
              <strong>Owner :</strong> Mr Rajinder Aggarwal <br />{" "}
              <strong>Contact :</strong>
              91-92 1811 1111 91-82 1903 9217 <br /> <strong> Address :</strong>
              SCO No. 1, First Floor, Keshav Complex, Opp. Old Truck Union,
              NH-21 Baddi (H.P.) <br />
              <p className="reach-details">
                Ready to get rid of your scraps in an eco-friendly way? Contact
                Meenakshi Scraps today to schedule a pickup or inquire about our
                services. Our team is always here to assist you.
              </p>
            </div>
          </div>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/-nqucV-i2P4?si=06B9fcHa3euuL3M_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
