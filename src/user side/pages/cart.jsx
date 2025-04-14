import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import "../styles/cart.css";

// Channel icons
import Whatsaap from "../images/whatsapp.png";
import Instagram from "../images/Instagram.png";
import Email from "../images/Email.png";
import Messenger from "../images/Facebook Messenger.png";
import Sms from "../images/SMS.png";
import SideNavigation from "../components/sidebar";

const Cart = () => {
  // Toggle states for channels
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [messengerEnabled, setMessengerEnabled] = useState(false);
  const [instagramEnabled, setInstagramEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);

  // Activity logs
  const activities = [
    { status: "Success", time: "1:14PM", success: true },
    { status: "Failed", time: "12:14AM", success: false },
    { status: "Success", time: "10:24PM", success: true },
    { status: "Success", time: "9:30PM", success: true },
  ];

  // Channel list for toggles
  const channels = [
    { name: "WhatsApp", icon: Whatsaap, enabled: whatsappEnabled, toggle: setWhatsappEnabled },
    { name: "Messenger", icon: Messenger, enabled: messengerEnabled, toggle: setMessengerEnabled },
    { name: "Instagram", icon: Instagram, enabled: instagramEnabled, toggle: setInstagramEnabled },
    { name: "Email", icon: Email, enabled: emailEnabled, toggle: setEmailEnabled },
    { name: "SMS", icon: Sms, enabled: smsEnabled, toggle: setSmsEnabled },
  ];

  return (
    <div className="header_Container">
      {/* Sidebar */}
      <SideNavigation />

      <div className="Rightsection">
        {/* Top bar */}
        <div className="Channel_Management" style={{ paddingLeft: "85px" }}>
          <h2 className="Channel_Management_Title">Channel Management</h2>
          <div className="search-container">
            <input className="search-bar-with-icon" placeholder="Search settings..." />
            <span className="search-icon"></span>
          </div>
        </div>

        {/* Mobile sidebar */}
        <aside className="mobile_sidebar">
          {channels.map((channel) => (
            <div key={channel.name} className="channel-toggle">
              <span>
                <img src={channel.icon} alt={channel.name} className="channel_logo" />
                {channel.name}
              </span>
              <Switch
                checked={channel.enabled}
                onChange={channel.toggle}
                className={`switch ${channel.enabled ? "on" : ""}`}
              >
                <span className="switch-circle" />
              </Switch>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div className="Container">
          {/* Large screen sidebar */}
          <aside className="sidebar">
            {channels.map((channel) => (
              <div key={channel.name} className="channel-toggle">
                <span>
                  <img src={channel.icon} alt={channel.name} className="channel_logo" />
                  {channel.name}
                </span>
                <Switch
                  checked={channel.enabled}
                  onChange={channel.toggle}
                  className={`switch ${channel.enabled ? "on" : ""}`}
                >
                  <span className="switch-circle" />
                </Switch>
              </div>
            ))}
          </aside>

          {/* Main panel */}
          <main className="main">
            {/* WhatsApp Toggle Section */}
            <div className="channel-toggle channel-toggle_1">
              <h2 className="label whatsaap_Text">WhatsApp</h2>
              <Switch
                checked={whatsappEnabled}
                onChange={setWhatsappEnabled}
                className={`switch ${whatsappEnabled ? "on" : ""}`}
              >
                <span className="switch-circle" />
              </Switch>
            </div>

            {/* Channel details */}
            <div className="section">
              <div className="channel-toggle channel-toggle_active">
                <span className="label">Active</span>
              </div>

              <div className="input_container">
                <label className="label">Phone Number</label>
                <input className="phone_Number" value="+34 123 432 789" readOnly />
              </div>

              <div className="input_container">
                <label className="label">Assign AI agents to Channel</label>
                <select className="select">
                  <option>Select AI Agents</option>
                </select>
              </div>

              <div className="input_container">
                <label className="label">Set Fallback Logic</label>
                <select className="select">
                  <option>If no credit for voice, send WhatsApp</option>
                </select>
              </div>

              {/* Activity logs */}
              <div className="activity">
                <h3>Recent Activity</h3>
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index} className="activity-item">
                      <div>
                        {activity.success ? (
                          <CheckCircleIcon className="activity-icon status-success" />
                        ) : (
                          <XCircleIcon className="activity-icon status-failed" />
                        )}
                        <span>{activity.status}</span>
                      </div>
                      <span className="text-muted">{activity.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Cart;
