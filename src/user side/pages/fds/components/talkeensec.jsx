import React from "react";
import './css/respcards.css'
import './css/tal.css'
import "./css/talkeensec.css";
import './css/displaygraph.css'
import desktopimg from '../assets/graphimage.png';
import containerimg from '../assets/containerimage.png';
import iconraper from '../assets/icons/Icon wraer.png';
import iconwrer from '../assets/icons/Icon wrapper.png';
import databas from '../assets/icons/server databases data code.png';
import frame from '../assets/icons/Frame.png'
import fram1 from '../assets/icons/Frame (1).png'
import seting from '../assets/icons/Group.png'
import start from '../assets/icons/star.png'
import busines from '../assets/icons/busines.png'
import vector from '../assets/icons/Vector.png'
import voice from '../assets/icons/voice.png'
import control from '../assets/icons/control.png'
import aio from '../assets/icons/aio.png'
import automotive from '../assets/icons/automative.png'
import displaygraph from '../assets/containerimage.png'

const TalkeenSection = () => {
  return (
    <>
      {/* Section 1 - Desktop Only */}
      <section className="talkeen-desktop-section">
      <div className="testimonial-wrapper">
  <div className="testimonial-card1">
    <p>“Easily connect WhatsApp, Instagram, WebChat, and CRM to unify every customer conversation.”</p>
    <div className="testimonial-logo">
      <img src={iconraper} alt="Connect" />
      <span>Cloud</span>
    </div>
  </div>

  <div className="testimonial-card">
    <p>“Deploy AI agents that speak like humans, handle questions, close sales, 24/7.”</p>
    <div className="testimonial-logo">
      <img src={iconwrer} alt="Automate" />
      <span>hues</span>
    </div>
  </div>

  <div className="testimonial-card">
    <p>“Use AI insights to detect opportunities and trigger campaigns.”</p>
    <div className="testimonial-logo">
      <img src={databas} alt="Track" />
      <span>Greenish</span>
    </div>
  </div>
</div>


        {/* Desktop-only image */}
        <div className="section-image desktop-only">
          <img src={desktopimg} alt="Desktop visual" />
        </div>
      </section>

      {/* Section 2 - Mobile/Tablet Only */}
      <section className="talkeen-mobile-section">
   
        <div className="cards">
          <div className="card slide-up">
            <img src={iconraper} alt="Connect" />
            <h4>Connect & Integrate</h4>
            <p>Link WhatsApp, Instagram, WebChat, and CRM to one place.</p>
          </div>
          <div className="card slide-up delay-1">
            <img src={iconwrer} alt="Automate" />
            <h4>Automate & Engage</h4>
            <p>Use AI WhatsApp bots to capture leads & respond instantly.</p>
          </div>
          <div className="card slide-up delay-2">
            <img src={databas} alt="Track" />
            <h4>Track & Grow</h4>
            <p>Monitor with analytics, automate follow-ups, and scale up.</p>
          </div>
        </div>

        {/* Mobile-only image */}
        <div className="section-image mobile-only">
          <img src={containerimg} alt="Mobile visual" />
        </div>
      </section>

       {/* Desktop Only - What Talkeen Does for You */}
<section className="talkeen-desktop-features">
  <div className="talkeen-desktop-wrapper">
 

    <div className="talkeen-desktop-features-grid">
      <div className="talkeen-feature-card">
        <img src={frame} alt="Human-like agents" />
        <h3>Human-like agents, smarter than ever</h3>
        <p>They talk. They book. They solve. All without you lifting a finger.</p>
        <a href="#">Read More →</a>
      </div>

      <div className="talkeen-feature-card">
        <img src={fram1} alt="Automate forever" />
        <h3>Connect once, automate forever</h3>
        <p>From WhatsApp to CRM — Talkeen keeps your entire business in sync and running on autopilot.</p>
        <a href="#">Read More →</a>
      </div>

      <div className="talkeen-feature-card">
        <img src={seting} alt="Scale growth" />
        <h3>More time, more revenue</h3>
        <p>While Talkeen handles clients, you focus on scaling.</p>
        <a href="#">Read More →</a>
      </div>
    </div>

    <div className="talkeen-desktop-button-wrapper">
      <button className="talkeen-desktop-button">More About Platform</button>
    </div>
  </div>
</section>


<section className="why-talkeen-mobile only-mobile-tablet">
<div className="badge-container">
  <div className="badge-wrapper">
    <span className="badicon">✨</span>
    <span className="badge-text">Why AgentyPro?</span>
  </div>
</div>


  <h2 className="section-title">Why Choose Talkeen?</h2>
  <p className="section-subtitle">
    Smart AI-Powered Automation for Seamless Customer Engagement
  </p>

 
</section>
<section className="display-wrapper">
      {/* PC/Laptop view */}
      <div className="image-container pc-only">
        <img src={displaygraph} alt="Dashboard View" className="image shadow" />
      </div>
    </section>




    </>
  );
};

export default TalkeenSection;
