import React from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import '../styles/walletTransaction.css'; // Create this CSS file
import Adminpanelrow from '../component/adminpanelrow';

const data = [
  { initials: 'E', name: 'Eleanor', surname: 'pena', creditAdded: '$0', creditUsed: '–$5.00', balance: '$20.00', type: 'Call' },
  { initials: 'D', name: 'Devon', surname: 'lane', creditAdded: '$0', creditUsed: '–$12.00', balance: '$35.00', type: 'Token' },
  { initials: 'TV', name: 'Therasa', surname: 'webb', creditAdded: '$50.00', creditUsed: '$0.00', balance: '$72.00', type: 'Manual top-up' },
  { initials: 'J', name: 'Jacob', surname: 'jones', creditAdded: '$0', creditUsed: '–$2.00', balance: '$28.00', type: 'Message' },
  { initials: 'KI', name: 'Kristin', surname: 'watson', creditAdded: '$25.00', creditUsed: '$0.00', balance: '$25.00', type: 'Manual top-up' },
  { initials: 'KV', name: 'J ristm', surname: 'watson', creditAdded: '$25', creditUsed: '$25.00', balance: '$40.00', type: 'Manual top-up' },
];

export default function WalletTransaction() {
  return (
    <div className="wallet-page">
      <SideNavigation2 />
      <div className="wallet-section">
        <Adminpanelrow/>
        <div className="wallet-header" style={{marginTop:"30px"}}>
          <h2>Wallet & Transactions</h2>
          <button className="add-balance-btn">+ Add Balance</button>
        </div>
        <div className="wallet-table">
          <div className="wallet-row wallet-header-row">
            <div>Client</div>
            <div>Credit Added</div>
            <div>Credit Used</div>
            <div>Balance</div>
            <div>Type</div>
            <div></div>
          </div>
          {data.map((user, index) => (
            <div className="wallet-row" key={index}>
              <div className="client-info">
                <div className="avatar">{user.initials}</div>
                <div>
                  <div className="name">{user.name}</div>
                  <div className="surname">{user.surname}</div>
                </div>
              </div>
              <div>{user.creditAdded}</div>
              <div>{user.creditUsed}</div>
              <div>{user.balance}</div>
              <div>{user.type}</div>
              <div className="options">⋯</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
