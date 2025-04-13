import React from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import '../styles/planmanagement.css';
import Adminpanelrow from '../component/adminpanelrow';

const plans = [
  { name: 'Starter', email: 'starter@abc.com', token: 100, minutes: 100, price: '$10', status: 'Active' },
  { name: 'Basic', email: 'abastausten', token: 500, minutes: 500, price: '$29', status: 'Active' },
  { name: 'Pro', email: 'proemabhpoo', token: 2000, minutes: 2000, price: '$59', status: 'Not Active' },
  { name: 'Enterprise', email: 'stack|icons', token: 5000, minutes: 5000, price: '$99', status: 'Active' },
];

export default function Planmanagement() {
  return (
    <div className="plan-page">
      <SideNavigation2 />
      <div className="plan-section">
      <Adminpanelrow/>
        <div className="plan-header" style={{marginTop:"30px"}}>
          <h2>Plan Management</h2>
          <button className="new-plan-btn">+ New Plan</button>
        </div>
        <div className="plan-table">
          <div className="plan-row plan-header-row">
            <div>Plan Name</div>
            <div>Token Limit</div>
            <div>Call Minute Limit</div>
            <div>Price/Month</div>
            <div>Status</div>
          </div>
          {plans.map((plan, index) => (
            <div className="plan-row" key={index}>
              <div className="plan-info">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-email">{plan.email}</div>
              </div>
              <div>{plan.token}</div>
              <div>{plan.minutes}</div>
              <div>{plan.price}</div>
              <div>
                <span className={`status-badge ${plan.status === 'Active' ? 'active' : 'inactive'}`}>
                  {plan.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
