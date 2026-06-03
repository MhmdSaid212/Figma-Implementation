import { useState } from "react";
import homeIcon from "../icons/home.svg";
import "./../styling/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={homeIcon} alt="HomePro Logo" />
          <span>HomePro</span>
        </div>

        <ul className="nav-links">
          <li>About Us</li>
          <li>Services</li>
          <li>Our Blog</li>
          <li>Contact</li>
        </ul>

        <div className="nav-service">
          <span className="service-dot"></span>
          <span>24 Hour Services</span>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <img src={homeIcon} alt="HomePro Logo" />
            <span>HomePro</span>
          </div>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="mobile-links">
          <li>About Us</li>
          <li>Services</li>
          <li>Our Blog</li>
          <li>Contact</li>
        </ul>

        <div className="mobile-service">
          <span className="service-dot"></span>
          <span>24 Hour Services</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;