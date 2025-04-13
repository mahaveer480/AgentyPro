import './css/pricingsec.css'
import React, { useState } from 'react';
import tickIcon from '../assets/icons/right.png'; // tick icon
import crossIcon from '../assets/icons/wrong.png'; // cross icon
import saveImg from '../assets/icons/upogrop.png'; // Save 20% image

const features = [
  { text: "Up to 10 conversations/month", included: true },
  { text: "Up to 2 minutes of human-like AI voice calls", included: true },
  { text: "Access to 1 prebuilt funnel by industry", included: true },
  { text: "Integration with WhatsApp Business only", included: true },
  { text: "Basic CRM included", included: true },
  { text: "No voice cloning (default voice only)", included: false },
  { text: "No multi-user access", included: false },
  { text: "No onboarding meeting (self-guided tutorials only)", included: false },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pricing-section">
    <div className="pricing-container">
      <div className="pricing-header">
        <h2>Powerful Features For Powerful<br /> Businesses</h2>
        <p>Choose a plan that’s right for you</p>
        <div className="toggle-wrapper">
          <span>Pay Monthly</span>
          <div className={`toggle-switch ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(!isYearly)}>
            <span className="toggle-thumb"></span>
          </div>
          <span>Pay Yearly</span>
          <img src={saveImg} alt="Save 20%" className="save-img" />
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default PricingSection;
