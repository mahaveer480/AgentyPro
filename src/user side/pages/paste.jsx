import React from 'react';
import SideNavigation from '../components/sidebar';
import '../styles/paste.css';
import robot from '../images/robot.png';
import whatsapp from '../images/whatsapp.png';

export default function Paste() {
  return (
    <>
      <SideNavigation />

      {/* Main Container */}
      <section className="agent-mgmt_container">
        <div className="agent-mgmt-sidebar">Sidebar content</div>

        <div style={{ width: "100%" }}>
          {/* Page Title and Search */}
          <div className="Channel_Management" style={{ paddingLeft: "85px" }}>
            <h2 className="Channel_Management_Title">AI Agent Management</h2>
            <div className="search-container">
              <input type="text" className="search-bar-with-icon" placeholder="Search settings..." />
              <span className="search-icon" />
            </div>
          </div>

          {/* Page Content */}
          <div className="agent-mgmt-wrapper">
            {/* Mobile Header */}
            <div className="agent-mgmt-mobile-header">
              <button className="agent-mgmt-back-btn">←</button>
            </div>

            {/* Desktop View */}
            <div className="agent-mgmt-desktop-view">
              {/* Left: Bot Cards */}
              <div className="agent-mgmt-sidebar-panel">
                <div className="agent-mgmt-bot-list">
                  {['Sales Bot', 'Price Bot', 'Support Bot', 'Info Bot'].map((bot, i) => (
                    <div key={i} className="agent-mgmt-bot-card">
                      <div className="agent-mgmt-card-header">
                        <img src={robot} alt="bot" className="agent-mgmt-bot-img" />
                      </div>
                      <div className="agent-mgmt-card-body">
                        <h4 className="agent-mgmt-card-Title">{bot}</h4>
                        <div className="agent-mgmt-status">Active</div>
                      </div>
                      <div className="agent-mgmt-card-menu agent-mgmt-menu">→</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center: Create Agent Form */}
              <div className="agent-mgmt-form-section">
                <form className="agent-mgmt-form">
                  <label className="agent-mgmt-label">Name</label>
                  <input type="text" placeholder="Name" />

                  <label className="agent-mgmt-label">Function</label>
                  <input type="text" placeholder="Function" />

                  <label className="agent-mgmt-label">Assigned Channel</label>
                  <input type="text" placeholder="Assigned Channel" />

                  <div className="agent-mgmt-row-inputs">
                    <div className="IndustryTone_con">
                      <label className="agent-mgmt-label">Tone Style</label>
                      <input type="text" placeholder="Tone Style" />
                    </div>
                    <div className="IndustryTone_con">
                      <label className="agent-mgmt-label">Industry</label>
                      <input type="text" placeholder="Industry" />
                    </div>
                  </div>

                  <button type="submit">Create</button>
                </form>
              </div>

              {/* Right: Created Agent Cards */}
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
