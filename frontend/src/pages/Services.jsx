import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Quick Refresh (¼ Day)',
      price: '$325',
      duration: 'Up to 2 hours',
      team: 'Two Plant Stylists',
      description: 'Best for a few key plants needing simple repots, touch-ups, or a small new setup.',
      features: [
        'Professional assessment',
        'Basic repotting & soil refresh',
        'Pruning & cleaning',
        'Placement optimization'
      ]
    },
    {
      id: 2,
      title: 'Signature Spa (½ Day)',
      price: '$545',
      duration: 'Up to 4 hours',
      team: 'Two Plant Stylists',
      description: 'Best for one room or zone with mixed needs: some rehab, some refresh, some styling.',
      features: [
        'Comprehensive plant evaluation',
        'Full repotting service',
        'Deep cleaning & grooming',
        'Pest treatment if needed',
        'Design consultation',
        'Care instructions'
      ]
    },
    {
      id: 3,
      title: 'Full Plant Spa Day',
      price: '$1,150',
      duration: 'Up to 8 hours',
      team: 'Two Plant Stylists',
      description: 'Complete transformation for multiple rooms or extensive plant collections.',
      features: [
        'Full-day dedicated service',
        'Multiple room coverage',
        'Complete plant makeover',
        'Professional styling',
        'Soil upgrades & repotting',
        'Detailed care plan',
        'Follow-up consultation'
      ]
    },
    {
      id: 4,
      title: 'Signature Plant Stewardship',
      price: '$1,750',
      duration: 'Ongoing Program',
      team: 'Dedicated Team',
      description: 'Concierge-level ongoing care, extended support, and follow-up for serious plant collections.',
      features: [
        'Monthly maintenance visits',
        'Priority scheduling',
        'Emergency plant rescue',
        '24/7 plant care support',
        'Seasonal adjustments',
        'Premium plant sourcing',
        'Quarterly health reports'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.1) 0%, rgba(212, 166, 94, 0.05) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>Plant Care Services for Your Home</h1>
        <div className="gold-divider" />
        <p style={{ fontSize: '1.3rem', color: '#323527', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Professional, personalized plant care that comes to you
        </p>
        <Link to="/contact">
          <button className="btn-primary" style={{ fontSize: '19px', padding: '18px 42px' }}>
            <Calendar size={22} />
            Book Your Free Walkthrough
          </button>
        </Link>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div style={{
          display: 'grid',
          gap: '3rem'
        }}>
          {services.map((service) => (
            <div key={service.id} className="card" style={{ 
              padding: '3rem',
              borderLeft: '4px solid #0091c2'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                alignItems: 'start'
              }}>
                <div>
                  <h2 style={{ marginBottom: '1rem', fontSize: '2rem', color: '#231f20' }}>{service.title}</h2>
                  <p style={{ 
                    color: '#0091c2', 
                    fontWeight: '700', 
                    fontSize: '2.5rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    {service.price}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <Clock size={20} color="#3e8840" />
                      <span style={{ fontSize: '1.05rem', color: '#323527' }}>{service.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Users size={20} color="#3e8840" />
                      <span style={{ fontSize: '1.05rem', color: '#323527' }}>{service.team}</span>
                    </div>
                  </div>
                  <p style={{ 
                    color: '#323527', 
                    fontSize: '1.1rem', 
                    marginBottom: '2rem',
                    lineHeight: '1.7'
                  }}>
                    {service.description}
                  </p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1.5rem', color: '#231f20', fontSize: '1.25rem' }}>What's Included:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1rem', 
                        marginBottom: '1rem' 
                      }}>
                        <CheckCircle size={22} color="#3e8840" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '1.05rem', color: '#323527', lineHeight: '1.6' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <button className="btn-accent" style={{ width: '100%', marginTop: '2rem', fontSize: '17px' }}>
                      Book This Service
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0091c2 0%, #3e8840 100%)',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to Get Started?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Get a free consultation and custom proposal for your space
        </p>
        <Link to="/contact">
          <button style={{
            background: 'white',
            color: '#0091c2',
            border: 'none',
            borderRadius: '8px',
            padding: '18px 42px',
            fontSize: '19px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <Calendar size={22} />
            Schedule Free Walkthrough
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
