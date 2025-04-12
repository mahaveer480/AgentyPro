import React, { useState } from 'react';
import '../styles/dashtop.css';
import languageimage from "../images/language-square.png";
import closeweye from "../images/eye-slash.png";
import bankcard from "../images/bankcard.png";
import bankcardunder from "../images/bankcardunder.png";
import eyeseactioneye from "../images/openeye.png";
import openeye from "../images/openeye.png";
import exportimg from "../images/export.png";
import importimg from "../images/import.png";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import SideNavigation from '../components/sidebar';

const generateChartData = (count, maxValue) => {
  return Array.from({ length: count }, (_, index) => ({
    date: `${index + 1}`,
    value: Math.floor(Math.random() * maxValue) + 20,
  }));
};

const Dashboard = () => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [marketTab, setMarketTab] = useState('Marketplace');
  const [connectedApps, setConnectedApps] = useState([
    { name: 'Tokopedia', connected: true },
    { name: 'Bli Bli', connected: true },
    { name: 'Amazon', connected: false },
    { name: 'Shopify', connected: false },
    { name: 'Flipkart', connected: false },
    { name: 'eBay', connected: false },
  ]);
  const [activeTab, setActiveTab] = useState("weekly");
  const [chartMode, setChartMode] = useState("earning");

  const chartConfigs = {
    weekly: { count: 7, max: 100 },
    monthly: { count: 30, max: 500 },
    yearly: { count: 12, max: 1000 },
  };

  const currentConfig = chartConfigs[activeTab];
  const chartData = generateChartData(currentConfig.count, currentConfig.max);
  const chartColor = chartMode === "earning" ? "#1D2A45" : "#FF6B6B";

  const toggleConnect = index => {
    const updated = [...connectedApps];
    updated[index].connected = !updated[index].connected;
    setConnectedApps(updated);
  };

  return (
    <>
      <SideNavigation/>
      <div className="dashboard">
        {/* Left Panel */}
        <div className="left-panel">
          <div id='deshtoptopmostdiv'>
            <div>
              <h3>Overview</h3>
              <p>Good morning Leonardo 👋</p>
            </div>
            <img src={languageimage} alt="language button" />
          </div>

          <div className="summary-section">
            <div className="summary-box">
              <div className="summary-header">
                <span>Earning</span>
                <span className="dots">⋮</span>
              </div>
              <h2>$21,500.00</h2>
              <span className="change up">↑ 9%</span>
            </div>
            <div className="summary-box">
              <div className="summary-header">
                <span>Spending</span>
                <span className="dots">⋮</span>
              </div>
              <h2>$5,392.00</h2>
              <span className="change down">↓ 8%</span>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-header">
              <h2>Statistic</h2>
              <div className="mode-switch">
                <button
                  className={chartMode === "earning" ? "active" : ""}
                  onClick={() => setChartMode("earning")}
                >
                  Earning
                </button>
                <button
                  className={chartMode === "spending" ? "active spending" : ""}
                  onClick={() => setChartMode("spending")}
                >
                  Spending
                </button>
              </div>
            </div>

            <div className="chart-tabs">
              {["weekly", "monthly", "yearly"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <XAxis dataKey="date" axisLine={false} tick={{ fill: "#A0AEC0", fontSize: 12 }} />
                  <YAxis domain={[0, currentConfig.max]} axisLine={false} tick={{ fill: "#A0AEC0", fontSize: 12 }} />
                  <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={chartColor}
                    strokeWidth={3}
                    dot={{ r: 5, fill: chartColor }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bills">
            <div id='buttonDivCenter'>
              <h4>Monthly Payments</h4>
              <button id='add-button-on-right'>Add +</button>
            </div>
            
            <div className="bill-card">Electricity - $20.30 <button>Pay Now</button></div>
            <div className="bill-card">Internet - $35.00 <button>Pay Now</button></div>
            <div className="bill-card">Rent - $700.00 <button>Pay Now</button></div>
          </div>
        </div>

        {/* Center Panel */}
        <div className="center-panel">
          <div className="card-title">
            <h3>Your Card</h3>
            <button className="add-btn">+ Add Card</button>
          </div>

          <div className="credit-card-wrapper">
            {/* <div className="credit-card-shadow" style={{ backgroundImage: `url(${bankcardunder})` }}></div> */}
            <div className="credit-card" style={{ backgroundImage: `url(${bankcard})` }}>
              <div className="card-details">
                {/* Card details would go here */}
              </div>
            </div>
          </div>

          <div className="card-info">
            <h5>Card Information</h5>
            <button className="eye-btn" onClick={() => setShowCardInfo(!showCardInfo)}>
              {showCardInfo ? <img id='eyebuyyon' src={closeweye} alt="" /> : <img src={openeye} id='eyebuyyon' alt="" />}
            </button>
          </div>
          
          {showCardInfo && (
            <div className="card-box">
              <p><strong>Name:</strong> Leonardo Cap</p>
              <p><strong>Card No:</strong> **** **** **** 1890</p>
              <p><strong>CVV:</strong> ***</p>
              <p><strong>Valid:</strong> 05/26</p>
            </div>
          )}

          <div className="marketplace">
            <div className="market-tabs">
              {['Marketplace', 'History', 'Payment'].map(tab => (
                <span 
                  key={tab} 
                  className={tab === marketTab ? 'active' : ''} 
                  onClick={() => setMarketTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>

            {marketTab === 'Marketplace' && (
              <div className="apps">
                {connectedApps.map((app, index) => (
                  <div className="app-row" key={index}>
                    <span>{app.name}</span>
                    <button
                      className={app.connected ? 'connected' : 'connect'}
                      onClick={() => toggleConnect(index)}
                    >
                      {app.connected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="profile">
            <div className="profile-info">
              <img src="https://i.pravatar.cc/50" alt="avatar" />
              <div>
                <h5>Leonardo C</h5>
                <p>leonardocap@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="balance-box">
            <h5>Total Balance</h5>
            <h2>$81,910.00</h2>
            <div className="action-buttons">
              <button className="dark">Send <img src={exportimg} id="imginthebutton" alt="" /></button>
              <button className="dark">Receive <img src={importimg} id="imginthebutton" alt="" /></button>
            </div>
          </div>

          <div className="recent-transactions">
            <h5>Recent Transactions</h5>
            <div className="transaction">
              <div className="transaction-icon">💸</div>
              <div className="transaction-details">
                <p>Amazon Purchase</p>
                <span>Today, 10:45 AM</span>
              </div>
              <div className="transaction-amount">-$129.99</div>
            </div>
            <div className="transaction">
              <div className="transaction-icon">💰</div>
              <div className="transaction-details">
                <p>Salary Deposit</p>
                <span>Yesterday, 9:00 AM</span>
              </div>
              <div className="transaction-amount">+$5,250.00</div>
            </div>
            <div className="transaction">
              <div className="transaction-icon">🍔</div>
              <div className="transaction-details">
                <p>Food Delivery</p>
                <span>Yesterday, 7:30 PM</span>
              </div>
              <div className="transaction-amount">-$24.50</div>
            </div>
          </div>

          <div className="notifications">
            <h5>Notifications</h5>
            <div className="notif"><span>💬</span> Josep sent you $10,000</div>
            <div className="notif"><span>💧</span> Water bill due</div>
            <div className="notif"><span>💸</span> Spent more than $5,000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;