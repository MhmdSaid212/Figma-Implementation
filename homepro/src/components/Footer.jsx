import home2 from "../icons/home2.svg";
import youtube from "../icons/youtube.svg";
import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import mail from "../icons/mail.svg";
import "./../styling/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter-container">
        <div className="newsletter-box">
          <div>
            <h3 className="newsletter-title">
              Stay Connected with Our Newsletter
            </h3>
            <p className="newsletter-text">
              Subscribe to our newsletter to get more news, promo,
              or news services
            </p>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={home2} alt="" />
              <h2>HomePro</h2>
            </div>
            <p className="footer-description">
              Home Pro is your premier destination for top-notch
              smart home service and repair.
            </p>
            <div className="footer-socials">
              <img src={youtube} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={mail} alt="" />
            </div>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Our Blog</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3 className="footer-column-title">Legal</h3>
            <div className="footer-links">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>©2023 HomePro . All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;