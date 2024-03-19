import React from "react";
import "./Details.css";
import image1 from "../../assets/row/ss2.png";
import image2 from "../../assets/row/ss3.png";
import image3 from "../../assets/row/ss4.png";
import image4 from "../../assets/row/ss5.png";
import image5 from "../../assets/cards/cd2.jpg";
import image6 from "../../assets/cards/cd6.jpg";
import image7 from "../../assets/cards/cd4.jpg";
import image8 from "../../assets/cards/cd7.jpg";
import src1 from "../../assets/row/scr1.jpg";
import src2 from "../../assets/row/scr3.jpg";
import src3 from "../../assets/row/src4.jpg";
import src4 from "../../assets/row/src5.jpg";
import src5 from "../../assets/row/scr10.jpg";
import src6 from "../../assets/row/src6.jpg";
import src7  from "../../assets/row/scr7.jpg";
import src8  from "../../assets/row/scr8.jpg";

// import ImageCarousel from "../Carousel/ImageCarousel";

const Details = () => {
  // const images = [image1,image2,image3,image4,image5,image6,image7,image8];
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
    <div>
      <div className="line-sec">
        <div className="line"></div>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={image1} alt="" />
          </div>
          <div className="slide">
            <img src={image2} alt="" />
          </div>
          <div className="slide">
            <img src={image3} alt="" />
          </div>
          <div className="slide">
            <img src={image4} alt="" />
          </div>
          <div className="slide">
            <img src={image5} alt="" />
          </div>
          <div className="slide">
            <img src={image6} alt="" />
          </div>
          <div className="slide">
            <img src={image7} alt="" />
          </div>
          <div className="slide">
            <img src={image8} alt="" />
          </div>
          <div className="slide">
            <img src={src1} alt="" />
          </div>
          <div className="slide">
            <img src={src2} alt="" />
          </div>
          <div className="slide">
            <img src={src3} alt="" />
          </div>
          <div className="slide">
            <img src={src4} alt="" />
          </div>
          <div className="slide">
            <img src={src5} alt="" />
          </div>
          <div className="slide">
            <img src={src6} alt="" />
          </div>
          <div className="slide">
            <img src={src7} alt="" />
          </div>
          <div className="slide">
            <img src={src8} alt="" />
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="text-details">
          <div className="para-1">
            <div className="p-1">
              <h1>Meenakshi Scraps</h1>
              <p>
                Purchasing Metal Scraps: Iron, Steel, Copper, Brass,
                Electronics, Computer/Laptop Scraps, and Cable Wire Scraps.
              </p>
            </div>
          </div>
          <div className="line-sec">
            <div className="line"></div>
          </div>
          <div className="para-2">
            <div className="p-2">
              <p>
                We offer efficient and reliable scrap
                collection services for individuals and businesses alike.
                Whether you have metal scraps, paper waste, or electronic items
                to dispose of, we've got you covered. Not
                only do we collect scraps, but we also ensure that they are
                properly recycled and processed in an environmentally friendly
                manner. By choosing Meenakshi Scraps, you are contributing to a
                cleaner and greener world.
              </p>
            </div>
          </div>
          <div className="para-3">
            <div className="p-3">
              <h1>Meenakshi Scraps</h1>
              <p>
                We purchase a wide variety of scrap materials from factories and
                industries, including iron, steel, brass, copper, and aluminum.
                We are your trusted scrap buyers.
              </p>
            </div>
          </div>
        </div>
        <div className="send-message">
          <form onSubmit={onSubmit}>
            <label for="name">
              Full Name <span>*</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
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
            <label for="phone">
              Phone Number <span>*</span>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your mobile number"
                required
              />
            </label>
            <label for="product">
              Address
              <input
                type="text"
                name="product"
                id="product"
                placeholder="Enter about your products.."
              />
            </label>
            <label for="message">
              Product Details
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </label>
            <button className="btn-outline">Send Inquiry</button>
          </form>
          <span className="result">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
