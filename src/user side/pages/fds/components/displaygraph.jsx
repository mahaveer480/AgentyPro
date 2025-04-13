import React from 'react';
import './css/displaygraph.css';
import DashboardImg from '../assets/das.png';
import AnalyticsImg from '../assets/graphimage.png';

const ResponsiveDisplay = () => {
  return (
    <section className="display-wrapper">
      {/* PC/Laptop view */}
      <div className="image-container pc-only">
        <img src={DashboardImg} alt="Dashboard View" className="image shadow" />
      </div>

      {/* Mobile/Tablet view */}
      <div className="image-container mobile-only">
        <img src={AnalyticsImg}alt="Predictive AI Analytics" className="image shadow" />
      </div>
    </section>
  );
};

export default ResponsiveDisplay;
