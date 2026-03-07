import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, Calendar, MapPin, Star, Leaf, Heart, AlertTriangle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/4qm24nmb_feey-yTKIrp9dXB8-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3rem 2rem',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            maxWidth: '800px'
          }}>
            Professional Houseplant Service for Homes & Small Businesses
          </h1>
          <p style={{
            fontSize: '1.6rem',
            marginBottom: '3rem',
            maxWidth: '700px',
            lineHeight: '1.6',
            fontWeight: '400',
            opacity: 0.95
          }}>
            Healthy, thriving plants making your space beautiful and inviting.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/services">
              <button className="btn-primary" style={{ 
                fontSize: '20px', 
                padding: '20px 48px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
              }}>
                <Calendar size={24} />
                Book a Spa Day
              </button>
            </Link>
            <a href="sms:9196072066">
              <button className="btn-secondary" style={{ 
                fontSize: '20px', 
                padding: '18px 46px',
                backgroundColor: 'white',
                color: '#3e8840',
                border: '2px solid white'
              }}>
                <MessageCircle size={24} />
                Text Us Your Plants
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f0e8 0%, #faf8f5 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        borderTop: '4px solid #d4a65e'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.75rem',
            marginBottom: '1.5rem',
            color: '#323527',
            fontWeight: '700'
          }}>
            Be honest — there's a plant in your home that needs attention right now.
          </h2>
          <p style={{
            fontSize: '1.35rem',
            color: '#64748b',
            lineHeight: '1.8',
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            Too busy, not sure what it needs, avoiding the repotting mess. That's exactly why we exist. <strong>No judgment.</strong>
          </p>
        </div>
      </section>

      {/* 3. GUIDE SECTION */}
      <section className="section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>
              That's where Plant Spa Co. comes in.
            </h2>
            <div className="gold-divider" style={{ margin: '1.5rem 0' }} />
            <p style={{
              fontSize: '1.25rem',
              color: '#323527',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              We arrive with everything — the knowledge, the soil, the tools, the solutions. Your plants get expert, hands-on attention while you relax.
            </p>
            <p style={{
              fontSize: '1.25rem',
              color: '#3e8840',
              lineHeight: '1.8',
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              Think of it as a spa day for both of you.
            </p>
          </div>
          <div style={{
            height: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/32ll3qas_beverly-kimberly-MTBScGhROds-unsplash.jpg"
              alt="Plant care in progress"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO SECTION */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>What We Do</h2>
          <div className="gold-divider" />
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {/* Card 1 - Spa Day */}
          <div className="card" style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/3miat3ra_shamees-cm-yK8ngeTIxsU-unsplash.jpg"
                alt="Spa Day Visit"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Spa Day Visit</h3>
            <p style={{ fontSize: '1.1rem', color: '#323527', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              A full treatment for your collection — pruning, repotting, pest care, and styling. We bring everything. You just enjoy the results.
            </p>
            <Link to="/services">
              <button className="btn-accent" style={{ width: '100%', fontSize: '17px' }}>
                Book a Spa Day
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Card 2 - Grow Club */}
          <div className="card" style={{ textAlign: 'center', position: 'relative', border: '3px solid #c3da51' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#c3da51',
              color: '#323527',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}>
              <Star size={16} fill="#323527" />
              Founding Member Spots Available
            </div>
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              marginTop: '1rem'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/9dxpp83c_feey-LeMlK-VpJwU-unsplash.jpg"
                alt="Grow Club Membership"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Grow Club Membership</h3>
            <p style={{ fontSize: '1.1rem', color: '#323527', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              $100/month that becomes credit toward services. Founding members save 15% on Spa Days, get priority scheduling, and earn rewards for referrals.
            </p>
            <Link to="/shop">
              <button className="btn-primary" style={{ width: '100%', fontSize: '17px' }}>
                Join Grow Club
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Card 3 - Business Care */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Leaf size={80} color="white" style={{ opacity: 0.3 }} />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Small Business Care</h3>
            <p style={{ fontSize: '1.1rem', color: '#323527', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Restaurants, boutiques, and offices deserve beautiful plants too. We handle your collection so you can focus on your business.
            </p>
            <Link to="/contact">
              <button className="btn-gold" style={{ width: '100%', fontSize: '17px' }}>
                Get a Business Quote
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Three steps to beautiful plants.</h2>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {[
            {
              step: '1',
              title: 'Share Your Plants & Vision',
              description: 'Send us a few photos and tell us what you\'re looking for — new planters, better light, a fresh style.'
            },
            {
              step: '2',
              title: 'We Build Your Plan',
              description: 'We recommend the right package and arrive with everything your collection needs. No trips to the store, no guesswork.',
              extra: 'We bring the basics. Need new planters or plants? We can source those too.'
            },
            {
              step: '3',
              title: 'Plant Spa Day at Home',
              description: 'We handle everything while you relax. You just enjoy the results.'
            }
          ].map((item) => (
            <div key={item.step} style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: '2px solid #f0ede8'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                fontWeight: '800',
                boxShadow: '0 8px 20px rgba(62, 136, 64, 0.3)'
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ fontSize: '1.05rem', color: '#323527', lineHeight: '1.7' }}>
                {item.description}
              </p>
              {item.extra && (
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginTop: '1rem',
                  fontStyle: 'italic'
                }}>
                  {item.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRIMARY CTA SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>
            Let's talk about your plants.
          </h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '2.5rem', opacity: 0.95 }}>
            Start by texting us a few photos of your collection. We'll review them and set up a free 15-minute video call to walk you through exactly what your plants need.
          </p>
          <a href="sms:9196072066">
            <button style={{
              background: 'white',
              color: '#3e8840',
              border: 'none',
              borderRadius: '12px',
              padding: '20px 50px',
              fontSize: '20px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <MessageCircle size={26} />
              Text Us Your Plants
            </button>
          </a>
          <p style={{
            fontSize: '0.95rem',
            marginTop: '1.5rem',
            opacity: 0.85,
            fontStyle: 'italic'
          }}>
            Free discovery call. No commitment. No judgment!
          </p>
        </div>
      </section>

      {/* 7. SERVICE AREA MAP */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>We Come to You</h2>
          <div className="gold-divider" />
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '3rem',
            marginTop: '3rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            border: '2px solid #3e8840'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <MapPin size={40} color="#3e8840" />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#323527', marginBottom: '0.25rem' }}>
                  Morrisville, NC
                </p>
                <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                  Serving the Triangle & surrounding areas
                </p>
              </div>
            </div>
            <p style={{ fontSize: '1.15rem', color: '#323527', lineHeight: '1.7' }}>
              We service homes and businesses within a 50-mile radius, including Henderson, Durham, Raleigh, Chapel Hill, and beyond.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: '#0091c2',
              marginTop: '1.5rem',
              fontWeight: '600'
            }}>
              Not sure if we serve your area? Text us and ask!
            </p>
          </div>
        </div>
      </section>

      {/* 8. SUCCESS SECTION */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            This is what your plants — and your space — can look like.
          </h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            Real homes. Real transformations. Real relief.
          </p>
        </div>

        {/* Before/After Note */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.1) 0%, rgba(212, 166, 94, 0.1) 100%)',
          padding: '2.5rem',
          borderRadius: '16px',
          marginBottom: '4rem',
          border: '2px solid #c3da51',
          maxWidth: '1000px',
          margin: '0 auto 4rem'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#323527', lineHeight: '1.8', textAlign: 'center' }}>
            <strong>Before:</strong> A beloved peace lily — a gift from her father's funeral — root-bound, dusty, and overdue for care.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#3e8840', lineHeight: '1.8', textAlign: 'center', marginTop: '1rem', fontWeight: '600' }}>
            <strong>After:</strong> Rehabbed, restyled, and thriving in a beautiful new planter. Ready for another 30 years.
          </p>
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              text: "Maureen took my plants from sad to fab. Some of these plants are from my father's funeral — they're really old and very sentimental. Now I feel like a grown up. 10 out of 10!",
              name: "Kim",
              location: "Hillsborough, NC"
            },
            {
              text: "Heavy pots, overdue repots, busy mom, business owner... Plant Spa Co. showed up, handled everything, and saved my back and my plants. Worth every penny.",
              name: "Jennifer",
              location: "Henderson, NC"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="card" style={{ borderTop: '4px solid #3e8840' }}>
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#c3da51" color="#c3da51" style={{ display: 'inline' }} />
                ))}
              </div>
              <p style={{
                fontSize: '1.15rem',
                color: '#323527',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#323527' }}>— {testimonial.name}</p>
                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAILURE / EDUCATION SECTION */}
      <section className="section section-alt">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
              Your plants are more patient than you deserve.
            </h2>
            <p style={{ fontSize: '1.4rem', color: '#64748b', fontWeight: '600' }}>
              But they won't wait forever.
            </p>
          </div>

          {/* Callout Badge */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            padding: '2.5rem',
            borderRadius: '16px',
            marginBottom: '3rem',
            border: '3px solid #f59e0b',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem',
            boxShadow: '0 8px 20px rgba(245, 158, 11, 0.2)'
          }}>
            <AlertTriangle size={48} color="#f59e0b" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '1.3rem', fontWeight: '800', color: '#92400e', marginBottom: '1rem' }}>
                🪴 Did you know?
              </p>
              <p style={{ fontSize: '1.15rem', color: '#78350f', lineHeight: '1.7' }}>
                A root-bound plant left too long can develop root rot — and root rot spreads. One neglected plant can silently take out your whole collection.
              </p>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#323527', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              The longer you wait, the harder it gets. What starts as an overdue repot becomes root rot. Root rot becomes pests. Pests don't stay on one plant.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#3e8840', lineHeight: '1.8', fontWeight: '600' }}>
              And that sentimental plant you've had for 20 years? It's tougher than you think — but it's not invincible.
            </p>
          </div>
        </div>
      </section>

      {/* 10. LIGHT HUMOR SECTION */}
      <section className="section">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(62, 136, 64, 0.08) 0%, rgba(0, 145, 194, 0.08) 100%)',
          padding: '3rem',
          borderRadius: '20px',
          border: '2px solid #c3da51'
        }}>
          <h2 style={{ fontSize: '2.25rem', textAlign: 'center', marginBottom: '2rem' }}>
            Signs your plant has been waiting too long:
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '1.5rem'
          }}>
            {[
              { emoji: '🚨', text: 'Roots escaping from the bottom of the pot' },
              { emoji: '😬', text: 'Soil that repels water instead of absorbing it' },
              { emoji: '🐛', text: 'Tiny uninvited guests you'd rather not think about' },
              { emoji: '😶', text: 'You\'ve been "meaning to deal with it" since last spring' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <span style={{ fontSize: '2.5rem' }}>{item.emoji}</span>
                <p style={{ fontSize: '1.15rem', color: '#323527', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            marginTop: '2.5rem',
            color: '#64748b',
            fontStyle: 'italic'
          }}>
            No judgment. Just don't wait too long.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0091c2 0%, #3e8840 100%)',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '3.25rem', marginBottom: '2rem' }}>
            Your plants are waiting.
          </h2>
          <a href="sms:9196072066">
            <button style={{
              background: 'white',
              color: '#3e8840',
              border: 'none',
              borderRadius: '16px',
              padding: '24px 60px',
              fontSize: '22px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
            }}
            >
              <MessageCircle size={28} />
              Text Us Your Plants
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
