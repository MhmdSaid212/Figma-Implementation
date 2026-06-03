import "./../styling/Hero.css";

import Navbar from "./Navbar";
import { FaPhoneAlt } from "react-icons/fa";

import heroLeft from "../images/hero-left.png";
import heroRight from "../images/hero-right.png";

import shieldIcon from "../icons/shield.svg";
import clockIcon from "../icons/clock.svg";
import locationIcon from "../icons/location.svg";
import calendarIcon from "../icons/calendar.svg";
import topleftbar from "../icons/topleftbar.svg";
import toprightbar from "../icons/toprightbar.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        

        <Navbar />

        <div className="hero-grid">

          <img
      src={topleftbar}
      alt=""
      className="hero-top-left-bar"
    />

    {/* Top Right Shape */}
    <img
      src={toprightbar}
      alt=""
      className="hero-top-right-bar"
    />

          {/* Left Image */}
          <div className="hero-image-wrapper hero-left">
            <img
              src={heroLeft}
              alt="Home repair professional"
              className="hero-image"
            />
          </div>

          {/* Center Content */}
          <div className="hero-content">

            <p className="hero-subtitle">
              Maintenances • Repairs • Improvements
            </p>

            <h1 className="hero-title">
              Need improvement
              <br />
              or repair your home?
              <br />
              we can help!
            </h1>

            <div className="hero-features">
              <span>✓ Free Quotes</span>
              <span>✓ 100% Commitment-Free</span>
            </div>

            <div className="hero-button-wrapper">

              <button className="hero-button">

                <span>Call Us Now</span>

                <div className="hero-button-icon">
                  <FaPhoneAlt />
                </div>

              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="hero-image-wrapper hero-right">
            <img
              src={heroRight}
              alt="Home repair professional"
              className="hero-image"
            />
          </div>

        </div>

        {/* Bottom Features */}
        <div className="hero-benefits">

          <div className="benefit-item">

            <div className="benefit-icon">
              <img src={shieldIcon} alt="" />
            </div>

            <span>
              Satisfaction
              <br />
              Guarantee
            </span>

          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">

            <div className="benefit-icon">
              <img src={clockIcon} alt="" />
            </div>

            <span>
              24H
              <br />
              Availability
            </span>

          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">

            <div className="benefit-icon">
              <img src={locationIcon} alt="" />
            </div>

            <span>
              Local US
              <br />
              Professional
            </span>

          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">

            <div className="benefit-icon">
              <img src={calendarIcon} alt="" />
            </div>

            <span>
              Flexible
              <br />
              Appointments
            </span>

          </div>

        </div>

      </div>
      
    </section>
  );
}

export default Hero;