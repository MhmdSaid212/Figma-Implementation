import { useState } from "react";

import arrowUp from "../icons/arrowUp.svg";
import arrowDown from "../icons/arrowDown.svg";
import "./../styling/FAQSection.css";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is HomePro?",
      answer:
        "HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
    },
    {
      question:
        "Are the service providers on HomePro reliable and qualified?",
      answer:
        "All service providers are carefully screened and reviewed to ensure quality and reliability.",
    },
    {
      question:
        "What if I have an issue or complaint about a service provider?",
      answer:
        "Our support team is available to assist you and help resolve any issues quickly.",
    },
    {
      question: "How are payments handled on HomePro?",
      answer:
        "Payments are securely processed through our platform for a safe and convenient experience.",
    },
    {
      question: "How do I leave a review for a service provider?",
      answer:
        "After a completed service, you'll have the option to leave a review directly through your account.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-grid">
          {/* Left Side */}
          <div className="faq-left">
            <h2 className="faq-title">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="faq-help">
              Still need help?{" "}
              <a href="#">Get Help Now</a>
            </p>
          </div>

          {/* Right Side */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item-wrapper">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`faq-question ${openIndex === index ? "active" : ""}`}
                >
                  <div className="faq-content">
                    <h3>{faq.question}</h3>
                    {openIndex === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </div>
                  <img
                    src={openIndex === index ? arrowUp : arrowDown}
                    alt=""
                    className="faq-arrow"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;