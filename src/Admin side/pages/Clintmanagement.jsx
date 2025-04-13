import React from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import '../styles/Clintmanagement.css'; // we'll create this for styling
import Adminpanelrow from '../component/adminpanelrow';

export default function Clintmanagement() {
  return (
    <div className="client-page">
      <SideNavigation2 />
      <div className="client-content">
      <Adminpanelrow/>
          <div className='client-headermain ' >
          <h2 className="client-title">Clients Management</h2>
        <div className="client-header">
          <input
            type="text"
            placeholder="Search by name or email"
            className="client-search"
          />
          <div className="client-table">
            <div className="client-row header">
              <div>Name</div>
              <div>Wallet Balance</div>
              <div>Tokens Used</div>
              <div>Calls Made</div>
              <div>Messages Sent</div>
              <div>Status</div>
            </div>

            {[
              {
                name: 'John Doe',
                email: 'johndoe@example.com',
                balance: '$100.00',
                tokens: 500,
                calls: 30,
                messages: 204,
                status: 'Active',
              },
              {
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                balance: '$250.50',
                tokens: 300,
                calls: 14,
                messages: 120,
                status: 'Active',
              },
              {
                name: 'Robert Johnson',
                email: 'robertjohnnso@example.com',
                balance: '$0.00',
                tokens: 800,
                calls: 45,
                messages: 315,
                status: 'Active',
              },
              {
                name: 'Emily Brown',
                email: 'emilybrown@example.com',
                balance: '$75.25',
                tokens: 200,
                calls: 5,
                messages: 48,
                status: 'Disabled',
              },
            ].map((client, idx) => (
              <div key={idx} className="client-row">
                <div>
                  <div className="client-name">{client.name}</div>
                  <div className="client-email">{client.email}</div>
                </div>
                <div>{client.balance}</div>
                <div>{client.tokens}</div>
                <div>{client.calls}</div>
                <div>{client.messages}</div>
                <div>
                  <span className={`status-tag ${client.status.toLowerCase()}`}>
                    ● {client.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div></div>
  );
}
