import React from "react";
import logo2 from "../../assets/images/Asset 2.png";
import "./Footer.css";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import ScrollButton from "../ScrollButton/ScrollButton";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d8282182-bb44-4d42-9ecb-0f47f76382c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <footer className="footer container">
        <div className="upper">
          <div>
            <Link
              to="https://mail.google.com/"
              target="_blank"
              rel="noreferrer"
              title="gmail"
            >
              <BiLogoGmail className="gmail" />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              title="facebook"
            >
              <ImFacebook2 className="fb" />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              title="insta"
            >
              <FaInstagram className="insta" />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              title="twitter"
            >
              <FaWhatsapp className="twi" />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              title="youtube"
            >
              <FaYoutube className="utube" />
            </Link>
          </div>
        </div>
        <div className="lower">
          <div className="logo-text">
            <img src={logo2} alt="" />
            <p> Your go-to destination for all your scrap collection needs</p>
          </div>
          <div className="company">
            <h2>Company</h2>
            <p>
              <Link to="/services" className="white">
                Products
              </Link>
            </p>
            <p>
              <Link to="/services" className="white">
                Services
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Contact
              </Link>
            </p>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <p>
              <Link to="/about" className="white">
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Corporate Orders
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Retail Orders
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Apartment Orders
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Scrap Reselling Portal
              </Link>
            </p>
            <p>
              <Link to="/contact" className="white">
                Bulk Scrap Collection
              </Link>
            </p>
          </div>
          <div className="inquiry">
            <form onSubmit={onSubmit}>
              <label for="nam">
                Full Name <span>*</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  id="nam"
                />
              </label>
              <label for="pho">
                Phone Number <span>*</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  required
                  id="pho"
                />
              </label>
              <label for="mess">
                Message <span>*</span>
                <textarea
                  name="message"
                  id="mess"
                  rows="3"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </label>
              <button className="btn-outline">Send Inquiry</button>
            </form>
            <span className="result">{result}</span>
          </div>
        </div>
      </footer>
      <a
        className="whats"
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noreferrer"
        title="what"
      >
        <FaWhatsapp className="my float" />
      </a>
      <ScrollButton />
    </>
  );
};

export default Footer;
