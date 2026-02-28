import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Calendar, MessageCircle, Leaf, Users, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section - Restaurant Focused */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.08) 0%, rgba(81, 188, 235, 0.05) 100%)',
        padding: '5rem 2rem',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '3.8rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: '#231f20'
            }}>
              Professional Interior Plant Care for <span style={{ color: '#3e8840' }}>Restaurants</span> & <span style={{ color: '#0091c2' }}>Hospitality</span>
            </h1>
            <p style={{
              fontSize: '1.35rem',
              color: '#323527',
              marginBottom: '2.5rem',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              We design, install, and maintain healthy plant displays that elevate your guest experience and brand image.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn-primary" style={{ 
                  fontSize: '19px', 
                  padding: '18px 42px',
                  boxShadow: '0 6px 16px rgba(0, 145, 194, 0.25)'
                }}>
                  <Calendar size={22} />
                  Request Free Walkthrough Proposal
                </button>
              </Link>
              <a href="tel:+1234567890">
                <button className="btn-secondary" style={{ fontSize: '19px', padding: '16px 40px' }}>
                  <Phone size={22} />
                  Free Plant Discovery Call
                </button>
              </a>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '550px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1717001393306-4a430ebdd615" 
              alt="Professional restaurant plant design"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{
        backgroundColor: '#0091c2',
        padding: '3rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem'
          }}>
            {[
              { icon: <Users size={48} />, title: '50+ Restaurants', subtitle: 'Served' },
              { icon: <Award size={48} />, title: 'Professional', subtitle: 'Certified Team' },
              { icon: <Leaf size={48} />, title: '1000+ Plants', subtitle: 'Maintained Monthly' },
              { icon: <TrendingUp size={48} />, title: '98% Client', subtitle: 'Retention Rate' }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', opacity: 0.95 }}>
                  {item.icon}
                </div>
                <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.75rem' }}>{item.title}</h3>
                <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>{item.subtitle}</p>
              </div>
            ))}\n          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=\"section\">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Comprehensive Plant Services</h2>
          <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
            Professional solutions designed for the unique needs of hospitality spaces
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: 'On-Site Plant Maintenance',
              description: 'Regular scheduled visits to keep your plants thriving',
              icon: <Leaf size={40} color=\"#3e8840\" />
            },
            {
              title: 'Custom Plant Design & Installation',
              description: 'Tailored plant selections that match your brand aesthetic',
              icon: <Award size={40} color=\"#0091c2\" />
            },
            {
              title: 'Pruning & Reshaping',
              description: 'Professional grooming to maintain perfect appearance',
              icon: <CheckCircle size={40} color=\"#3e8840\" />
            },
            {
              title: 'Repotting & Soil Upgrades',
              description: 'Essential care to promote healthy long-term growth',
              icon: <CheckCircle size={40} color=\"#0091c2\" />
            },
            {
              title: 'Pest Prevention & Treatment',
              description: 'Proactive monitoring and immediate intervention',
              icon: <CheckCircle size={40} color=\"#3e8840\" />
            },
            {
              title: 'Monthly Maintenance Plans',
              description: 'Flexible contracts designed for your schedule and budget',
              icon: <Calendar size={40} color=\"#0091c2\" />
            }
          ].map((service, idx) => (
            <div key={idx} className=\"card\" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
              <p style={{ color: '#323527', lineHeight: '1.7', fontSize: '1.05rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to=\"/services\">
            <button className=\"btn-accent\" style={{ fontSize: '18px', padding: '16px 40px' }}>
              View All Services
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=\"section section-alt\">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>How It Works</h2>
          <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
            Simple, professional process from consultation to ongoing care
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {[
            {
              step: '1',
              title: 'Share Your Space',
              description: 'Send us photos of your restaurant or schedule a walkthrough',
              emoji: '📸'
            },
            {
              step: '2',
              title: 'Get Your Package Match',
              description: 'Receive a customized proposal with plant selections and pricing',
              emoji: '📦'
            },
            {
              step: '3',
              title: 'Choose Your Styling',
              description: 'Review design options and finalize your plant arrangement',
              emoji: '🪴'
            },
            {
              step: '4',
              title: 'Plant Spa Day',
              description: 'Professional installation and ongoing maintenance begins',
              emoji: '✨'
            }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                filter: 'grayscale(20%)'
              }}>
                {item.emoji}
              </div>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#0091c2',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                {item.step}
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{item.title}</h3>
              <p style={{ color: '#323527', lineHeight: '1.6', fontSize: '1.05rem' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grow Club Section */}
      <section className=\"section\">
        <div style={{
          background: 'linear-gradient(135deg, #c3da51 0%, #3e8840 100%)',
          borderRadius: '20px',
          padding: '4rem 3rem',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }} />
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem', position: 'relative', zIndex: 1 }}>
            Join Grow Club
          </h2>
          <p style={{ fontSize: '1.35rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1 }}>
            $100/month • Every dollar becomes credit toward services
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
            textAlign: 'left',
            position: 'relative',
            zIndex: 1
          }}>
            {[
              '15% off Spa Days (½ Day, Full Day, and Signature)',
              '10% off follow-ups & ongoing care',
              '10% off merchandise (pots, accessories & more)',
              'Priority scheduling for your restaurant',
              '$50 credit for referrals',
              '$25 birthday credit'
            ].map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <CheckCircle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{benefit}</span>
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            <p style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              1 Year in Grow Club Equals:
            </p>
            <p style={{ fontSize: '1.05rem', opacity: 0.95' }}>
              1 Full Day Spa + 2 in-home follow-ups + $125 merchandise credit<br />
              <strong>OR</strong><br />
              2 Half Days (Spring & Fall) + 2 follow-ups + $75 merch credit
            </p>
          </div>
          <Link to=\"/contact\">
            <button className=\"btn-primary\" style={{
              backgroundColor: 'white',
              color: '#3e8840',
              fontSize: '19px',
              padding: '18px 42px',
              fontWeight: '700',
              position: 'relative',
              zIndex: 1
            }}>
              Join Grow Club Today
              <ArrowRight size={22} />
            </button>
          </Link>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className=\"section section-alt\">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Trusted by Local Restaurants</h2>
          <p style={{ fontSize: '1.2rem', color: '#323527' }}>
            See how professional plant care transformed this restaurant space
          </p>
        </div>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
        }}>
          <video 
            controls 
            style={{ width: '100%', height: 'auto', display: 'block' }}
            poster=\"https://images.unsplash.com/photo-1746702475474-fc4baed9f0c9\"
          >
            <source src=\"https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/47lk4how_Tv-Ad.mp4\" type=\"video/mp4\" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '2rem',
          maxWidth: '800px',
          margin: '2rem auto 0'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#323527', fontStyle: 'italic', lineHeight: '1.7' }}>
            "Plant Spa Co. has completely transformed our dining atmosphere. Our guests constantly compliment the beautiful greenery, and we love that maintenance is completely hands-off for us."
          </p>
          <p style={{ fontWeight: '600', marginTop: '1rem', fontSize: '1.05rem', color: '#0091c2' }}>
            — Restaurant Owner
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0091c2 0%, #3e8840 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.75rem' }}>
          Ready to Elevate Your Restaurant's Ambiance?
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          Schedule your free consultation and receive a custom proposal
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to=\"/contact\">
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
              gap: '10px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
            }}
            >
              <Calendar size={22} />
              Book Free Plant Health Check
            </button>
          </Link>
          <a href=\"tel:+1234567890\">
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              padding: '16px 40px',
              fontSize: '19px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#0091c2';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              <Phone size={22} />
              Call for 20-Min Rescue Consult
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
