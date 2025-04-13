import React from 'react';
import { Link } from 'react-router-dom';

export default function Needhelp() {
  const buttonStyle = {
    position: 'fixed',
    bottom: '100px',
    right: '100px',
    backgroundColor: '#0f172a',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '500',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 9999,
    transition: 'all 0.2s ease',
  };

  const hoverStyle = {
    backgroundColor: '#1e293b',
    transform: 'translateY(-2px)',
  };

  // Note: Inline styles don’t support `:hover`, so use a workaround or CSS-in-JS for real hover effect
  return (
    <Link
      to="/setting1"
      style={buttonStyle}
      onMouseEnter={e => Object.assign(e.target.style, hoverStyle)}
      onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
    >
      💬 Need help?
    </Link>
  );
}
