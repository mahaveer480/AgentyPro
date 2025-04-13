import React from 'react';
import './css/footer.css';
import logo from '../assets/talkeenlogo.png'; // Replace with your actual logo path
import fbIcon from '../assets/icons/Ficon.png';
import instaIcon from '../assets/icons/L icon.png';
import twitterIcon from '../assets/icons/Xicon.png';
import linkedinIcon from '../assets/icons/linkedinicon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Talkeen Logo" className="footer-logo" />
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Talkeen</h4>
            <p>Company Overview</p>
            <p>Careers</p>
            <p>Press & Media</p>
            <p>Testimonials</p>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Webinars & Events</p>
            <p>Case Studies</p>
          </div>
          <div className="footer-column">
            <h4>Support & Contact</h4>
            <p>Contact Us</p>
            <p>Technical Support</p>
            <p>Feedback</p>
            <p>Community Forum</p>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <div className="social-icons-vertical">
  <div className="social-row">
    <img src={fbIcon} alt="Facebook" />
    <span>Facebook</span>
  </div>
  <div className="social-row">
    <img src={instaIcon} alt="Instagram" />
    <span>Instagram</span>
  </div>
  <div className="social-row">
    <img src={twitterIcon} alt="Twitter / X" />
    <span>Twitter / X</span>
  </div>
  <div className="social-row">
    <img src={linkedinIcon} alt="LinkedIn" />
    <span>Linkedin</span>
  </div>
</div>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 Talkeen · All rights reserved.</p>
        <div className="footer-links">
          <p>Term of use</p>
          <p>Privacy policy</p>
          <p>Security</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
