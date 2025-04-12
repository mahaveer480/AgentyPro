import React from 'react';
import '../styles/binance.css'; // Import the separate CSS file
import profilepicture from "../images/profilepicturedummy.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from '../components/sidebar';


export default function Binance() {
  return (<>

  <SideNavigation/>
    <div className="binance-container">
      <h2 className="section-title">General</h2>

     
     
     
     <div className="logo-upload-main" >
      <div className="logo-upload">
        <div style={{display:"flex"}} >
          <img className="logo-placeholder" src={profilepicture} alt="" />
        <p>Upload Logo</p>
        </div>
        <button className="upload-btn">Upload</button>
        
      </div>
<div className="form-section-main">
      <div className="form-section">
        <label className="input-label">Preferred Language</label>
        <div className="select-box">
          Select Language <span>{'>'}</span>
        </div>

        <label className="input-label">Industry</label>
        <div className="select-box">
          Select Industry <span>{'>'}</span>
        </div>
      </div>
</div></div>
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
          <span className='day-toggle-span'>Tuesday</span>
          <div>
            <span className="badge">9:00 AM</span>
            {/* <input type="checkbox" defaultChecked /> */}
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
</div>
          </div>
        </div>

        <div className="day-toggle">
          <span className='day-toggle-span'>Saturday</span>
          
          <div>
            <span className="badge">Closed</span>
            {/* <input type="checkbox" defaultChecked /> */}
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
</div>
          </div>
        </div>
      </div>
<div>

      <div className="action-buttons">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
</div>
      </div>
    </div></>
  );
}
