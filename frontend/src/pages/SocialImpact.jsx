import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Briefcase, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react';

const SocialImpact = () => {
  const impactAreas = [
    {
      icon: <Briefcase size={28} color="#3e8840" />,
      title: 'Career Mentorship & Guidance',
      description: 'One-on-one support to help young adults explore career paths and set professional goals.'
    },
    {
      icon: <Lightbulb size={28} color="#0091c2" />,
      title: 'Life Skills Development',
      description: 'Practical skills training for independent living, from budgeting to time management.'
    },
    {
      icon: <Users size={28} color="#d4a65e" />,
      title: 'Employment Exposure & Training',
      description: 'Hands-on experience and job training opportunities to build real-world skills.'
    },
    {
      icon: <GraduationCap size={28} color="#3e8840" />,
      title: 'Entrepreneurship Opportunities',
      description: 'Support and resources for those interested in starting their own business ventures.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(62, 136, 64, 0.1) 0%, rgba(0, 145, 194, 0.1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>Growing More Than Plants</h1>
        <p style={{ fontSize: '1.4rem', color: '#3e8840', fontWeight: '600', marginBottom: '0.5rem' }}>
          Our Commitment to Community
        </p>
        <div className="gold-divider" style={{ margin: '2rem auto' }} />
        <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
          When you choose Plant Spa Co., you're supporting both beautiful spaces and meaningful futures.
        </p>
      </section>

      {/* Main Content */}
      <section className="section">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <Heart size={40} color="#3e8840" fill="#c3da51" />
              <h2 style={{ fontSize: '2rem', margin: 0 }}>Supporting Young Adults Aging Out of Foster Care</h2>
            </div>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#323527',
              lineHeight: '1.9',
              marginBottom: '1.5rem'
            }}>
              A portion of our work supports <strong>young adults aging out of foster care</strong> as they navigate one of life's most challenging transitions. Every year, thousands of young people "age out" of the foster care system with little support or guidance as they enter adulthood.
            </p>
            
            <p style={{
              fontSize: '1.15rem',
              color: '#323527',
              lineHeight: '1.8'
            }}>
              Through partnerships with local organizations, we're committed to providing meaningful support that can make a real difference in their lives. We believe everyone deserves a strong foundation to grow — whether it's a plant or a person.
            </p>
          </div>

          {/* Impact Areas */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>How We Help</h2>
            <div className="gold-divider" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {impactAreas.map((area, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #f0ede8',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.2) 0%, rgba(212, 166, 94, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {area.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#323527' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7' }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section section-alt">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(62, 136, 64, 0.08) 0%, rgba(0, 145, 194, 0.08) 100%)',
            borderRadius: '20px',
            padding: '3.5rem',
            border: '2px solid #c3da51'
          }}>
            <p style={{
              fontSize: '1.5rem',
              color: '#323527',
              lineHeight: '1.8',
              fontStyle: 'italic',
              fontWeight: '500'
            }}>
              "We believe healthy plants and healthy communities grow together."
            </p>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #3e8840, #0091c2)',
              margin: '2rem auto'
            }} />
            <p style={{
              fontSize: '1.15rem',
              color: '#3e8840',
              fontWeight: '600'
            }}>
              — The Plant Spa Co. Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Support Our Mission
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'white', 
            opacity: 0.95, 
            marginBottom: '2.5rem',
            lineHeight: '1.7'
          }}>
            When you book a service with Plant Spa Co., you're not just caring for your plants — you're helping us support young adults building their futures.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services">
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
                View Our Services
                <ArrowRight size={20} />
              </button>
            </Link>
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
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialImpact;
