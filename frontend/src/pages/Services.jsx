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
      description: 'Best for a few key plants needing care, touch-ups, or a small new setup.',
      ideal: 'Perfect for maintaining 3-5 plants or a quick seasonal refresh'
    },
    {
      id: 2,
      title: 'Signature Spa (½ Day)',
      price: '$545',
      duration: 'Up to 4 hours',
      team: 'Two Plant Stylists',
      description: 'Best for one room or zone with mixed needs: some rehab, some refresh, some styling.',
      ideal: 'Ideal for 6-12 plants or a full room transformation'
    },
    {
      id: 3,
      title: 'Full Plant Spa Day',
      price: '$1,150',
      duration: 'Up to 8 hours',
      team: 'Two Plant Stylists',
      description: 'Complete transformation for multiple rooms or extensive plant collections.',
      ideal: 'Perfect for 15+ plants or whole-home plant care'
    },
    {
      id: 4,
      title: 'Signature Plant Stewardship',
      price: '$1,750',
      duration: 'Ongoing Program',
      team: 'Dedicated Team',
      description: 'Concierge-level ongoing care, extended support, and follow-up for serious plant collections.',
      ideal: 'Monthly visits with VIP support for plant collectors'
    }
  ];

  const includedServices = [
    'Plant health & visual inspection',
    'Root inspection + repotting when needed - we use BigFoot Gold which contains 950 million living microbes of diverse endo mycorrhizae and beneficial bacteria in every gram! This powerful formula encourages plant and root development',
    'Fertilization when appropriate',
    'Fresh soil refresh - we use custom premium blend using potting soil from a local nursery tailored to the plant type + decorative top dressing',
    'Seasonal plant placement (indoors & outdoors) - we measure light using a professional light meter',
    'Pruning, leaf cleaning & gentle leaf shining',
    'Care tweaks based on your light and environment',
    'White-glove setup and cleanup'
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
        <p style={{ fontSize: '1.5rem', color: '#0091c2', fontWeight: '600', marginBottom: '1rem', fontStyle: 'italic' }}>
          Give your plants the spa day they deserve
        </p>
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

      {/* What's Included - Universal for All Spa Days */}
      <section className="section section-alt">
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Included in Every Plant Spa Visit</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527', marginBottom: '3rem' }}>
            Comprehensive care for your plants, no matter which package you choose
          </p>
          
          <div style={{
            textAlign: 'left',
            background: 'white',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            border: '2px solid #d4a65e'
          }}>
            {includedServices.map((service, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                marginBottom: idx < includedServices.length - 1 ? '1.75rem' : '0',
                paddingBottom: idx < includedServices.length - 1 ? '1.75rem' : '0',
                borderBottom: idx < includedServices.length - 1 ? '1px solid #f0ede8' : 'none'
              }}>
                <CheckCircle size={24} color="#3e8840" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '1.1rem',
                  color: '#323527',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {service}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.1) 0%, rgba(212, 166, 94, 0.1) 100%)',
            borderRadius: '12px',
            border: '2px solid #c3da51'
          }}>
            <p style={{
              fontSize: '1.15rem',
              color: '#323527',
              lineHeight: '1.8',
              margin: 0,
              fontWeight: '500'
            }}>
              💚 <strong>Premium Quality Guarantee:</strong> We use BigFoot Gold soil amendment with 950 million living microbes per gram, plus custom soil blends from local nurseries tailored to each plant type. Your plants get the absolute best care possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Choose Your Package</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527' }}>
            The difference is time and scope — all packages include our full spa service
          </p>
        </div>
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
                  <div style={{
                    background: 'rgba(195, 218, 81, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                  }}>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#323527',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      {service.ideal}
                    </p>
                  </div>
                </div>
                <div>
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
