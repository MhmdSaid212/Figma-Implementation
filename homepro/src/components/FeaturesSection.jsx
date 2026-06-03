import "./../styling/FeaturesSection.css";

import hammer2Icon from "../icons/hammer.svg";
import location2Icon from "../icons/location2.svg";
import calendar2Icon from "../icons/calendar2.svg";
import notesIcon from "../icons/notes.svg";
import hoursIcon from "../icons/hours.svg";
import messagesIcon from "../icons/messages.svg";

import leftbar from "../icons/leftbar.svg";
import rightbar from "../icons/rightbar.svg";

function FeaturesSection() {
  const features = [
    {
      icon: hammer2Icon,
      title: "Satisfaction Guarantee",
      text: "You don't need to worry about scams or our performance results. Our company has been verified and strives for optimal results.",
    },
    {
      icon: notesIcon,
      title: "Free Quotes",
      text: "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.",
    },
    {
      icon: location2Icon,
      title: "Local Professionals",
      text: "Our services cover the nationwide US area, including urban, suburban, and rural locations for both long and short-term maintenance.",
    },
    {
      icon: hoursIcon,
      title: "Fast 24-Hour Service",
      text: "Need fast handling for repairs, leaks or something else? Our experts are available anytime to help you solve the problem.",
    },
    {
      icon: calendar2Icon,
      title: "Flexible Appointments",
      text: "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
    },
    {
      icon: messagesIcon,
      title: "100% Commitment-Free",
      text: "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">

        <div className="features-card">

          <img
            src={rightbar}
            alt=""
            className="features-bar-left"
          />

          <img
            src={leftbar}
            alt=""
            className="features-bar-right"
          />

          {/* Top Section */}
          <div className="features-top">

            <h2 className="features-title">
              Fast, Friendly, and
              <br />
              Satisfaction Guarantee
            </h2>

            <p className="features-description">
              No matter how big or small your work is, whether it's for the
              interior or exterior of your home, we are ready to serve and help
              you solve your home problems.
            </p>

          </div>

          <div className="features-divider" />

          {/* Features Grid */}
          <div className="features-grid">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-item"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-icon"
                />

                <div>
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>

                  <p className="feature-text">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;