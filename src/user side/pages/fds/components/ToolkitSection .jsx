import React from "react";
import "./css/ToolkitSection.css";

// Replace these imports with your actual image paths
import centralLogo from "../../../images/agentyproLogo.png";
import notion from "../../../images/facebook (1).png";
import slack from "../../../images/Email.png";
import opera from "../../../images/chrome.png";
import figma from "../../../images/Instagram.png";
import chrome from "../../../images/google (1).png";
import messenger from "../../../images/Facebook Messenger.png";

const ToolkitSection = () => {
  return (
    <div className="toolkit-section">
      <p className="toolkit-subtitle">
        Replace your finance management tool, and more.
      </p>
      <h2 className="toolkit-title">
        Simplify your creative <strong>Talkeen</strong>
      </h2>

      <div className="toolkit-logo">
        <img src={centralLogo} alt="Central Logo" />
      </div>

      <div className="toolkit-icons">
        <img src={notion} alt="Notion" />
        <img src={slack} alt="Slack" />
        <img src={opera} alt="Opera" />
        <img src={figma} alt="Figma" />
        <img src={chrome} alt="Chrome" />
        <img src={messenger} alt="Messenger" />
      </div>
    </div>
  );
};

export default ToolkitSection;
