import "./../styling/ReviewsSection.css";

import trustpilot from "../icons/trustpilot.svg";
import arrowLeft from "../icons/arrowLeft.svg";
import arrowRight from "../icons/arrowRight.svg";
import stars from "../icons/stars.svg";
import dots from "../icons/dots.svg";
import reviewer from "../images/reviewer.png";

function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* Heading */}
        <h2 className="reviews-title">
          Here our original reviews
          <br />
          from trusted platform
        </h2>

        {/* Trustpilot */}
        <div className="reviews-trustpilot">
          <img
            src={trustpilot}
            alt="Trustpilot"
          />
        </div>

        {/* Divider */}
        <div className="reviews-divider" />

        {/* Review Area */}
        <div className="review-wrapper">

          <button className="review-arrow review-arrow-left">
            <img
              src={arrowLeft}
              alt=""
            />
          </button>

          <button className="review-arrow review-arrow-right">
            <img
              src={arrowRight}
              alt=""
            />
          </button>

          <div className="review-content">

            <p className="review-text">
              Roof repairs can be a real headache, but HomePro makes it easy!
              Their roofing team turned my leaky roof into a stockade.
              With their craftsmanship and the best materials, my house is
              now ready to weather any storm.
            </p>

            <div className="reviewer">

              <img
                src={reviewer}
                alt=""
                className="reviewer-image"
              />

              <div className="reviewer-info">

                <h4 className="reviewer-name">
                  Kende Attila
                </h4>

                <img
                  src={stars}
                  alt=""
                  className="review-stars"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Dots */}
        <div className="reviews-dots">
          <img
            src={dots}
            alt=""
          />
        </div>

      </div>
    </section>
  );
}

export default ReviewsSection;