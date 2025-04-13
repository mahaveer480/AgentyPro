import React from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import '../styles/ClintAccounts.css'; // Create this CSS file
import Adminpanelrow from '../component/adminpanelrow';

export default function ClintAccounts() {
  return (
    <div className="client-accounts-wrapper">
      <SideNavigation2 />
      {/* <Adminpanelrow/> */}
      <div className="client-accounts-content">
        <h2 className="admin-panel-heading">Admin Panel</h2>
<hr id='hr' />
          <h3 id='admin-panel-headingh3'>Client Accounts</h3>
        <div className="main-card">
          <table className="client-table1">
            <thead>
              <tr>
                <th>Client</th>
                <th>Wallet Balance</th>
                <th>Usage by Channel</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acme Corp</td>
                <td>$2,500.00</td>
                <td>1.2M tokens</td>
                <td><button className="disable-btn">Force Disable</button></td>
              </tr>
              <tr>
                <td>Beta Solutions</td>
                <td>$1,000.00</td>
                <td>500K tokens, 100 calls, 200 messages</td>
                <td><button className="disable-btn">Force Disable</button></td>
              </tr>
              <tr>
                <td>Gamma LLC</td>
                <td>$2,500.00</td>
                <td>30K tokens</td>
                <td><button className="disable-btn">Force Disable</button></td>
              </tr>
              <tr>
                <td>Delta Enterprises</td>
                <td>$1,000.00</td>
                <td>200K tokens</td>
                <td><button className="disable-btn">Force Disable</button></td>
              </tr>
              <tr>
                <td>Epsilon Inc.</td>
                <td>$1,000.00</td>
                <td>2.0M tokens</td>
                <td><button className="disable-btn">Force Disable</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bottom-section">
          <div className="pricing-card">
            <h4>Set Pricing Rules</h4>
            <ul>
              <hr />
              <li><p>Channel </p> <strong>Price</strong></li>
            <hr />
              <li><p>per token  </p><strong>$0.002</strong></li>
              <hr />
              
              <li><p>per minute </p> <strong>$0.05</strong></li>
              
            </ul>
          </div>
          <div className="alerts-card">
            <h4>Global Alerts</h4>
            <ul>
              <li>Credit thresholds</li>
              <li>Plan limits</li>
              <li>Other important notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
