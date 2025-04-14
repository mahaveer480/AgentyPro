import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css"; // Save CSS below in Sidebar.css

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Fixed Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </div>

        {/* User Info */}
        <div className="user-info">
          <img
            className="user-avatar"
            src="/path-to-profile-image.jpg"
            alt="User"
          />
          <div className="user-details">
            <h4 className="user-name">John Doe</h4>
            <p className="user-email">john@example.com</p>
          </div>
          <img
            className="user-icon"
            src="/path-to-your-icon.png"
            alt="Options"
          />
        </div>

        {/* Nav Items */}
        <nav className="nav-links">
          <button
            className="nav-link"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </nav>
      </aside>

      {/* Top Navigation Bar */}
      <header className="top-nav">
        {/* Empty left side */}
        <div className="top-nav-left" />
        {/* Right side: Notification or user tools */}
        <div className="top-nav-right">
          <img src="/path-to-notification-icon.png" alt="Notify" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to the Dashboard</h1>
      </main>
    </div>
  );
};

export default Sidebar;
