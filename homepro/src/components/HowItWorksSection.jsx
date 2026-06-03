import "./../styling/HowItWorksSection.css";

import worker from "../images/worker.png";
import checkBadge from "../icons/checkBadge.svg";
import bg from "../images/bg.png";

function HowItWorksSection() {
  const steps = [
    {
      number: "1.",
      title: (
        <>
          Call us
          <br />
          anytime 24/7
        </>
      ),
      description:
        "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime.",
    },
    {
      number: "2.",
      title: (
        <>
          Schedule
          <br />
          Service
        </>
      ),
      description:
        "After connecting your call, our home care experts will answer your questions and provide flexible appointment times.",
    },
    {
      number: "3.",
      title: (
        <>
          Your request
          <br />
          is completed
        </>
      ),
      description:
        "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">

        <div className="how-grid">

          {/* Left Side */}
          <div className="how-image-wrapper">

            <img
              src={bg}
              alt=""
              className="how-background"
            />

            <img
              src={worker}
              alt=""
              className="how-worker"
            />

            <img
              src={checkBadge}
              alt=""
              className="how-badge"
            />

          </div>

          {/* Right Side */}
          <div>

            <h2 className="how-title">
              How HomePro
              <br />
              works?
            </h2>

            <div className="how-steps">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="how-step"
                >
                  <div className="step-number">
                    {step.number}
                  </div>

                  <div className="step-title">
                    {step.title}
                  </div>

                  <p className="step-description">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;