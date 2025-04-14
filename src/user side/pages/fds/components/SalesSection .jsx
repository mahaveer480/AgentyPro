// SalesSection.jsx
import React from "react";
import "./css/SalesSection.css";
import imageOnLeftSide from "../assets/Screenshot 2025-04-15 003443.png";

const SalesSection = () => {
  return (
    <div className="sales-section">
      <div className="sales-left">
        <img src={imageOnLeftSide} alt="Dashboard Preview" className="decorative-img" />
      </div>

      <div className="sales-right">
      <h1 id="headerofsaleseaction">
        
        <span>   Boost revenue  </span>
          <strong>with data-driven decisions</strong>
        </h1>
        <p>
          Get real-time insights, streamline your sales pipeline, and boost your team’s productivity with our cutting-edge Sales Overview platform.
        </p>
        <div className="tag-buttons">
          <button>💰 Money</button>
          <button>📈 Revenue</button>
          <button>🚀 Boost Sales</button>
          <button>📊 Sales Analytics</button>
          <button>🛠 Sales Management</button>
        </div>
        <button className="cta-button">Get Started for Free</button>
      </div>
    </div>
  );
};

export default SalesSection;
