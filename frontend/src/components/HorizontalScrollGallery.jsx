import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HorizontalScrollGallery = ({ images, title }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative', padding: '3rem 0' }}>
      {title && (
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
          <div className="gold-divider" />
        </div>
      )}
      
      <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <ChevronLeft size={24} color="#0091c2" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <ChevronRight size={24} color="#0091c2" />
        </button>

        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '1rem 2rem',
            scrollbarWidth: 'none'
          }}
          className="hide-scrollbar"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                minWidth: '400px',
                height: '500px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                scrollSnapAlign: 'center',
                position: 'relative'
              }}
            >
              <img 
                src={img.url} 
                alt={img.alt || `Gallery ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {img.label && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  padding: '2rem 1.5rem 1rem',
                  color: 'white'
                }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{img.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollGallery;