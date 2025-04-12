import React, { useState } from 'react';
import '../styles/flowchart.css'; // Create this file for your custom styles
import SideNavigation from '../components/sidebar';
import { FaToggleOn } from 'react-icons/fa';
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
        <h2 className="flow-title">Voice Call Flow</h2>
        <div className="flow-grid">
          {/* Left Section */}
          <div className="flow-settings">
            <div className="toggle-row">
              {/* <FaToggleOn size={24} color="#21c55d" /> */}
              <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        // label="Check this switch"
        className="custom-switch"

      />
      
    </Form>



              
              <span>Enable AI Voice</span>
            </div>

            <label>Call Type</label>
            <select value={callType} onChange={(e) => setCallType(e.target.value)} id='select'>
              <option>Reminders</option>
              <option>Promotions</option>
              <option>Follow-ups</option>
            </select>

            <label>Text-to-Speech Preview</label>
            <select value={ttsVoice} onChange={(e) => setTtsVoice(e.target.value)} id='select'>
              <option>Clara</option>
              <option>Brian</option>
              <option>Emma</option>
            </select>

            <label>Speech</label>
            <textarea
              rows="4"
              value={speechText}
              onChange={(e) => setSpeechText(e.target.value)}
            />

            <div className="variables-section">
              <p><strong>Available Variables</strong></p>
              <p>clint name</p>
              <p>clint name</p>
              <p>clint name</p>
            </div>

            <div className="fallback-section">
              <p><strong>Auto Fallback</strong></p>
              <p>
                If the call fails or there are no available credits, Talkeen will automatically
                send a WhatsApp message to the client.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flow-logic">
            <h4>Voice Logic Flow</h4>
            <div className="flow-step blue">
              <div className="step-number">1</div>
              <div className="step-text">Did the customer answer?</div>
            </div>
            <div className="flow-connector"><p>|</p><p>Yes</p><p>↓</p></div>
            <div className="flow-step blue">
              <div className="step-text">Say reminder message</div>
            </div>
            <div className="flow-connector"><p>|</p><p>No</p><p>↓</p></div>
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
