import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/grow-club', label: 'Grow Club' },
    { path: '/events', label: 'Events' }
  ];

  const aboutSubLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/social-impact', label: 'Social Impact' }
  ];

  const isActive = (path) => location.pathname === path;
  const isAboutActive = () => aboutSubLinks.some(link => location.pathname === link.path);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          
          {/* About Dropdown */}
          <div 
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: isAboutActive() ? '#0091c2' : '#323527',
                fontWeight: isAboutActive() ? '600' : '500',
                fontSize: '16px',
                padding: '0',
                transition: 'color 0.2s ease'
              }}
            >
              About
              <ChevronDown size={16} style={{
                transition: 'transform 0.2s ease',
                transform: isAboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }} />
            </button>
            
            {isAboutDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                padding: '0.75rem 0',
                minWidth: '180px',
                marginTop: '8px',
                zIndex: 1000,
                border: '1px solid #e8ecef'
              }}>
                {aboutSubLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      textDecoration: 'none',
                      color: isActive(link.path) ? '#0091c2' : '#323527',
                      fontWeight: isActive(link.path) ? '600' : '500',
                      fontSize: '15px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.color = '#0091c2';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      if (!isActive(link.path)) e.target.style.color = '#323527';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              color: isActive('/contact') ? '#0091c2' : '#323527',
              fontWeight: isActive('/contact') ? '600' : '500',
              fontSize: '16px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#0091c2'}
            onMouseLeave={(e) => !isActive('/contact') && (e.target.style.color = '#323527')}
          >
            Contact
          </Link>
          
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem', borderLeft: '2px solid #e8ecef', paddingLeft: '1.5rem' }}>
            <a href="https://facebook.com/plantspaco" target="_blank" rel="noopener noreferrer" style={{
              color: '#0091c2',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com/plantspaco" target="_blank" rel="noopener noreferrer" style={{
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
          
          {/* About Section in Mobile */}
          <div style={{ 
            padding: '10px 18px', 
            color: '#64748b', 
            fontSize: '13px', 
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            About
          </div>
          {aboutSubLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 18px 12px 36px',
                textDecoration: 'none',
                color: isActive(link.path) ? '#0091c2' : '#323527',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '16px',
                borderLeft: isActive(link.path) ? '3px solid #0091c2' : '3px solid transparent'
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              display: 'block',
              padding: '14px 18px',
              textDecoration: 'none',
              color: isActive('/contact') ? '#0091c2' : '#323527',
              fontWeight: isActive('/contact') ? '600' : '500',
              fontSize: '17px',
              borderLeft: isActive('/contact') ? '3px solid #0091c2' : '3px solid transparent'
            }}
          >
            Contact
          </Link>

          <div style={{ display: 'flex', gap: '1.5rem', padding: '18px', justifyContent: 'center' }}>
            <a href="https://facebook.com/plantspaco" target="_blank" rel="noopener noreferrer">
              <Facebook size={28} color="#0091c2" />
            </a>
            <a href="https://instagram.com/plantspaco" target="_blank" rel="noopener noreferrer">
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
