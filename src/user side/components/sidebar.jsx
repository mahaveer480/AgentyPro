import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import logout from "../images/logout (2).png";
import setting from "../images/settings (2).png";
import cart from "../images/cart.png";
import paste from "../images/paste (2).png";
import desktop from "../images/dashtop.png";
import binance from "../images/binance.png";
import telephone from "../images/telephone (2).png";
import agentyproLogo from "../images/agentyproLogo.png";
import chartIcon from "../images/chart.png"; // <- Add your chart icon here

function SideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1200);
  const [showChartBox, setShowChartBox] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        chartRef.current &&
        !chartRef.current.contains(e.target) &&
        !e.target.closest(".chart-button")
      ) {
        setShowChartBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleSidebar = () => {
    if (!showSidebar) {
      setShowSidebar(true);
      setTimeout(() => {
        setShowSidebar(false);
      }, 5000);
    }
  };

  const navItems = [
    { id: "dashboard", img: desktop, path: "/dashboard" },
    { id: "cart", img: cart, path: "/cart" },
    { id: "paste", img: paste, path: "/paste" },
    { id: "telephone", img: telephone, path: "/telephone" },
    { id: "binance", img: binance, path: "/binance" },
  ];

  const bottomNavItems = [
    { id: "setting", img: setting, path: "/settings" },
    { id: "logout", img: logout, path: "/logoutt" },
  ];

  const getActiveId = () => {
    const allItems = [...navItems, ...bottomNavItems];
    const active = allItems.find((item) => location.pathname.startsWith(item.path));
    return active ? active.id : "";
  };

  const currentActive = getActiveId();

  const handleNavigation = (item) => {
    navigate(item.path);
  };

  const renderNavItems = (items) =>
    items.map((item) => (
      <div
        key={item.id}
        className={`nav-item-container ${currentActive === item.id ? "is-active" : ""}`}
      >
        {currentActive === item.id && <div className="active-indicator-circle" />}
        <button className="nav-item" onClick={() => handleNavigation(item)}>
          <img src={item.img} alt={item.id} className="nav-icon" />
        </button>
      </div>
    ));

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={handleToggleSidebar}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>

      <nav className={`side-nav ${showSidebar ? "show" : ""}`}>
        <div>
          <img src={agentyproLogo} id="agentyprologo" alt="logo" />
          <div className="top-items">{renderNavItems(navItems)}</div>
        </div>

        <div className="bottom-items">
          {/* Chart Box Button */}
          <div className="nav-item-container">
            <button
              className="nav-item chart-button"
              onClick={() => setShowChartBox((prev) => !prev)}
            >
              <img src={chartIcon} alt="chart" className="nav-icon" id="nav-iconchart" />
            </button>

            {showChartBox && (
  <div className="floating-admin-chat-box" ref={chartRef}>
    <div className="admin-chat-header">
      <span>🛠️ Admin Support</span>
    </div>

    <div className="admin-chat-messages">
      <div className="admin-message from-admin">
        <p>Hello 👋 How can I assist you today?</p>
        <span className="admin-timestamp">09:30 AM</span>
      </div>
      <div className="admin-message from-user">
        <p>I need help with my Binance API integration.</p>
        <span className="admin-timestamp">09:32 AM</span>
      </div>
      <div className="admin-message from-admin">
        <p>Of course. Let me walk you through the setup step-by-step.</p>
        <span className="admin-timestamp">09:34 AM</span>
      </div>
    </div>

    <div className="admin-chat-input">
      <input type="text" placeholder="Type a message..." />
      <button className="admin-send-btn" aria-label="Send">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="#ffffff"
        >
          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
        </svg>
      </button>
    </div>
  </div>
)}

          </div>

          {/* Other Items */}
          {renderNavItems(bottomNavItems)}
        </div>
      </nav>
    </>
  );
}

export default SideNavigation;
