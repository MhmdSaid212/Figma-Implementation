import "./../styling/ServicesSection.css";

import wrenchIcon from "../icons/wrench.svg";
import roofIcon from "../icons/roof.svg";
import bricksIcon from "../icons/bricks.svg";
import trunkIcon from "../icons/trunk.svg";
import maintenanceIcon from "../icons/maintenance.svg";
import bathtubIcon from "../icons/bathtub.svg";
import doorhandleIcon from "../icons/doorhandle.svg";

function ServicesSection() {
  const services = [
    {
      icon: wrenchIcon,
      title: "Plumbing services",
      description: "Drain pipe leaking, pipe clogged, replace the pipe line",
    },
    {
      icon: roofIcon,
      title: "Roofing repair",
      description: "Roof leaks, tile replacement, roof cleaning and maintenance",
    },
    {
      icon: bricksIcon,
      title: "Mold Removal",
      description: "Removing and cleaning mildew, Restoration and Prevention",
    },
    {
      icon: trunkIcon,
      title: "Tree Trimming",
      description: "Trimming and cleaning, Deadwood removal, Tree shaping",
    },
    {
      icon: maintenanceIcon,
      title: "Appliance Repair",
      description:
        "Repair of washing machines, refrigerators, Air conditioner, etc",
    },
    {
      icon: bathtubIcon,
      title: "Bathroom Remodeling",
      description:
        "Design and Consulting, installation, Repairing, tile repair",
    },
    {
      icon: doorhandleIcon,
      title: "Locksmith",
      description:
        "Lock Installation and Repair, Duplication, Lock Rekeying",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h2 className="services-title">
            Our Services
          </h2>

          <p className="services-description">
            You have problems with leaking pipes, broken tiles, lost keys or
            want to tidy up the trees around you, of course you need our help!
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
            >
              <div className="service-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                />
              </div>

              <h3 className="service-title">
                {service.title}
              </h3>

              <p className="service-text">
                {service.description}
              </p>
            </div>
          ))}

          <div className="service-cta">

            <h3>
              More
              <br />
              service?
            </h3>

            <p>
              You can tell us what you need and we can help!
            </p>

            <button>
              Call Us Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;