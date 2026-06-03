import "./../styling/BlogSection.css";

import phone from "../images/phone.png";
import workers from "../images/workers.png";
import paint from "../images/paint.png";

function BlogSection() {
  const blogs = [
    {
      image: phone,
      date: "19 Jan 2023",
      title: "Understanding Smart Home Systems & Maintenance",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
    },
    {
      image: workers,
      date: "19 Jan 2023",
      title: "The Ultimate Guide to Home Repairs and Renovations",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
    },
    {
      image: paint,
      date: "19 Jan 2023",
      title: "Painting Techniques for a Kitchen Refresh",
      description:
        "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">

        <div className="blog-header">

          <h2 className="blog-title">
            Explore Insights in Our Blog
          </h2>

          <p className="blog-subtitle">
            Find lots of insights and information on our blog. Explore,
            learn, and get inspired today.
          </p>

        </div>

        <div className="blog-grid">

          {blogs.map((blog, index) => (
            <article
              key={index}
              className="blog-card"
            >
              <img
                src={blog.image}
                alt=""
                className="blog-image"
              />

              <p className="blog-date">
                {blog.date}
              </p>

              <h3 className="blog-card-title">
                {blog.title}
              </h3>

              <p className="blog-description">
                {blog.description}
              </p>

              <div className="blog-tags">

                <span className="blog-tag">
                  Plumbing
                </span>

                <span className="blog-tag">
                  Architecture
                </span>

                <span className="blog-tag">
                  Maintenance
                </span>

              </div>

            </article>
          ))}

        </div>

        <div className="blog-view-more">

          <button className="view-more-btn">

            <span>View More</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 5L16 12L8 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

        </div>

      </div>
    </section>
  );
}

export default BlogSection;