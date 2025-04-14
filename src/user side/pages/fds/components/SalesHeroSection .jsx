import React from "react";
import "../components/css/SalesHeroSection.css";
import footeroffooterimg from '../assets/footerof footerimage.png'

const SalesHeroSection = () => {
  return (
    <section className="sales-hero">
      <div className="sales-hero-content">
        <h1>
          Enhance <span>Sales</span> Performance with <br /> Intelligent Analytics
        </h1>
        <p>Gain Deep Insights, Optimize Performance, and Drive Revenue Growth</p>
        <button className="cta-button">Get Started for Free</button>
      </div>

      <div className="flow-steps3">
        <img src={footeroffooterimg}  className="flow-steps-img" alt="" />
      </div>
    </section>
  );
};

export default SalesHeroSection;
