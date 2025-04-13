import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import logout from "../images/logout.png";
import setting from "../images/settings.png";
import cart from "../images/cart.png";
import paste from "../images/paste.png";
import desktop from "../images/dashtop.png";
import binance from "../images/binance.png";
import telephone from "../images/telephone.png";
import agentyproLogo from "../images/agentyproLogo.png";

function SideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    { id: "logout", img: logout, path: "/logout" },
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
        <div className="bottom-items">{renderNavItems(bottomNavItems)}</div>
      </nav>
    </>
  );
}

export default SideNavigation;
