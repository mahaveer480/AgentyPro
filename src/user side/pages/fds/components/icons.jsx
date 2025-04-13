import React from 'react';
import './css/responsiveicons.css';
import chatgpt from '../assets/icons/ChatGPT.png'
import eleven from '../assets/icons/ElevenLabs.png'
import twilo from '../assets/icons/Twilio.png'
import stipe from '../assets/icons/Stripe.png'
import ispm from '../assets/icons/ispm.png'
import Logos from '../assets/icons/Logo.png'
import icon from '../assets/icons/icono.png'
import logis from '../assets/icons/logiss.png'
import logolast from '../assets/icons/logislast.png'
import logispm from '../assets/icons/logoispm.png'
import dot from '../assets/icons/dot.png'


const ResponsiveLogos = () => {
  return (
    <div className="logos-container">
      {/* Top Text */}
      <p className="top-text">
        160,000+ customers in over 120 countries grow their businesses with Neuros
      </p>

      {/* Mobile/Tablet Logos */}
      <div className="logos mobile-layout">
        <img src={ispm} alt="logo1" />
        <img src={logis} alt="logo2" />
        <img src={icon} alt="logo3" />
        <img src={dot}alt="logo4" />
        <img src={logispm} alt="logo5" />
        <img src={logolast}s alt="logo6" />
      
      </div>

      {/* Desktop Layout - Four Icons Only */}
      <div className="desktop-layout">
        <p className="powered-text">
          Powered by World-Class AI & Automation Technologies<br />
          We build with the best — so you don’t have to.
        </p>
        <div className="icons">
          <img src={chatgpt} alt="icon1" />
          <img src={eleven} alt="icon2" />
          <img src={twilo} alt="icon3" />
          <img src={stipe} alt="icon4" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLogos;
