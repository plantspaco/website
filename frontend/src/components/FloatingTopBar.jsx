import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingTopBar = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#3e8840',
      background: 'linear-gradient(90deg, #3e8840 0%, #0091c2 100%)',
      padding: '0.75rem 1.5rem',
      zIndex: 9999,
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <a href="tel:9196072066" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1.05rem',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <Phone size={18} />
          919-607-2066
        </a>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center'
      }}>
        <a href="/contact">
          <button style={{
            background: 'white',
            color: '#3e8840',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 24px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            📅 Book a Free Plant Check
          </button>
        </a>
        
        <a href="sms:9196072066">
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '2px solid white',
            borderRadius: '8px',
            padding: '8px 20px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#3e8840';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.color = 'white';
          }}
          >
            <MessageCircle size={16} />
            Text a Plant Photo
          </button>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="position: fixed"] {
            padding: 0.5rem 1rem !important;
            font-size: 14px !important;
          }
          button {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingTopBar;