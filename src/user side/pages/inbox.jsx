import React, { useState } from 'react';
import './css/Ai Aigent.css'; // Custom CSS for styling

// React Icons
import {
  FiMoreVertical, FiPaperclip, FiSmile, FiSearch, FiPhone, FiVideo
} from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';
import SideNavigation from '../components/sidebar';

const InboxPage = () => {
  // ------------------- State -------------------
  // Messages state to track chat messages
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'other' },
    { id: 2, text: 'Hi there!', sender: 'me' }
  ]);

  // Input state for the message input field
  const [input, setInput] = useState('');

  // ------------------- Function to Send Message -------------------
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: input,
        sender: 'me'
      }]);
      setInput('');
    }
  };

  return (<>

  <SideNavigation/>
    <div className="inbox-wrapper">
      
      {/* Left Sidebar */}
      <aside className="inbox-sidebar">
        {/* You can add icons or navigation here */}
      </aside>

      {/* Main Inbox Panel */}
      <div className="inbox-main">

        {/* Header with Search */}
        <header className="inbox-header">
          <h2>Inbox</h2>
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search settings..." />
          </div>
        </header>

        {/* Main Content */}
        <div className="inbox-content">

          {/* Chat User List */}
          <div className="chat-list">
            <div className="start-chat">Start Chat</div>

            {/* Selected chat */}
            <div className="chat-item selected">
              <img src="https://i.pravatar.cc/40?img=8" alt="avatar" />
              <div className="chat-info">
                <h4>Iva Roberson</h4>
                <p>Adwords Keyword Research</p>
              </div>
              <span className="time">11:45</span>
            </div>

            {/* More chat items */}
            {[9, 10, 11].map((imgId, i) => (
              <div className="chat-item" key={i}>
                <img src={`https://i.pravatar.cc/40?img=${imgId}`} alt="avatar" />
                <div className="chat-info">
                  <h4>{imgId % 2 === 0 ? 'Andrew Bass' : 'Floyd Lloyd'}</h4>
                  <p>There is a lot of exciting stuff...</p>
                </div>
                <span className="status offline" />
              </div>
            ))}
          </div>

          {/* Chat Window */}
          <div className="chat-window">

            {/* Chat Header */}
            <div className="chat-header">
              <span className="chat-name">Ina Roberson</span>
              <div className="chat-actions">
                <FiPhone />
                <FiVideo />
                <FiMoreVertical />
              </div>
            </div>

            {/* Chat Body */}
            <div className="chat-body">
              
              {/* Incoming message with file */}
              <div className="message left">
                <img src="https://i.pravatar.cc/40?img=5" alt="Stephen" className="avatar" />
                <div>
                  <div className="msg-meta">
                    <span>Stephen Park</span>
                    <span>12:45</span>
                  </div>
                  <div className="msg-content file">
                    <p>Human Design Guidelines .pdf <strong>760.90 KB</strong></p>
                    <small>Downloading ...</small>
                  </div>
                </div>
              </div>

              {/* Another incoming text message */}
              <div className="message left">
                <img src="https://i.pravatar.cc/40?img=5" alt="Stephen" className="avatar" />
                <div>
                  <div className="msg-meta">
                    <span>Stephen Park</span>
                    <span>12:45</span>
                  </div>
                  <div className="msg-content file">
                    <p>hi</p>
                  </div>
                </div>
              </div>

              {/* Outgoing message */}
              <div className="message right">
                <div>
                  <div className="msg-meta">
                    <span className="msg-time">12:45</span>
                    <span className="msg-name">Stephen Park</span>
                  </div>
                  <div className="msg-content_Right file">
                    <p>Hey! 👋 What can I help you with right now?</p>
                  </div>
                </div>
                <img src="https://i.pravatar.cc/40?img=4" alt="Stephen Park" className="avatar" />
              </div>

            </div>

            {/* Chat Footer (Message Input Area) */}
            <div className="chat-footer">
              <FiPaperclip className="footer-icon" />
              <FiSmile className="footer-icon" />
              <input
                type="text"
                className="chat-input"
                placeholder="Type Message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button className="send-button" onClick={sendMessage}>
                <IoSend />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InboxPage;