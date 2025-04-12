import React, { useState } from "react";
import { countries } from "./countries";
import { FiSearch } from 'react-icons/fi';
import '../styles/setting.css';
import { Info, Star } from "lucide-react";
import profilepicture from '../images/profile picture.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNavigation from "../components/sidebar";
// import "./InvoicesAndTransactions.css";



export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');
  const [showTooltip, setShowTooltip] = useState(false);
  const [selected, setSelected] = useState("sound");


  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState(selectedCountry.dialCode + " ");

  const options = [
    {
      id: "email",
      title: "Email Notification",
      description: "You will be notified when a new email arrives.",
    },
    {
      id: "sound",
      title: "Sound Notification",
      description:
        "You will be notified with sound when someone messages you.",
    },
    {
      id: "subscription",
      title: "Subscription",
      description:
        "You will be notified when you subscribe to an account.",
    },
  ];

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const match = countries.find((c) => input.startsWith(c.dialCode));
    if (match) setSelectedCountry(match);
    setPhone(input);
  };

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.code === e.target.value);
    if (country) {
      setSelectedCountry(country);
      setPhone(country.dialCode + " ");
    }
  };

  return (
<>
<SideNavigation />

    <div >
      <div className="settings-container">
        <div id='settingdiv'>
          <h1>Settings</h1>
          <div className="search-settings-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search settings..."
                className="search-settings-input"
              />
              <FiSearch className="search-icon" id="seaarchicon" />
            </div>
          </div>
        </div>

        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Account
            {activeTab === 'account' && <div className="notification-badge">12</div>}
          </button>

          <button 
            className={`tab-button ${activeTab === 'wallet' ? 'active' : ''}`}
            onClick={() => setActiveTab('wallet')}
          >
            Wallet & Billing Section
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'account' && (
            <div className="account-content">
              <div id='accountHolder'>
                <div id='elemntdiv'>
                  <div id='subject'>
                    <h2 style={{margin:"0px",padding:"5px"}}>Your profile</h2>
                    <h6 id='updateprofilesettinghere'>Please update your profile setting here</h6>
                  </div>
                  <div id='answer'>
                    <div className="container233">
                      <div className="tooltip-wrapper">
                        <button className="info-button">
                          <i className="icon">i</i>
                        </button>
                        <div className="tooltip">
                          <div className="tooltip-title">Tooltip Title</div>
                          <div className="tooltip-text">
                            Tooltips display informative text when users hover over, focus on, or tap an element.
                          </div>
                          <div className="tooltip-arrow"></div>
                        </div>
                      </div>

                      <button className="go-pro-button">
                        Go Pro
                        <span className="star-icon">★</span>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />

                <div id='bothinputs'>
                  <h3 id='question'>username</h3>
                  <div className='inutdivs'>
                      <button>slothui/</button>
                      <input type="text" placeholder='X-AE_A-19'  id="contactdetails" />
                  </div>
                </div>

                <hr />

                <div className="flex flex-col w-full max-w-md mx-auto" id="bothinputs">
                  <h3 id="question">Phone Number</h3>
                  <div className="inutdivs">
                    <select
                      value={selectedCountry.code}
                      onChange={handleCountryChange}
                      id="curwayinput"
                      className="bg-gray-100 px-2 py-2 text-sm border-r border-gray-300 outline-none"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      id="curwayselect"
                      className="flex-1 px-4 py-2 text-sm outline-none"
                    />
                  </div>
                </div>
<hr />
<div id="picturee">
<h4 id="profilepicrure">Profile Picture</h4>

<div id="profilepicture2">
<img src={profilepicture} id="profilepicture" alt="fds" />
<button id="edit">Edit</button>
<button id="delete">Delete</button>
</div>
</div>
<hr />
<div id="allnotifactions">
<h4 id="notifaction">Notifaction</h4>

<div id="profilepictur23">
<div className="settings-container">
      {options.map((option) => (
        <label key={option.id} className="notification-option">
          <input
            type="checkbox"
            name="notification"
            id="custom-radio"
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
          />
          {/* <span className="c ustom-radio"></span> */}
          <div className="notification-text">
            <div className="notification-title">{option.title}</div>
            <div className="notification-description">
              {option.description}
            </div>
          </div>
        </label>
      ))}
    </div>
</div>
</div>
<hr />
<div id="downbutton">
<button id="cancel">✖ Cancel</button>
<button id="save">✔ Save</button>

</div>




              </div>
            </div>
          )}

          {activeTab === 'wallet' && (
            <div className="wallet-content">
            <div className="wallet-card">
              <span className="wallet-badge credit-badge">↑ 10%</span>
              <div className="wallet-label">Current credit</div>
              <div className="wallet-value">2,8370</div>
            </div>
      
            <div className="wallet-card">
              <span className="wallet-badge stripe-badge">New</span>
              <div className="wallet-label">Stripe Recharge</div>
              <div className="wallet-value">$2020.98</div>
            </div>
      
            <div className="wallet-card">
              <span className="wallet-badge auto-badge">2 New</span>
              <div className="wallet-label">Balance &lt; $5</div>
              <div className="wallet-value">Auto-recharge</div>
            </div>
            {/* // secondcicv? */}
          
          
          <div id="second porstion">

         
    <div className="invoices-transactions-container">
      <div className="invoices-section">
        <h2>Invoices</h2>
        <p className="report-time">This data is reported once at 0700hrs local time every day</p>
        {[
          { id: "INV-U7263", status: "Paid", company: "Maxfter Inc." },
          { id: "INV-U7264", status: "Refunded", company: "Meta Inc." },
          { id: "INV-U7265", status: "Paid", company: "Linkedin Inc." },
          { id: "INV-U7266", status: "Paid", company: "Mahisy LLP" },
          { id: "INV-U7267", status: "Paid", company: "Bima Traders" },
          { id: "INV-U7268", status: "Paid", company: "Mata Corp" },
          { id: "INV-U7269", status: "Paid", company: "ColorPixels" },
        ].map((invoice, index) => (
          <div className="invoice-row" key={index}>
            <span>{invoice.id}</span>
            <span
              className={`status ${invoice.status.toLowerCase()}`}
            >
              {invoice.status}
            </span>
            <span>{invoice.company}</span>
            <span className="action">Archive</span>
            <span className="download">Download</span>
          </div>
        ))}
      </div>

      <div className="transactions-section">
        <h2>Recent Transactions</h2>
        <p className="update-time">Updated 20 mins ago</p>
        <ul className="transactions-list">
          <li>
            <div>
              <strong>Bima Traders</strong>
              <div className="amount positive">+ KES 38,948.00</div>
            </div>
            <div className="time">Wednesday 1:00pm</div>
          </li>
          <li>
            <div>
              <strong>Meta Corp</strong>
              <div className="amount negative">- KES 450.00</div>
            </div>
            <div className="time">Wednesday 2:34pm</div>
          </li>
          <li>
            <div>
              <strong>Maxfter Inc.</strong>
              <div className="amount positive">+ KES 2,483.00</div>
            </div>
            <div className="time">Thursday 3:55pm</div>
          </li>
          <li>
            <div>
              <strong id="Linkedin">Linkedin Inc.</strong>
              <div className="amount positive">+ KES 3,728.00</div>
            </div>
            <div className="time">Thursday 6:00pm</div>
          </li>
          <li>
            <div>
              <strong>Mahisy LLP</strong>
              <div className="amount positive">+ KES 2,726.00</div>
            </div>
            <div className="time">Friday 7:00pm</div>
          </li>
        </ul>
      </div>
    </div>
 </div>

          
          </div>









          )}
        </div>
      </div>
    </div></>
  );
}
