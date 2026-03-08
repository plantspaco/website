import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Gift, Calendar, Users, ArrowRight, MessageCircle } from 'lucide-react';

const GrowClub = () => {
  const memberBenefits = [
    '15% off Spa Days (½ Day, Full Day, and Signature)',
    '10% off follow-ups & ongoing care',
    '10% off merchandise (pots, accessories & more)',
    'Priority scheduling',
    '$50 credit for referrals',
    '$25 birthday credit'
  ];

  const yearBonusOptions = [
    {
      title: 'Option A',
      items: [
        '1 Full Day Spa',
        '2 in-home follow-ups',
        '$125 to spend on merchandise'
      ]
    },
    {
      title: 'Option B',
      items: [
        '2 Half Day Spas (Spring & Fall)',
        '2 in-home follow-ups'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.15) 0%, rgba(62, 136, 64, 0.1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#c3da51',
          color: '#323527',
          padding: '10px 20px',
          borderRadius: '30px',
          fontSize: '14px',
          fontWeight: '700',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 12px rgba(195, 218, 81, 0.4)'
        }}>
          <Star size={18} fill="#323527" />
          Founding Member Spots Available
        </div>
        <h1 style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>Grow Club Membership</h1>
        <p style={{ fontSize: '1.5rem', color: '#3e8840', fontWeight: '600', marginBottom: '1rem' }}>
          $100 / month
        </p>
        <p style={{ fontSize: '1.15rem', color: '#323527', fontWeight: '500', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          Spend your credit anytime — but if you let it build, that's <strong style={{ color: '#0091c2' }}>$1,200/year</strong> toward Spa Days, follow-ups, and merchandise.
        </p>
        <div className="gold-divider" style={{ margin: '2rem auto' }} />
      </section>

      {/* Main Content */}
      <section className="section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Founding Member Benefits */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '3px solid #c3da51'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '2rem'
            }}>
              <Gift size={32} color="#3e8840" />
              <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Founding Grow Club Members Save:</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {memberBenefits.map((benefit, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <CheckCircle size={22} color="#3e8840" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#323527',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 1 Year Bonus */}
          <div style={{
            background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
            borderRadius: '20px',
            padding: '3rem',
            color: 'white',
            boxShadow: '0 8px 32px rgba(62, 136, 64, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '2rem'
            }}>
              <Star size={32} color="#c3da51" fill="#c3da51" />
              <h2 style={{ fontSize: '1.75rem', margin: 0, color: 'white' }}>After 1 Year in Grow Club:</h2>
            </div>
            
            <p style={{ fontSize: '1.1rem', opacity: 0.95, marginBottom: '2rem' }}>
              Choose your anniversary reward:
            </p>

            {yearBonusOptions.map((option, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: idx === 0 ? '1.5rem' : 0
              }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  color: '#c3da51', 
                  marginBottom: '1rem',
                  fontWeight: '700'
                }}>
                  {option.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {option.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle size={18} color="#c3da51" />
                      <span style={{ fontSize: '1.05rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p style={{
              fontSize: '1rem',
              marginTop: '1.5rem',
              textAlign: 'center',
              opacity: 0.9,
              fontStyle: 'italic'
            }}>
              Pick the option that works best for your plant care needs!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Grow Club Works</h2>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            {
              icon: <Calendar size={36} color="white" />,
              title: 'Join Today',
              description: 'Sign up for $100/month — every dollar becomes credit toward any Plant Spa Co. service or product.'
            },
            {
              icon: <Gift size={36} color="white" />,
              title: 'Save on Everything',
              description: 'Enjoy exclusive discounts on Spa Days, follow-ups, merchandise, plus priority scheduling.'
            },
            {
              icon: <Star size={36} color="white" />,
              title: 'Earn Rewards',
              description: 'Get birthday credits, referral bonuses, and an amazing 1-year anniversary reward.'
            }
          ].map((step, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '2.5rem',
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 20px rgba(62, 136, 64, 0.3)'
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ fontSize: '1.05rem', color: '#323527', lineHeight: '1.7' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0091c2 0%, #3e8840 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2.75rem', marginBottom: '1.5rem' }}>
            Ready to Join the Club?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'white', 
            opacity: 0.95, 
            marginBottom: '2.5rem',
            lineHeight: '1.7'
          }}>
            Founding member spots are limited. Lock in your benefits and start saving today!
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="sms:9196072066">
              <button style={{
                background: 'white',
                color: '#3e8840',
                border: 'none',
                borderRadius: '12px',
                padding: '18px 40px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={22} />
                Text to Join
              </button>
            </a>
            <Link to="/contact">
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '12px',
                padding: '16px 38px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#3e8840';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
              >
                Learn More
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowClub;
