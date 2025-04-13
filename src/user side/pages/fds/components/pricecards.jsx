import React from "react";
import "./css/pricecards.css"; // CSS in a separate file
import righticon from '../assets/icons/right.png'
const plans = [
  
  {
    title: "Plan Free",
    subtitle: "For Testing the Power of Talkeen",
    price: "$0",
    features: [
      "Up to 10 conversations/month",
      "Up to 2 minutes of human-like AI voice calls",
      "Access to 1 prebuilt funnel by industry",
      "Integration with WhatsApp Business only",
      "Basic CRM included",
      "No voice cloning (default voice only)",
      "No multi-user access",
      "No onboarding meeting (self-guided tutorials only)"
    ]
  },
  
  
  {
    title: "Starter Plan",
    subtitle: "All Essentials to Start Automating",
    price: "$79",
    features: [
      "Up to 750 conversations/month",
      "10 minutes of AI voice calls",
      "Default AI voice (no cloning)",
      "Prebuilt funnels access",
      "CRM integration",
      "Multichannel support",
      "Tutorials and resources",
      "Usage dashboard",
      "1 implementation meeting",
    ],
  },
  {
    title: "Professional",
    subtitle: "Full Automation + CRM Power",
    price: "$179",
    highlight: true,
    features: [
      "Up to 2100 conversations/month",
      "20 minutes of AI voice calls",
      "1 personalized voice clone",
      "Unlimited AI agents",
      "Funnel customization",
      "Campaign automation",
      "Full CRM + multichannel",
      "Role-based access",
      "Priority support",
      "Advanced dashboard",
      "1 advanced meeting",
    ],
  },
  {
    title: "Enterprise",
    subtitle: "Full Customization and Scale",
    price: "$279",
    features: [
      "Up to 4500 conversations/month",
      "45 minutes of AI voice calls",
      "2 personalized voice clones",
      "Advanced flow logic",
      "Industry-based funnels",
      "Early access to features",
      "Full CRM + integrations",
      "All-channel support",
      "Role permissions",
      "Strategic support",
      "1 strategic meeting",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-section">
      {plans.map((plan, index) => (
        <div
          className={`card ${plan.highlight ? "highlight" : ""}`}
          key={index}
        >
          <h3>{plan.title}</h3>
          <p>{plan.subtitle}</p>
          <div className="price">
            {plan.price} <span>/ Month</span>
          </div>
          <a href="#" className="btn">
            Get Started Now
          </a>
          <ul className="features">
            {plan.features.map((feature, i) => (
              <li key={i}>
                <img src={righticon} alt="check icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
