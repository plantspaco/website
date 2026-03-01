import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/grow-club', label: 'Grow Club' },
    { path: '/events', label: 'Events' },
    { path: '/corporate', label: 'Corporate' },
    { path: '/social-impact', label: 'Social Impact' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'static',
      backgroundColor: 'white',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      zIndex: 999,
      borderBottom: '1px solid #e8ecef',
      marginTop: '60px'
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo with Tagline */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/q5ghpdo7_Logo_PSC_1.png" 
            alt="Plant Spa Co." 
            style={{ height: '120px', width: 'auto' }}
          />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.15rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            color: '#3e8840'
          }}>
            In-home repotting & ongoing plant care
          </div>
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
                color: isActive(link.path) ? '#0091c2' : '#323527',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '16px',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.color = '#0091c2'}
              onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = '#323527')}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem', borderLeft: '2px solid #e8ecef', paddingLeft: '1.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
              color: '#0091c2',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
              color: '#0091c2',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Instagram size={22} />
            </a>
          </div>
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
          <div style={{ display: 'flex', gap: '1.5rem', padding: '18px', justifyContent: 'center' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={28} color="#0091c2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={28} color="#0091c2" />
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