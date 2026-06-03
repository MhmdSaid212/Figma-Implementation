import "./../styling/AboutSection.css";
import aboutImage from "../images/aboutImage.png";

function AboutSection() {
  return (
    <section className="about-section">

      

      <div className="about-container">

        <div className="about-grid">

          {/* Left Side */}
          <div className="about-content">

            <h2 className="about-title">
              Professional for your
              <br />
              home services
            </h2>

            <p className="about-description">
              You need help for home care? We are home care professionals
              focused in the US region. We provide several services that
              support home services
            </p>

            <div className="about-checklist">

              {[
                "Repair and Installation",
                "Plumbing",
                "Maintenance",
                "Budget-friendly",
                "Home Security Services",
                "Eco-friendly solutions",
              ].map((item) => (
                <div key={item} className="check-item">
                  <span className="check-mark">✓</span>
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <div className="about-cta">

              <p>
                We already 24 hours fast services to help you.
              </p>

              <p>
                You can contact us at
                <span className="phone-number">
                  {" "}
                  (888) 617-5894
                </span>
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="about-image-section">

            <div className="house-image">

              <img
                src={aboutImage}
                alt="Roofing professionals at work"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;