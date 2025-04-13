import React from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import '../styles/ClintDetails.css'; // External stylesheet for styling
import Adminpanelrow from '../component/adminpanelrow';

export default function ClintDetails() {
  return (<>
    <div className="client-details-page">
      <SideNavigation2 />
      <div className="client-details-content">
      <Adminpanelrow/>

        <div className="details-card">
        <h2 className="details-title">Client Details</h2>
          <div className="profile-section">
            <div className="avatar" />
            <div className="info">
              <h3 className="name">John Doe</h3>
              <p className="email">johndoe@examp e com</p>
              <p className="phone">+1 234 567 890</p>
            </div>
          </div>

          <div className="wallet">
            <span>Wallet Balance</span>
            <span className="balance">$100.00</span>
          </div>

          <div className="section">
            <h4>Token Usage</h4>
            <ul>
              <li>100 tokens used on Apr 25, 2024 10:40 AM</li>
              <li>150 tokens used on Apr 24, 2024 03:15 PM</li>
              <li>250 tokens used on Apr 24, 2024 09:45 AM</li>
            </ul>
          </div>

          <div className="section">
            <h4>Call Usage</h4>
            <ul>
              <li>15m call on Apr 25, 2024 09:20 AM</li>
              <li>4m call on Apr 24, 2024 02:30 PM</li>
              <li> 9m call on Apr 23, 2024 01:10 PM</li>
            </ul>
          </div>

          <div className="section">
            <h4>Messages</h4>
            <p>Messages sent on Apr 23, 2024</p>
            <p>5 messages sent on Apr 22, 2024</p>
            <p>30 messages sent on Apr 22, 2024</p>
          </div>

          <div className="action-buttons">
            <button className="plan-btn">Plan</button>
            <button className="disable-btn">Disable</button>
            <button className="edit-btn">Edit</button>
            <button className="message-btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
