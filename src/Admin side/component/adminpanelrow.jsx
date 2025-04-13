import React, { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import '../styles/Adminpanelrow.css';

export default function Adminpanelrow({ title = "Admin Panel", onMenuClick }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    if (onMenuClick) onMenuClick();
  };

  return (
    <div className="adminpanel-header">
      {isMobile && (
        <button className="menu-button" onClick={handleMenuClick}>
          <HiOutlineMenu size={24} />
        </button>
      )}
      
      <h2 className="adminpanel-title">{title}</h2>
      
    </div>
  );
}
