import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '3rem 1.5rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/buzwcxdn_PlantSpaCo_Logo_Primary_Transparent.png" 
              alt="Plant Spa Co." 
              style={{ height: '60px', width: 'auto', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              Nurturing plants, elevating spaces. Professional plant care, interior design, and botanical experiences.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                color: '#ff5757',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                color: '#ff5757',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '18px', fontWeight: '600' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Home', 'Services', 'Events', 'Shop', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff5757'}
                  onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '18px', fontWeight: '600' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#ff5757" />
                <a href="tel:+1234567890" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>
                  (123) 456-7890
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#ff5757" />
                <a href="mailto:hello@plantspaco.com" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>
                  hello@plantspaco.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#ff5757" style={{ marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '14px' }}>
                  123 Green Street<br />Plant City, PC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '18px', fontWeight: '600' }}>Stay Updated</h4>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '1rem' }}>
              Subscribe to our newsletter for plant care tips and exclusive offers.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing! (This is a demo)');
              e.target.reset();
            }} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Your email"
                required
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '14px'
                }}
              />
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '14px'
        }}>
          <p>&copy; {new Date().getFullYear()} Plant Spa Co. LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;