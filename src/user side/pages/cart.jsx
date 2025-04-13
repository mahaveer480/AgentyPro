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
  // State for each communication channel
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [messengerEnabled, setMessengerEnabled] = useState(false);
  const [instagramEnabled, setInstagramEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);

  // Activity log data
  const activities = [
    { status: "Success", time: "1:14PM", success: true },
    { status: "Failed", time: "12:14AM", success: false },
    { status: "Success", time: "10:24PM", success: true },
    { status: "Success", time: "9:30PM", success: true },
  ];

  // Common channel list for Sidebar and Mobile Sidebar
  const channels = [
    { name: "WhatsApp", socilIMG: Whatsaap, enabled: whatsappEnabled, setEnabled: setWhatsappEnabled },
    { name: "Messenger", socilIMG: Messenger, enabled: messengerEnabled, setEnabled: setMessengerEnabled },
    { name: "Instagram", socilIMG: Instagram, enabled: instagramEnabled, setEnabled: setInstagramEnabled },
    { name: "Email", socilIMG: Email, enabled: emailEnabled, setEnabled: setEmailEnabled },
    { name: "SMS", socilIMG: Sms, enabled: smsEnabled, setEnabled: setSmsEnabled },
  ];

  return (
    <>
      <div className="header_Container" >
        {/* Left sidebar (hidden on mobile) */}
        <div className="  ">
          <SideNavigation/>
        </div>

        <div className="Rightsection">
          {/* Top Header Section */}
          <div className="Channel_Management" style={{paddingLeft:"85px"}}>
           <h2 className="Channel_Management_Title">Channel Management</h2>

            <div className="search-container">
             <input type="text" className="search-bar-with-icon" placeholder="Search settings..."/>
             <span className="search-icon">
            
              {/* Or use an SVG/icon here if preferred */}
           </span>
           </div>
         </div>


          {/* Mobile Sidebar (visible only on small screens) */}
          <aside className="mobile_sidebar">
            <div>
              {channels.map((channel) => (
                <div key={channel.name} className="channel-toggle">
                  <span>
                    <img src={channel.socilIMG} alt={channel.name} className="channel_logo" />
                    {channel.name}
                  </span>
                  <Switch
                    checked={channel.enabled}
                    onChange={channel.setEnabled}
                    className={`switch ${channel.enabled ? "on" : ""}`}
                  >
                    <span className="switch-circle" />
                  </Switch>
                </div>
              ))}
            </div>
          </aside>

          {/* Main container with Sidebar and Main Section */}
          <div className="Container">
            {/* Sidebar for larger screens */}
            <aside className="sidebar">
              <div>
                {channels.map((channel) => (
                  <div key={channel.name} className="channel-toggle">
                    <span>
                      <img src={channel.socilIMG} alt={channel.name} className="channel_logo" />
                      {channel.name}
                    </span>
                    <Switch
                      checked={channel.enabled}
                      onChange={channel.setEnabled}
                      className={`switch ${channel.enabled ? "on" : ""}`}
                    >
                      <span className="switch-circle" />
                    </Switch>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content Section */}
            <main className="main">
              {/* Channel Toggle Title */}
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

              {/* Active Status (currently hidden) */}
              <div className="section">
                <div className="channel-toggle channel-toggle_active">
                  <span className="label">Active</span>
                </div>

                {/* Phone Number Display */}
                <div className="input_container">
                  <label className="label">Phone Number</label>
                  <input type="text" className="phone_Number" value="+34 123 432 789" readOnly />
                </div>

                {/* Assign AI Agents */}
                <div className="input_container">
                  <label className="label">Assign AI agents to Channel</label>
                  <select className="select">
                    <option>Select AI Agents</option>
                  </select>
                </div>

                {/* Fallback Logic Selection */}
                <div className="input_container">
                  <label className="label">Set Fallback Logic</label>
                  <select className="select">
                    <option>If no credit for voice, send WhatsApp</option>
                  </select>
                </div>

                {/* Recent Activity Section */}
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
    </>
  );
};

export default Cart;