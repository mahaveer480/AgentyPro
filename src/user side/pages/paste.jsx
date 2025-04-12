import React from 'react';
import SideNavigation from '../components/sidebar'
import '../styles/paste.css'
import robot from '../images/robot.png';
import whatsapp from '../images/whatsapp.png';

export default function paste() {
  return (
    <>
    <SideNavigation/>
      {/* Main Container */}
      <section className='agent-mgmt_container'>
        {/* Sidebar placeholder (visible >1200px) */}
        <div className="agent-mgmt-sidebar">Sidebar content</div>

        {/* Main content area */}
        <div style={{ width: "100%" }}>
          {/* Desktop Header */}
          {/* <header className="agent-mgmt-header">
            <h2>AI Agent Management</h2>
            <div className="agent-mgmt-search-container">
              <input
                type="text"
                className="agent-mgmt-search-input"
                placeholder="Search settings..."
              />
              <span className="agent-mgmt-search-icon">🔍</span>
            </div>
          </header> */}

          {/* Page Wrapper */}
          <div className="agent-mgmt-wrapper">
            {/* Mobile Header */}
            <div className="agent-mgmt-mobile-header">
              <button className="agent-mgmt-back-btn">←</button>
              <h2>AI Agent Management</h2>
            </div>

            {/* Desktop Layout */}
            <div className="agent-mgmt-desktop-view">
              {/* Sidebar Bot Cards */}
              <div className="agent-mgmt-sidebar-panel">
                <h2 className="agent-mgmt-title">AI Agent Management</h2>
                <div className="agent-mgmt-bot-list">
                  {['Sales Bot', 'Price Bot', 'Support Bot', 'Info Bot'].map((bot, i) => (
                    <div key={i} className="agent-mgmt-bot-card">
                      <div className="agent-mgmt-card-header">
                        <img src={robot} alt="bot" className="agent-mgmt-bot-img" />
                       
                      </div>
                      <div className="agent-mgmt-card-body">
                        <h4 className='agent-mgmt-card-Title'>Selamon Bot</h4>
                        <div className="agent-mgmt-status">Active</div>
                      </div>
                      <div className="agent-mgmt-card-menu agent-mgmt-menu">→</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent Form Section */}
              <div className="agent-mgmt-form-section">
                <form className="agent-mgmt-form">
                  <label className="agent-mgmt-label">Name</label>
                  <input type="text" placeholder="Name" />

                  <label className="agent-mgmt-label">Function</label>
                  <input type="text" placeholder="Function" />

                  <label className="agent-mgmt-label">Assigned Channel</label>
                  <input type="text" placeholder="Assigned Channel" />

                  {/* Row for Tone Style and Industry */}
                  <div className="agent-mgmt-row-inputs">
                    <div className='IndustryTone_con'>
                      <label className="agent-mgmt-label">Tone Style</label>
                      <input type="text" placeholder="Tone Style" />
                    </div>
                    <div className='IndustryTone_con'>
                      <label className="agent-mgmt-label">Industry</label>
                      <input type="text" placeholder="Industry" />
                    </div>
                  </div>

                  <button type="submit">Create</button>
                </form>
              </div>

              {/* Created Agent Cards */}
              <div className="agent-mgmt-right-panel">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="agent-mgmt-created-card">
                    <div className="agent-mgmt-card-header">
                      <img src={robot} alt="bot" className="agent-mgmt-bot-img" />
                      <div>
                        <img src={whatsapp} alt="whatsapp" className="agent-mgmt-whatsapp-icon" />
                        <span className="agent-mgmt-formal-label">Formal</span>
                      </div>
                    </div>
                    <div className="agent-mgmt-card-body">
                      <h4>Selamon Bot</h4>
                      <div className="agent-mgmt-status">Active</div>
                    </div>
                    <div className="agent-mgmt-card-menu">⋯</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
