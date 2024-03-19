import React from "react";
import "./Cards.css";
import card1 from "../../assets/cards/cd2.jpg";
import card2 from "../../assets/cards/d10.jpg";
import card3 from "../../assets/cards/cd4.jpg";
import card4 from "../../assets/cards/cd9.jpg";
import card5 from "../../assets/cards/d8.jpg";
import card6 from "../../assets/cards/ss4.png";
import card7 from "../../assets/cards/cd7.jpg";
import card8 from "../../assets/cards/cd6.jpg";
import card9 from "../../assets/cards/cd8.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="cards">
      <div className="row">
        <div className="card">
          <img src={card1} alt="" />
          <h4>Second hand Furniture and Fixture Buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card2} alt="" />
          <h4>Old Books and Newspaper Buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card3} alt="" />
          <h4>Plastic Scrap</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <img src={card4} alt="" />
          <h4>Electric wire & Power cable buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card5} alt="" />
          <h4>Glass Scrap</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card6} alt="" />
          <h4>All types of metal scrap buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <img src={card7} alt="" />
          <h4>Old Machinery buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card8} alt="" />
          <h4>Old Air Conditioner Buyer</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={card9} alt="" />
          <h4>Battery Scrap</h4>
          <div className="btn-outline">
            <Link to="/contact" className="btn-outline-no">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
