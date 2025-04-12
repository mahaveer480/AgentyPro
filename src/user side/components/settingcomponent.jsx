// SettingComponent.jsx
import React from 'react';
import '../styles/setting1.css';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import SideNavigation from './sidebar';

export default function SettingComponent() {
  return (<>

  <SideNavigation />
    <div className="support-container">
      <h1 className="support-title">Help Center & Support</h1>
      <div className="support-box">
        <div className="support-left">
          <div className="faq-section">
            <h3>FAQ</h3>
            <ul>
              <li>How do I reset my password? <FiArrowRight /></li>
              <li>How to change my plan? <FiArrowRight /></li>
              <li>Is there a trial period? <FiArrowRight /></li>
              <li>Where can I view my invoices? <FiArrowRight /></li>
            </ul>
          </div>
          <div className="tutorials-section">
            <h4>Tutorials</h4>
            <ul>
              <li><HiOutlineExternalLink /> Getting Started <FiArrowRight /></li>
              <li><HiOutlineExternalLink /> Managing Your Account <FiArrowRight /></li>
              <li><HiOutlineExternalLink /> Billing & Payments <FiArrowRight /></li>
            </ul>
          </div>
        </div>
        <div className="support-right">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </div>
        <div className="chat-icon">
          💬
        </div>
      </div>
    </div>
  
  </>
  );
}
