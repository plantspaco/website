import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      zIndex: 1000,
      borderBottom: '1px solid #e8ecef'
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo - 6x bigger */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/q5ghpdo7_Logo_PSC_1.png" 
            alt="Plant Spa Co." 
            style={{ height: '140px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: isActive(link.path) ? '#0091c2' : '#323527',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '17px',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.color = '#0091c2'}
              onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = '#323527')}
            >
              {link.label}
            </Link>
          ))}
          
          {/* CTA Button in Header */}
          <a href="/contact">
            <button className="btn-primary" style={{ 
              padding: '12px 28px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Phone size={18} />
              Free Consultation
            </button>
          </a>
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
          {isMenuOpen ? <X size={32} color="#323527" /> : <Menu size={32} color="#323527" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e8ecef',
          padding: '1.5rem'
        }} className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 18px',
                textDecoration: 'none',
                color: isActive(link.path) ? '#0091c2' : '#323527',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '17px',
                borderLeft: isActive(link.path) ? '3px solid #0091c2' : '3px solid transparent'
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '14px 18px' }}>
            <a href="/contact">
              <button className="btn-primary" style={{ width: '100%' }}>
                <Phone size={18} />
                Free Consultation
              </button>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 969px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
