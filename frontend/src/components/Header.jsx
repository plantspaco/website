import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/events', label: 'Events' },
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/buzwcxdn_PlantSpaCo_Logo_Primary_Transparent.png" 
            alt="Plant Spa Co." 
            style={{ height: '50px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: isActive(link.path) ? '#ff5757' : '#1e293b',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '16px',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ff5757'}
              onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = '#1e293b')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={28} color="#1e293b" /> : <Menu size={28} color="#1e293b" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e2e8f0',
          padding: '1rem'
        }} className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                textDecoration: 'none',
                color: isActive(link.path) ? '#ff5757' : '#1e293b',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '16px',
                borderLeft: isActive(link.path) ? '3px solid #ff5757' : '3px solid transparent'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;