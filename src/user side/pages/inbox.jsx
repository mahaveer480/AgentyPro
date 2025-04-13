import React from "react";
import { useState } from "react";
// import Sidebar from "./Sidebar";

import ChatList from "../components/chartList";
import ChatWindow from "../components/chatwindow";
import "../styles/inbox.css";
import SideNavigation from "../components/sidebar";

function InboxPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="inbox-container" style={{marginLeft:"85px"}}>
<SideNavigation/>
      <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}

export default InboxPage;
