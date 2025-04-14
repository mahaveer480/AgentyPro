import React, { useState } from 'react';
import '../styles/flowchart.css'; // Create this file with custom styles
import SideNavigation from '../components/sidebar';
import Form from 'react-bootstrap/Form';

export default function Telephone() {
  const [aiVoiceEnabled, setAiVoiceEnabled] = useState(true);
  const [callType, setCallType] = useState('Reminders');
  const [ttsVoice, setTtsVoice] = useState('Clara');
  const [speechText, setSpeechText] = useState(
    'Hi {{client_name}}, this is a reminder for your appointment on {{appointment.time}}.'
  );

  return (
    <>
      <SideNavigation />

      <div className="flow-container">

        {/* Page Header & Search */}
        <div className="Channel_Management" style={{ paddingLeft: "85px" }}>
          <h2 className="Channel_Management_Title">Voice Call Flow</h2>

          <div className="search-container">
            <input
              type="text"
              className="search-bar-with-icon"
              placeholder="Search settings..."
            />
            <span className="search-icon">{/* Optional icon */}</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="flow-grid">

          {/* LEFT: Settings */}
          <div className="flow-settings">
            {/* Toggle */}
            <div className="toggle-row">
              <Form>
                <Form.Check
                  type="switch"
                  id="ai-voice-toggle"
                  className="custom-switch"
                  checked={aiVoiceEnabled}
                  onChange={() => setAiVoiceEnabled(!aiVoiceEnabled)}
                />
              </Form>
              <span>Enable AI Voice</span>
            </div>

            {/* Call Type */}
            <label>Call Type</label>
            <select value={callType} onChange={(e) => setCallType(e.target.value)} id="select">
              <option>Reminders</option>
              <option>Promotions</option>
              <option>Follow-ups</option>
            </select>

            {/* TTS Voice */}
            <label>Text-to-Speech Voice</label>
            <select value={ttsVoice} onChange={(e) => setTtsVoice(e.target.value)} id="select">
              <option>Clara</option>
              <option>Brian</option>
              <option>Emma</option>
            </select>

            {/* Speech Input */}
            <label>Speech</label>
            <textarea
              rows="4"
              value={speechText}
              onChange={(e) => setSpeechText(e.target.value)}
            />

            {/* Dynamic Variables Info */}
            <div className="variables-section">
              <p><strong>Available Variables</strong></p>
              <p>client_name</p>
              <p>appointment.time</p>
            </div>

            {/* Fallback Info */}
            <div className="fallback-section">
              <p><strong>Auto Fallback</strong></p>
              <p>
                If the call fails or there are no available credits,
                Talkeen will automatically send a WhatsApp message to the client.
              </p>
            </div>
          </div>

          {/* RIGHT: Flow Logic */}
          <div className="flow-logic">
            <h4>Voice Logic Flow</h4>

            <div className="flow-step blue">
              <div className="step-number">1</div>
              <div className="step-text">Did the customer answer?</div>
            </div>

            <div className="flow-connector">
              <p>|</p><p>Yes</p><p>↓</p>
            </div>

            <div className="flow-step blue">
              <div className="step-text">Say reminder message</div>
            </div>

            <div className="flow-connector">
              <p>|</p><p>No</p><p>↓</p>
            </div>

            <div className="flow-step gray">
              <div className="step-number">3</div>
              <div className="step-text">Trigger WhatsApp fallback</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
