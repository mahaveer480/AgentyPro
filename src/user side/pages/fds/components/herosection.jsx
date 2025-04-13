import React from 'react';
import './css/herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* ✨ Welcome Box (Optional) */}
        <p className="welcome-text">✨ Welcome to Talkeen</p>

        {/* 💻 PC version */}
        <div className="hero-text pc-only">
          <h1 className="hero-heading">
            The Commercial Brain Behind Your Business.
          </h1>
          <p className="hero-subtext">
            Talkeen is the ultra-intelligent AI system that thinks, speaks, and sells for you — on WhatsApp, voice calls, and more.
          </p>
        </div>

        {/* 📱 Mobile & Tablet version */}
        <div className="hero-text mobile-only">
          <h1 className="hero-heading">Say goodbye to bots. Say hello to Talkeen</h1>
          <p className="hero-subtext">
            Talkeen is the AI revolution that transforms boring, robotic chats into intelligent, human-like conversations that feel real — and drive results.
            <br /><br />
            From sales and support to bookings and quotes, our AI agents sound like real people, work 24/7, and never make mistakes.
            <br /><br />
            They talk. They listen. They convert. Automatically.
          </p>
        </div>

        {/* ✅ Buttons - Always visible */}
        <div className="cta-buttons">
      <button className="primary-btn">Start Free – No Card Needed</button>
      <button className="secondary-btn">
        <span className="play-icon">▶</span> Watch Talkeen in Action
      </button>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
