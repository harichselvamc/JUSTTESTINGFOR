import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Asset 2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  const phoneNumber = "+911234567890";
  // Get the current location using useLocation hook
  const location = useLocation();

  // Define the active link based on the current location pathname
  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <div>
        <div className="upper">
          <div>
            <Link
              className="gm"
              to="https://mail.google.com/"
              target="_blank"
              rel="noreferrer"
              title="gmail"
            >
              <BiLogoGmail className="gmail" />
            </Link>
          </div>
          <div>
            <SocialIcon
              url="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <SocialIcon
              url="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="socials"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <SocialIcon
              url="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="socials"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <SocialIcon
              url="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="socials"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <a href={`tel:${phoneNumber}`}>
              <MdCall className="green" /> +91 8220968760
            </a>
          </div>
        </div>
        <ul className={mobileMenu ? "" : "hide-menu"}>
          <li>
            <Link
              to="/"
              className={`nav-link ${isActiveLink("/")}`} // Apply active class to home link if on homepage
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActiveLink("/about")}`} // Apply active class to about link if on about page
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-link ${isActiveLink("/services")}`} // Apply active class to services link if on services page
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className={`nav-link ${isActiveLink("/location")}`} // Apply active class to location link if on location page
            >
              Contact us
            </Link>
          </li>
          <li>
            <div className="btn">
              <Link to="/contact" className="nav-link">
                Get In Touch
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu className="menu-icon" onClick={() => toggleMenu()} />
    </nav>
  );
};

export default Navbar;
