import React from "react";
import "../styles/inbox.css";

const chats = [
  { id: 1, name: "Alberta Reyes", status: "Online" },
  { id: 2, name: "Andrew Bass", status: "Online" },
  { id: 3, name: "Floyd Lloyd", status: "Offline" },
];

const ChatList = ({ onSelectChat, selectedChat }) => {
  return (
    <div className="chat-list">
      <input className="chat-search" placeholder="Search Messages" />
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-list-item ${
            selectedChat?.id === chat.id ? "active" : ""
          }`}
          onClick={() => onSelectChat(chat)}
        >
          <div className="chat-avatar">{chat.name.charAt(0)}</div>
          <div>
            <div className="chat-name">{chat.name}</div>
            <div className="chat-status">{chat.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
