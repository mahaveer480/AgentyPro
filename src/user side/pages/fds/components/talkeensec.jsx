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
        <p className="badge">✨ How It works</p>
        <h2>How Talkeen Transforms Your Customer Experience</h2>
        <p className="subtitle">Automate, Humanize & Grow Your Business 24/7</p>
        <div className="buttons">
          <button className="primary-btn">Meet Your New Sales Assistant</button>
          <button className="secondary-btn">Explore Real Use Cases</button>
        </div>
        <div className="cards">
          <div className="card fade-in">
            <img src={iconraper} alt="Connect" />
            <h4>Connect & Integrate</h4>
            <p>Easily connect WhatsApp, Instagram, WebChat, and CRM to unify every customer conversation.</p>
          </div>
          <div className="card fade-in delay-1">
            <img src={iconwrer} alt="Automate" />
            <h4>Automate with Human Touch</h4>
            <p>Deploy AI agents that speak like humans, handle questions, close sales, 24/7.</p>
          </div>
          <div className="card fade-in delay-2">
            <img src={databas} alt="Track" />
            <h4>Track, Learn & Optimize</h4>
            <p>Use AI insights to detect opportunities and trigger campaigns.</p>
          </div>
        </div>

        {/* Desktop-only image */}
        <div className="section-image desktop-only">
          <img src={desktopimg} alt="Desktop visual" />
        </div>
      </section>

      {/* Section 2 - Mobile/Tablet Only */}
      <section className="talkeen-mobile-section">
        <p className="badge">✨ Our strategies</p>
        <h2>How Talkeen Works in <br />3 Simple Steps</h2>
        <p className="subtitle">Automate Customer Engagement & Boost Business Growth</p>
        <div className="buttons">
          <button className="primary-btn">Get a demo</button>
          <button className="secondary-btn">Research</button>
        </div>
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
    <h2 className="talkeen-desktop-title">What Talkeen Does for You</h2>
    <p className="talkeen-desktop-subtitle">
      Automate conversations, boost sales, and simplify customer engagement —
      all with AI agents that understand, talk, and act like real humans.
      <br />
      No delays. No missed leads. Just smart, efficient automation working 24/7 for your business.
    </p>

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

  <div className="why-cards">
    <div className="why-card slide-up">
      <img src={iconwrer} alt="Connect" className="card-icon" />
      <h4>Connect Communication Channels</h4>
      <p>Easily connect WhatsApp, Instagram, Facebook Messenger, Webchat, and more.</p>
      <span className="card-tags">Finance, Retail, E-commerce</span>
    </div>

    <div className="why-card slide-up delay-1">
      <img src={start} alt="Pre-trained AI" className="card-icon" />
      <h4>Choose a Pre-trained AI Agent (Per Industry)</h4>
      <p>Select from a library of AI agents trained for specific industries like healthcare, real estate, etc.</p>
      <span className="card-tags">Tech, Healthcare, Manufacturing</span>
    </div>

    <div className="why-card slide-up delay-2">
      <img src={busines} alt="Customize" className="card-icon" />
      <h4>Customize with Your Business</h4>
      <p>Craft dashboards using drag-and-drop tools to match your brand’s goals.</p>
      <span className="card-tags">Marketing, Sales, Operations</span>
    </div>

    <div className="why-card slide-up delay-3">
      <img src={vector} alt="Train Agent" className="card-icon" />
      <h4>Train the Agent (Optional)</h4>
      <p>Use real-time data to keep the agent informed and making decisions.</p>
      <span className="card-tags">E-commerce, Logistics, Supply Chain</span>
    </div>

    <div className="why-card slide-up delay-4">
      <img src={voice} alt="Voice Cloning" className="card-icon" />
      <h4>Enable Voice Cloning</h4>
      <p>Easily personalize your agent’s tone and voice to match your brand.</p>
      <span className="card-tags">Finance, Healthcare, Legal</span>
    </div>

    <div className="why-card slide-up delay-5">
      <img src={control} alt="Launch Automate" className="card-icon" />
      <h4>Launch & Automate Interactions</h4>
      <p>Work with collaborative features to scale faster.</p>
      <span className="card-tags">Design, Development, PM</span>
    </div>

    <div className="why-card slide-up delay-5">
      <img src={automotive} alt="Launch Automate" className="card-icon" />
      <h4>Launch & Automate Interactions</h4>
      <p>Work with collaborative features to scale faster.</p>
      <span className="card-tags">Design, Development, PM</span>
    </div>

    <div className="why-card slide-up delay-5">
      <img src={aio} alt="Launch Automate" className="card-icon" />
      <h4>Launch & Automate Interactions</h4>
      <p>Work with collaborative features to scale faster.</p>
      <span className="card-tags">Design, Development, PM</span>
    </div>
  </div>
</section>
<section className="display-wrapper">
      {/* PC/Laptop view */}
      <div className="image-container pc-only">
        <img src={displaygraph} alt="Dashboard View" className="image shadow" />
      </div>
    </section>




    <section className="talkeen-desktop-v2">
  <div className="talkeen-desktop-wrapper-v2">
    <h2 className="talkeen-desktop-title-v2">Why Talkeen is Different</h2>
    <p className="talkeen-desktop-subtitle-v2">
    Smart AI-Powered Automation That Actually Feels Human
    </p>

    <div className="talkeen-desktop-grid-v2">
      <div className="talkeen-card-v2">
        <img src={iconwrer} alt="Connect & Integrate" className="talkeen-card-icon-v2" />
        <h3>Connect Communication Channels</h3>
        <p>Easily link WhatsApp, Instagram, Messenger, WebChat, and CRM in one unified inbox</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={start} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={busines} alt="Track & Grow" className="talkeen-card-icon-v2" />
        <h3>Customize It with Your Business Info</h3>
        <p>Edit name, services, pricing, tone, FAQs and more — so your agent truly represents your brand.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={vector} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={voice} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={automotive} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={aio} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

      <div className="talkeen-card-v2">
        <img src={control} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

     
      

      <div className="talkeen-card-v2">
        <img src={start} alt="Automate & Engage" className="talkeen-card-icon-v2" />
        <h3>Choose a Pre-trained AI Agent (by Industry)</h3>
        <p>Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.</p>
      </div>

     
    </div>

    <div className="talkeen-desktop-buttons-v2">
      <button className="talkeen-desktop-btn-secondary-v2">Explore more application</button>
    </div>
  </div>
</section>

    </>
  );
};

export default TalkeenSection;
