import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Sparkles, CheckCircle } from 'lucide-react';
import { services, testimonials } from '../mockData';
import PlantDiagnostic from '../components/PlantDiagnostic';

const Home = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 87, 87, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        
        <div style={{
          maxWidth: '1280px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          zIndex: 1
        }}>
          <div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: '#0f172a'
            }}>
              Nurturing Plants,<br />
              <span style={{ color: '#ff5757' }}>Elevating Spaces</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#64748b',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              Professional plant care, interior design, and botanical experiences that bring life to your home and office.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setIsDiagnosticOpen(true)}
                className="btn-primary" 
                style={{ fontSize: '18px', padding: '16px 32px' }}
              >
                <Leaf size={20} />
                Diagnose Plant Issues
              </button>
              <Link to="/services">
                <button className="btn-secondary" style={{ fontSize: '18px', padding: '14px 30px' }}>
                  Our Services
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '500px'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1717001393306-4a430ebdd615" 
              alt="Luxury plant arrangement"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Services</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            From repotting to full interior design, we offer comprehensive plant care solutions.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <div key={service.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src={service.image} 
                alt={service.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{service.title}</h3>
                <p style={{ color: '#ff5757', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>
                  {service.price}
                </p>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <CheckCircle size={16} color="#22c55e" />
                      <span style={{ fontSize: '14px', color: '#64748b' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className="btn-primary" style={{ width: '100%' }}>
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Why Choose Plant Spa Co?</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
            We're not just plant caregivers—we're botanical artists creating living masterpieces.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem'
        }}>
          {[
            {
              icon: <Leaf size={40} color="#ff5757" />,
              title: 'Expert Care',
              description: 'Years of horticultural expertise ensuring your plants thrive'
            },
            {
              icon: <Sparkles size={40} color="#ff5757" />,
              title: 'Custom Design',
              description: 'Tailored plant arrangements that complement your unique space'
            },
            {
              icon: <Users size={40} color="#ff5757" />,
              title: 'Community Events',
              description: 'Engaging workshops and parties for plant enthusiasts'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>What Our Clients Say</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Join hundreds of satisfied plant parents
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#ff5757', fontSize: '20px' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>
              <div>
                <p style={{ fontWeight: '600', color: '#0f172a' }}>{testimonial.name}</p>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #ff5757 0%, #e04545 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to Transform Your Space?</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
          Let's create something beautiful together
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact">
            <button className="btn-outline" style={{ 
              backgroundColor: 'white',
              color: '#ff5757',
              border: '2px solid white',
              fontSize: '18px',
              padding: '14px 32px'
            }}>
              Get Started
            </button>
          </Link>
          <Link to="/events">
            <button className="btn-outline" style={{ 
              color: 'white',
              border: '2px solid white',
              fontSize: '18px',
              padding: '14px 32px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#ff5757';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
            >
              Browse Events
            </button>
          </Link>
        </div>
      </section>

      {/* Plant Diagnostic Modal */}
      <PlantDiagnostic isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
    </div>
  );
};

export default Home;