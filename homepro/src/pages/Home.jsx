import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ReviewsSection from "../components/ReviewsSection";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      
      <Hero />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ReviewsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
        <Footer />
    </>
  );
}

export default Home;