import React, { useState } from 'react';
import '../styles/binance.css';
import profilePicture from '../images/profilepicturedummy.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from '../components/sidebar';

export default function Binance() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleIndustryDropdown = () => {
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
    setIsIndustryDropdownOpen(false);
  };

  return (
    <>
      <SideNavigation />

      <div className="Channel_Management" style={{ paddingLeft: '260px' }}>
        <h2 className="Channel_Management_Title">General</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-bar-with-icon"
            placeholder="Search settings..."
          />
          <span className="search-icon"></span>
        </div>
      </div>

      <div className="binance-container">
        {/* Logo Upload Section */}
        <div className="logo-upload-main">
          <div className="logo-upload">
            <div style={{ display: 'flex' }}>
              <img className="logo-placeholder" src={profilePicture} alt="profile" />
              <p>Upload Logo</p>
            </div>
            <button className="upload-btn">Upload</button>
          </div>

          {/* Animated Dropdown Form */}
          <div className="form-section-main">
            <div className="form-section">
              {/* Language Dropdown */}
              <label className="input-label">Preferred Language</label>
              <div
                className={`select-box ${isLanguageDropdownOpen ? 'open' : ''}`}
                onClick={toggleLanguageDropdown}
              >
                {selectedLanguage || 'Select Language'}
                <span className={`arrow ${isLanguageDropdownOpen ? 'rotated' : ''}`}>›</span>
              </div>
              {isLanguageDropdownOpen && (
                <ul className="dropdown-list">
                  {['English', 'Hindi', 'Spanish', 'French'].map((language, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              )}

              {/* Industry Dropdown */}
              <label className="input-label">Industry</label>
              <div
                className={`select-box ${isIndustryDropdownOpen ? 'open' : ''}`}
                onClick={toggleIndustryDropdown}
              >
                {selectedIndustry || 'Select Industry'}
                <span className={`arrow ${isIndustryDropdownOpen ? 'rotated' : ''}`}>›</span>
              </div>
              {isIndustryDropdownOpen && (
                <ul className="dropdown-list">
                  {['Tech', 'Healthcare', 'Finance'].map((industry, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleIndustryChange(industry)}
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* API Section */}
        <hr className="divider" />
        <p className="sub-heading">API Integrations</p>

        <div className="integration-section">
          {/* Google Calendar Connect */}
          <div className="integration-row">
            <span>Google Calendar</span>
            <button className="connect-btn">Connect</button>
          </div>

          {/* CRM API Key */}
          <div className="crm-input">
            <p>CRM</p>
            <input type="text" placeholder="Enter API Key" />
          </div>

          {/* Day Toggles */}
          <div className="day-toggle">
            <span className="day-toggle-span">Tuesday</span>
            <div>
              <span className="badge">9:00 AM</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>
          </div>

          <div className="day-toggle">
            <span className="day-toggle-span">Saturday</span>
            <div>
              <span className="badge">Closed</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save / Cancel Buttons */}
        <div className="action-buttonseditsave">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </>
  );
}
