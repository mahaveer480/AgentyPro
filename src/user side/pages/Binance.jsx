import React, { useState } from 'react';
import '../styles/binance.css'; // Make sure this path is correct
import profilepicture from '../images/profilepicturedummy.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from '../components/sidebar';

export default function Binance() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const toggleLanguageDropdown = () => setLanguageOpen(!languageOpen);
  const toggleIndustryDropdown = () => setIndustryOpen(!industryOpen);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
  };

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
    setIndustryOpen(false);
  };

  return (
    <>
      <SideNavigation />
      <div className="Channel_Management" style={{ paddingLeft: "85px" }}>
        <h2 className="Channel_Management_Title">General</h2>
        <div className="search-container">
          <input type="text" className="search-bar-with-icon" placeholder="Search settings..." />
          <span className="search-icon"></span>
        </div>
      </div>

      <div className="binance-container">
        <div className="logo-upload-main">
          <div className="logo-upload">
            <div style={{ display: "flex" }}>
              <img className="logo-placeholder" src={profilepicture} alt="profile" />
              <p>Upload Logo</p>
            </div>
            <button className="upload-btn">Upload</button>
          </div>

          {/* Form Section with Animated Dropdowns */}
          <div className="form-section-main">
            <div className="form-section">
              <label className="input-label">Preferred Language</label>
              <div className={`select-box ${languageOpen ? 'open' : ''}`} onClick={toggleLanguageDropdown}>
                {selectedLanguage || 'Select Language'}
                <span className={`arrow ${languageOpen ? 'rotated' : ''}`}>›</span>
              </div>
              {languageOpen && (
                <ul className="dropdown-list">
                  {['English', 'Hindi', 'Spanish','French'].map((lang, idx) => (
                    <li key={idx} className="dropdown-item" onClick={() => handleLanguageSelect(lang)}>
                      {lang}
                    </li>
                  ))}
                </ul>
              )}

              <label className="input-label">Industry</label>
              <div className={`select-box ${industryOpen ? 'open' : ''}`} onClick={toggleIndustryDropdown}>
                {selectedIndustry || 'Select Industry'}
                <span className={`arrow ${industryOpen ? 'rotated' : ''}`}>›</span>
              </div>
              {industryOpen && (
                <ul className="dropdown-list">
                  {['Tech', 'Healthcare', 'Finance'].map((ind, idx) => (
                    <li key={idx} className="dropdown-item" onClick={() => handleIndustrySelect(ind)}>
                      {ind}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <hr className="divider" />
        <p className="sub-heading">API Integrations</p>

        <div className="integration-section">
          <div className="integration-row">
            <span>Google Calendar</span>
            <button className="connect-btn">Connect</button>
          </div>

          <div className="crm-input">
            <p>CRM</p>
            <input type="text" placeholder="Enter API Key" />
          </div>

          <div className="day-toggle">
            <span className="day-toggle-span">Tuesday</span>
            <div>
              <span className="badge">9:00 AM</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" />
              </div>
            </div>
          </div>

          <div className="day-toggle">
            <span className="day-toggle-span">Saturday</span>
            <div>
              <span className="badge">Closed</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" />
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttonseditsave">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </>
  );
}
