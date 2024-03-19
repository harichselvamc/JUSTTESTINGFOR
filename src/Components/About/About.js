import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../About/About.css";
// import about from "../../assets/cards/ss4.png";
import Title from "../Title/Title";
// import { FcPositiveDynamic } from "react-icons/fc";
// import { FcBinoculars } from "react-icons/fc";
// import { FcRating } from "react-icons/fc";
// import Testimonials from "../Testimonials/Testimonials";



const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-container">
        <Title title="About Us" />
        {/* <div className="para">
          <div>
            <img src="" alt="img" />
            <div>
              <p>
                <span>
                  <FcPositiveDynamic />
                  Mission
                </span>
                <br />
                Our mission is to make scrap collection convenient and
                accessible for everyone. We strive to continuously improve our
                processes and expand our services to meet the evolving needs of
                our customers.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>
                <span>
                  <FcBinoculars />
                  Vision
                </span>
                <br />
                Our vision at Meenakshi Scraps is to create a cleaner and
                greener future for generations to come. We aim to lead the way
                in promoting sustainable practices and raising awareness about
                the importance of recycling.
              </p>
            </div>
            <img src="" alt="img" />
          </div>
          <div>
            <img src="" alt="img" />
            <div>
              <p>
                <span>
                  <FcRating />
                  Values
                </span>{" "}
                <br />
                At Meenakshi Scraps, we uphold the values of integrity,
                environmental responsibility, and customer satisfaction. We are
                dedicated to delivering exceptional service while upholding the
                highest ethical standards in all our business practices. Join us
                in our mission to make a difference and contribute towards a
                sustainable future. Contact Meenakshi Scraps today to learn more
                about our services and how you can get involved!
              </p>
            </div>
          </div>
        </div> */}
        <div className="terms container">
          <h2>Terms & Conditions</h2>
          <div>
            <p>
              <strong>Acceptance of Terms: </strong> By using this website, you
              agree to abide by these terms and conditions. <br />
              <strong>Use of Website: </strong> This website is for
              informational purposes only. Unauthorized use of content is
              prohibited. <br />
              <strong>Privacy Policy: </strong>Your privacy is important to us.
              Read our privacy policy to understand how your information is
              handled. <br />
              <strong>Limitation of Liability:</strong> We are not liable for
              any damages resulting from your use of this website. <br />
              <strong>Intellectual Property: </strong>All content on this
              website is owned by [Your Company Name]. Do not use without
              permission. <br />
              <strong>Links to Third-Party Sites: </strong> We are not
              responsible for the content of external websites linked on this
              site. <br />
              <strong>Changes to Terms:</strong> We may update these terms
              without notice. Continued use implies acceptance of changes.{" "}
              <br />
              <strong>Governing Law:</strong> These terms are governed by the
              laws of [Your Jurisdiction].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
