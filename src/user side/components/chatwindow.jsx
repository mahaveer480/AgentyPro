import React from "react";
import "../styles/inbox.css";

const ChatWindow = ({ selectedChat }) => {
  if (!selectedChat) return <div className="chat-window empty">Select a chat</div>;

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>{selectedChat.name}</span>
        <span>{selectedChat.status}</span>
      </div>
      <div className="chat-content">
        <div className="chat-message">Hi there! 👋</div>
        <div className="chat-image-row">
          <img src="../images/pic1" alt="file" />
          <img src="/images/pic2.png" alt="file" />
        </div>
        <div className="chat-audio">🎧 Audio Message</div>
        <div className="chat-message received">
          Here's a detailed explanation with visuals!
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type Message" />
        <button>➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;
