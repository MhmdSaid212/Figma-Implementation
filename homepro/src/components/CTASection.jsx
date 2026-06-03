import man from "../images/man.png";
import topbar from "../icons/topbar.svg";
import { FaPhoneAlt } from "react-icons/fa";
import "./../styling/CTASection.css";

function CTASection() {
  return (
    <div className="cta-section">
      <div className="cta-card">
        {/* Top Shape */}
        <img src={topbar} alt="" className="cta-topbar" />

        {/* Left Content */}
        <div className="cta-content">
          <h2 className="cta-title">
            Already to improve
            <br />
            or repair your home?
            <br />
            Let's Talk!
          </h2>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-check">✓</span>
              <span className="cta-feature-text">Free Quotes</span>
            </div>

            <div className="cta-feature">
              <span className="cta-check">✓</span>
              <span className="cta-feature-text">100% Commitment-Free</span>
            </div>
          </div>

          <button className="cta-button">
            Call Us Now
            <div className="cta-button-icon">
              <FaPhoneAlt />
            </div>
          </button>
        </div>

        {/* Right Image */}
        <img src={man} alt="" className="cta-man" />
      </div>
    </div>
  );
}

export default CTASection;