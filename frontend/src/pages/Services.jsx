import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../mockData';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Our Services</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
          Professional plant care and design solutions tailored to your needs
        </p>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div style={{
          display: 'grid',
          gap: '4rem'
        }}>
          {services.map((service, index) => (
            <div key={service.id} style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }} className="service-item">
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <h2 style={{ marginBottom: '1rem' }}>{service.title}</h2>
                <p style={{ 
                  color: '#ff5757', 
                  fontWeight: '700', 
                  fontSize: '1.5rem', 
                  marginBottom: '1.5rem' 
                }}>
                  {service.price}
                </p>
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '1.125rem', 
                  marginBottom: '2rem',
                  lineHeight: '1.7'
                }}>
                  {service.description}
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: '#0f172a' }}>What's Included:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem', 
                        marginBottom: '0.75rem' 
                      }}>
                        <CheckCircle size={20} color="#22c55e" />
                        <span style={{ fontSize: '16px', color: '#64748b' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact">
                  <button className="btn-primary" style={{ fontSize: '18px', padding: '14px 32px' }}>
                    Book This Service
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Work</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            See how we've transformed spaces with beautiful plants
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            'https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/klqm94fp_IMG_3807.HEIC',
            'https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/qjr4pt4d_IMG_3370.HEIC',
            'https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/zmnwupyn_IMG_3272.HEIC',
            'https://images.unsplash.com/photo-1645242583433-9f87f1e4f065',
            'https://images.unsplash.com/photo-1681675748349-7168e5fe4be8',
            'https://images.unsplash.com/photo-1746702475474-fc4baed9f0c9'
          ].map((img, idx) => (
            <div key={idx} style={{
              height: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ff5757 0%, #e04545 100%)',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Not sure which service you need?</h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95 }}>
          Get a free consultation and we'll help you find the perfect solution
        </p>
        <Link to="/contact">
          <button className="btn-outline" style={{ 
            backgroundColor: 'white',
            color: '#ff5757',
            border: '2px solid white',
            fontSize: '18px',
            padding: '14px 32px'
          }}>
            Contact Us
          </button>
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-item {
            grid-template-columns: 1fr !important;
          }
          .service-item > div {
            order: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;