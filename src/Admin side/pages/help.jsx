import React, { useState } from 'react';
import SideNavigation2 from '../component/Sidenavigaction2';
import { countries } from '../../user side/pages/countries';
import profilepicture from '../../user side/images/profile picture.png';
import Adminpanelrow from '../component/adminpanelrow';


export default function Help() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState(selectedCountry.dialCode + " ");
  const [selected, setSelected] = useState("sound");

  const options = [
    {
      id: "email",
      title: "Email Notification",
      description: "You will be notified when a new email arrives.",
    },
    {
      id: "sound",
      title: "Sound Notification",
      description: "You will be notified with sound when someone messages you.",
    },
    {
      id: "subscription",
      title: "Subscription",
      description: "You will be notified when you subscribe to an account.",
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
    <div style={{display:"flex"}}>

  <SideNavigation2 />
      <div className="account-content" style={{ padding :"1rem", width:"80%" }}>
  <Adminpanelrow/>
        <div id='accountHolder'>
          <div id='elemntdiv'>
            <div id='subject'>
              <h2 style={{ margin: "0px", padding: "5px" }}>Your profile</h2>
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
              <input type="text" placeholder='X-AE_A-19' id="contactdetails" />
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
              <img src={profilepicture} id="profilepicture" alt="profile" />
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
    </div>
  );
}
