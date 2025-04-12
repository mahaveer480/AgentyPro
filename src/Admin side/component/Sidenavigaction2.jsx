  import React from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import '../styles/Sidebar2.css';

  import logo from "../images/logo.jpg";
  import dashboardIcon from "../images/dashboard-square-01 (1).png";
  import helpIcon from "../images/help-circle.png"; 
  import logoutIcon from "../images/logout-03.png";

  function SideNavigation2() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
      { id: "dashboard", label: "Dashboard", path: "/Admindeshboard", icon: dashboardIcon },
      { id: "client-accounts", label: "Client Accounts", path: "/client-accounts" },
      { id: "client-management", label: "Client Management", path: "/client-management" },
      { id: "client-details", label: "Client Details", path: "/client-details" },
      { id: "wallet", label: "Wallet & Transactions", path: "/wallet" },
      { id: "plan", label: "Plan Management", path: "/plan-management" },
    ];

    const bottomItems = [
      { id: "help", label: "Help", path: "/help", icon: helpIcon },
      { id: "logout", label: "Log out", path: "/logout", icon: logoutIcon },
    ];

    const current = location.pathname;

    const renderItem = (item) => (
      <div
        key={item.id}
        className={`sidebar-item ${current === item.path ? "active" : ""}`}
        onClick={() => navigate(item.path)}
      >
        {item.icon && <img src={item.icon} alt={item.label} className="sidebar-icon" />}
        <span>{item.label}</span>
      </div>
    );

    return (
      <div className="sidebar-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <input type="text" placeholder="Search" className="sidebar-search" />
        <div className="sidebar-section-title">DASHBOARD</div>
        <div className="sidebar-main">
          {navItems.map(renderItem)}
        </div>
        <div className="sidebar-bottom">
          {bottomItems.map(renderItem)}
        </div>
      </div>
    );
  }

  export default SideNavigation2;
