import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, Calendar, MapPin, Star, Leaf, Heart, Camera, Send, Sparkles, Play } from 'lucide-react';

const Home = () => {
  // Before/After gallery data
  const beforeAfterGallery = [
    {
      before: 'https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/cg236ckz_before_peacelily%20%282%29.jpg',
      after: 'https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/rwbt80b0_After_peacelily%20%282%29.png',
      title: 'Peace Lily Revival',
      description: 'From struggling to stunning'
    },
    {
      before: 'https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/z683pgx4_Kim_b4_snake_outside.jpg.jpg',
      after: 'https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/bdyhhrv1_Snake_After_Kim.pdf.png',
      title: 'Snake Plant Transformation',
      description: 'Repotted and thriving'
    }
  ];

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
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3rem 2rem'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            maxWidth: '800px',
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
          }}>
            Professional Houseplant Service for Homes & Small Businesses
          </h1>
          <p style={{
            fontSize: '1.6rem',
            marginBottom: '3rem',
            maxWidth: '700px',
            lineHeight: '1.6',
            fontWeight: '400',
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
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
            <Link to="/grow-club">
              <button className="btn-primary" style={{ width: '100%', fontSize: '17px' }}>
                Join Grow Club
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Card 3 - Business Care - WITH IMAGE */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/8xx5qyi8_scott-webb-5TBmyEGFS24-unsplash.jpg"
                alt="Small Business Plant Care"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
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

      {/* 5. HOW IT WORKS SECTION - WITH ICONS */}
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
              icon: <Camera size={32} color="white" />,
              title: 'Share Your Plants & Vision',
              description: 'Send us a few photos and tell us what you\'re looking for — new planters, better light, a fresh style.'
            },
            {
              step: '2',
              icon: <Send size={32} color="white" />,
              title: 'We Build Your Plan',
              description: 'We recommend the right package and arrive with everything your collection needs. No trips to the store, no guesswork.',
              extra: 'We bring the basics. Need new planters or plants? We can source those too.'
            },
            {
              step: '3',
              icon: <Sparkles size={32} color="white" />,
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
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 20px rgba(62, 136, 64, 0.3)'
              }}>
                {item.icon}
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

      {/* 7. VIDEO TESTIMONIAL SECTION */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            Hear From Our Clients
          </h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            Real stories from real plant parents
          </p>
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          position: 'relative'
        }}>
          <video 
            controls 
            style={{ width: '100%', height: 'auto', display: 'block' }}
            poster="https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/rwbt80b0_After_peacelily%20%282%29.png"
          >
            <source src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/yrx0wvu7_Kim_short_testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.1) 0%, rgba(212, 166, 94, 0.1) 100%)',
          borderRadius: '12px',
          maxWidth: '900px',
          margin: '2rem auto 0',
          border: '2px solid #c3da51'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#323527', lineHeight: '1.7', fontStyle: 'italic' }}>
            "Maureen took my plants from sad to fab. 10 out of 10!" — <strong>Kim, Hillsborough, NC</strong>
          </p>
        </div>
      </section>

      {/* 8. BEFORE/AFTER GALLERY - Horizontal Scroll */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            Before & After Transformations
          </h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            See the magic of a Plant Spa Day
          </p>
        </div>

        <div style={{
          overflowX: 'auto',
          paddingBottom: '1rem',
          WebkitOverflowScrolling: 'touch'
        }}>
          <div style={{
            display: 'flex',
            gap: '2rem',
            minWidth: 'min-content',
            padding: '0 2rem'
          }}>
            {beforeAfterGallery.map((item, idx) => (
              <div key={idx} style={{
                minWidth: '500px',
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '2px solid #f0ede8'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0'
                }}>
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={item.before}
                      alt={`${item.title} - Before`}
                      style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      BEFORE
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={item.after}
                      alt={`${item.title} - After`}
                      style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#3e8840',
                      color: 'white',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      AFTER
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#323527' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '1rem', fontSize: '0.95rem' }}>
          Scroll to see more transformations
        </p>
      </section>

      {/* 9. SERVICE AREA MAP */}
      <section className="section">
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

      {/* 10. SUCCESS SECTION - Testimonials */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            This is what your plants — and your space — can look like.
          </h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            Real homes. Real transformations. Real relief.
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

      {/* 11. FRIENDLY CALLOUT BOX (Replaces Failure Section) */}
      <section className="section">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.15) 0%, rgba(62, 136, 64, 0.1) 100%)',
          borderRadius: '20px',
          padding: '3rem',
          border: '3px solid #c3da51',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <Leaf size={36} color="#3e8840" />
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#323527' }}>
              Your Plants Deserve Some TLC
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#323527',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Whether they're overdue for a repot, looking a little sad, or you just want them to thrive — we're here to help. No guilt, no lectures, just expert care that makes a difference.
          </p>

          <p style={{
            fontSize: '1.1rem',
            color: '#3e8840',
            fontWeight: '600',
            fontStyle: 'italic'
          }}>
            Every plant has potential. Let us help yours shine!
          </p>
        </div>
      </section>

      {/* 12. LIGHT HUMOR SECTION */}
      <section className="section section-alt">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          border: '2px solid #f0ede8',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ fontSize: '2.25rem', textAlign: 'center', marginBottom: '2rem' }}>
            Signs it might be time for a Plant Spa Day:
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '1.25rem'
          }}>
            {[
              { icon: <CheckCircle size={24} color="#3e8840" />, text: 'Roots peeking out from the bottom of the pot' },
              { icon: <CheckCircle size={24} color="#3e8840" />, text: 'Soil that just won\'t absorb water anymore' },
              { icon: <CheckCircle size={24} color="#3e8840" />, text: 'Plants that have been on your "to-do" list for months' },
              { icon: <CheckCircle size={24} color="#3e8840" />, text: 'You want your space to look and feel amazing' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.25rem',
                background: '#fafafa',
                borderRadius: '12px'
              }}>
                {item.icon}
                <p style={{ fontSize: '1.1rem', color: '#323527', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginTop: '2rem',
            color: '#3e8840',
            fontWeight: '600'
          }}>
            Sound familiar? Let's fix that together!
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
