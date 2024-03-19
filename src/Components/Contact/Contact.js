import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Contact/Contact.css";
import Title from "../Title/Title"

const Contact = () => {
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
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <Navbar />
      <Title title="Get In Touch" />
      <div className="container">
        {/* <div className="contact-details">
          <div className="address">
            <FaAddressBook className="add" />
            <div className="address-text">
              <h2>Address</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                optio saepe at, veritatis vel ducimus!
              </p>
            </div>
          </div>
          <div className="email">
            <TfiEmail className="mail" />
            <div className="email-text">
              <h2>Email</h2>
              <p>MeenakshiScraps@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <FaPhoneSquareAlt className="call" />
            <div className="phone-text">
              <h2>Phone</h2>
              <p>+91 7675763722</p>
            </div>
          </div>
        </div> */}
        <div className="send-message">
          <form onSubmit={onSubmit}>
            <label for="am">
              Full Name <span>*</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                id="am"
              />
            </label>
            {/* <label htmlFor="">
              Email <span>*</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </label> */}
            <label for="one">
              Phone Number <span>*</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                id="one"
              />
            </label>
            <label for="pro">
              Address
              <input
                type="text"
                name="product"
                placeholder="Enter about your products.."
                id="pro"
              />
            </label>
            <label for="me">
              Product Details
              <textarea
                name="message"
                id="me"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </label>
            <button className="btn-outline">Send Inquiry</button>
          </form>
        </div>
        <span className="result">{result}</span>
      </div>
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
        <div className="reach-us top">
          <h2>Reach Us</h2>
          <div>
            <strong>Owner :</strong> Mr Rajinder Aggarwal <br />
            <strong>Contact :</strong>
            91-92 1811 1111 91-82 1903 9217 <br /> <strong> Address :</strong>
            SCO No. 1, First Floor, Keshav Complex, Opp. Old Truck Union, NH-21
            Baddi (H.P.) <br />
            <p className="reach-details">
              Ready to get rid of your scraps in an eco-friendly way? Contact
              Meenakshi Scraps today to schedule a pickup or inquire about our
              services. Our team is always here to assist you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
