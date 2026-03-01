import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Calendar, Heart, Leaf, Home as HomeIcon, Sparkles, Users, Award, Facebook, Instagram } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section - Home Focused */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.06) 0%, rgba(212, 166, 94, 0.04) 100%)',
        padding: '5rem 2rem',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Gold accent swish */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 166, 94, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        
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
              Professional Plant Care for <span style={{ color: '#3e8840' }}>Homes</span> & <span style={{ color: '#0091c2' }}>Small Businesses</span>
            </h1>
            <div className="gold-divider" style={{ margin: '1.5rem 0' }} />
            <p style={{
              fontSize: '1.4rem',
              color: '#323527',
              marginBottom: '2.5rem',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              We <strong>repot, refresh, and restyle</strong> your plants at home — so you have lush, beautiful plants without the work.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn-primary" style={{ 
                  fontSize: '19px', 
                  padding: '18px 42px'
                }}>
                  <Calendar size={22} />
                  Book Your Free Plant Walkthrough
                </button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary" style={{ fontSize: '19px', padding: '16px 40px' }}>
                  Explore Our Services
                  <ArrowRight size={22} />
                </button>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0091c2',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Facebook size={20} />
                Follow on Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0091c2',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '550px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1717001393306-4a430ebdd615" 
              alt="Beautiful healthy plants in a home"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>How We Help Your Plants Thrive</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
            Professional care solutions for every plant parent
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: 'In-Home Plant Care & Maintenance',
              description: 'We come to your home to keep your plants healthy and beautiful',
              icon: <HomeIcon size={40} color="#3e8840" />
            },
            {
              title: 'Pruning & Reshaping',
              description: 'Expert grooming to keep your plants looking their best',
              icon: <Sparkles size={40} color="#0091c2" />
            },
            {
              title: 'Repotting & Soil Upgrades',
              description: 'Fresh soil and proper pots for optimal plant health',
              icon: <Leaf size={40} color="#3e8840" />
            },
            {
              title: 'Pest Prevention & Treatment',
              description: 'Keep your plants pest-free with gentle, effective care',
              icon: <CheckCircle size={40} color="#0091c2" />
            },
            {
              title: 'Plant Styling & Space Design',
              description: 'Create beautiful plant displays that complement your home',
              icon: <Award size={40} color="#d4a65e" />
            },
            {
              title: 'Vacation Plant Care & Plant Sitting',
              description: 'Travel worry-free knowing your plants are cared for',
              icon: <Heart size={40} color="#3e8840" />
            },
            {
              title: 'Monthly Maintenance Plans',
              description: 'Regular care visits to keep your collection thriving',
              icon: <Calendar size={40} color="#0091c2" />
            },
            {
              title: 'Small Business & Restaurant Care',
              description: 'Professional plant services for your commercial space',
              icon: <Users size={40} color="#d4a65e" />
            }
          ].map((service, idx) => (
            <div key={idx} className="card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{service.title}</h3>
              <p style={{ color: '#323527', lineHeight: '1.7', fontSize: '1.05rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services">
            <button className="btn-accent" style={{ fontSize: '18px', padding: '16px 40px' }}>
              View All Services & Pricing
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Vacation Care Highlight */}
      <section style={{
        background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Heart size={64} style={{ marginBottom: '1.5rem', opacity: 0.95 }} />
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.75rem' }}>
            Going Out of Town? We'll Care for Your Plants.
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            background: 'rgba(255,255,255,0.4)',
            margin: '2rem auto'
          }} />
          <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', lineHeight: '1.7', opacity: 0.95 }}>
            Enjoy your trip knowing your plants are in expert hands. Our vacation plant care keeps your plants healthy, watered, and thriving while you're away.
          </p>
          <Link to="/contact">
            <button style={{
              background: 'white',
              color: '#3e8840',
              border: 'none',
              borderRadius: '12px',
              padding: '18px 42px',
              fontSize: '19px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
            }}
            >
              <Calendar size={22} />
              Schedule Vacation Plant Care
            </button>
          </Link>
        </div>
      </section>

      {/* Grow Club Section */}
      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, #c3da51 0%, #d4a65e 100%)',
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
            Join Grow Club 🌱
          </h2>
          <p style={{ fontSize: '1.35rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1 }}>
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
              '15% off all Spa Days',
              '10% off follow-ups & ongoing care',
              '10% off merchandise',
              'Priority scheduling',
              '$50 credit for referrals',
              '$25 birthday credit'
            ].map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <CheckCircle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{benefit}</span>
              </div>
            ))}
          </div>
          <Link to="/contact">
            <button className="btn-primary" style={{
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

      {/* Social Impact Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Growing More Than Plants 🌱</h2>
          <div className="gold-divider" />
          <p style={{
            fontSize: '1.25rem',
            color: '#323527',
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}>
            A portion of our work supports <strong>foster youth</strong> through career mentorship, skill-building, and life development programs.
          </p>
          <p style={{
            fontSize: '1.15rem',
            color: '#323527',
            lineHeight: '1.8',
            fontStyle: 'italic'
          }}>
            We believe healthy plants and healthy communities grow together. 💚
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>What Our Clients Are Saying</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527' }}>
            Real plant parents, real results
          </p>
        </div>
        
        {/* Video Testimonial */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 4rem',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
        }}>
          <video 
            controls 
            style={{ width: '100%', height: 'auto', display: 'block' }}
            poster="https://images.unsplash.com/photo-1746702475474-fc4baed9f0c9"
          >
            <source src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/47lk4how_Tv-Ad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            {
              text: "Plant Spa Co. completely transformed my indoor jungle. My plants have never looked healthier, and I finally have time to enjoy them instead of worrying about them!",
              name: "Sarah M.",
              location: "Homeowner"
            },
            {
              text: "I was so nervous leaving for vacation, but the team took incredible care of my plant collection. Everything was thriving when I got back!",
              name: "James L.",
              location: "Plant Collector"
            },
            {
              text: "The repotting service was a game-changer. They knew exactly what each plant needed, and now they're all flourishing. Highly recommend!",
              name: "Emily R.",
              location: "Apartment Dweller"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="card" style={{ borderTop: '3px solid #d4a65e' }}>
              <p style={{ 
                color: '#323527', 
                marginBottom: '1.5rem', 
                fontStyle: 'italic', 
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <p style={{ fontWeight: '600', color: '#231f20', fontSize: '1.05rem' }}>{testimonial.name}</p>
                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{testimonial.location}</p>
              </div>
            </div>
          ))}
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
          Ready to Give Your Plants the Care They Deserve?
        </h2>
        <div style={{
          width: '100px',
          height: '3px',
          background: 'rgba(255,255,255,0.4)',
          margin: '2rem auto'
        }} />
        <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          Schedule your free walkthrough and discover how easy plant care can be
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact">
            <button style={{
              background: 'white',
              color: '#0091c2',
              border: 'none',
              borderRadius: '12px',
              padding: '18px 42px',
              fontSize: '19px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
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
              Book Your Free Walkthrough
            </button>
          </Link>
          <a href="tel:+1234567890">
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '12px',
              padding: '16px 40px',
              fontSize: '19px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
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
              Call Us Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
