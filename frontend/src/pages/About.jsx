import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Users, Award, Download, FileText } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(0, 162, 232, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>About Plant Spa Co.</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
          Transforming spaces through expert plant care and botanical luxury
        </p>
      </section>

      {/* Video Section */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>What We Do</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
            Watch our story and see how we bring botanical luxury to life
          </p>
        </div>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <video 
            controls 
            style={{ width: '100%', height: 'auto', display: 'block' }}
            poster="https://images.unsplash.com/photo-1717001393306-4a430ebdd615"
          >
            <source src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/47lk4how_Tv-Ad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ 
          textAlign: 'center', 
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          maxWidth: '900px',
          margin: '2rem auto 0'
        }}>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.7' }}>
            At Plant Spa Co., we believe every plant deserves expert care and every space deserves to be elevated 
            with the beauty of nature. Our mission is to bring botanical luxury to homes and businesses, creating 
            living environments that inspire, rejuvenate, and flourish.
          </p>
        </div>
      </section>

      {/* Our Story Section - Founder & Team */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Meet Our Team</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
            Passionate plant experts dedicated to helping your plants thrive
          </p>
        </div>

        {/* Founder Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div style={{
            height: '450px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            border: '4px solid #d4a65e'
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/qjr4pt4d_IMG_3370.HEIC" 
              alt="Business Owner"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: '#3e8840' }}>Business Owner & Founder</h3>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#0091c2', 
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Bringing Care & Expertise to Your Home
            </p>
            <p style={{ color: '#323527', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Plant Spa Co. was born from a deep love of plants and a passion for helping people create beautiful, thriving spaces. Whether you're a busy parent, a plant enthusiast, or someone who just wants healthier greenery at home, I'm here to make plant care easy and enjoyable.
            </p>
            <p style={{ color: '#323527', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our approach is personal, professional, and centered around <strong>you and your plants</strong>. We believe everyone deserves a home filled with healthy, happy plants — and we're here to make that happen.
            </p>
          </div>
        </div>

        {/* Master Gardener Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{ order: 2 }}>
            <div style={{
              height: '450px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              border: '4px solid #3e8840'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/klqm94fp_IMG_3807.HEIC" 
                alt="Master Gardener"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div style={{ order: 1 }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: '#0091c2' }}>Our Master Gardener</h3>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#3e8840', 
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Expert Knowledge You Can Trust
            </p>
            <p style={{ color: '#323527', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              We're proud to have a <strong>Master Gardener</strong> on our team (my mother!), bringing decades of horticultural expertise, education, and deep plant knowledge to every service we provide.
            </p>
            <p style={{ color: '#323527', fontSize: '1.1rem', lineHeight: '1.8' }}>
              With years of experience and certification, our Master Gardener ensures your plants receive <strong>professional, science-backed care</strong> — from diagnosing issues to optimizing growth. When you work with Plant Spa Co., you're getting true expertise rooted in a lifetime of plant passion.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            div[style*="order: 1"], div[style*="order: 2"] {
              order: 1 !important;
            }
          }
        `}</style>
      </section>

      {/* Our Values */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Values</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            The principles that guide everything we do
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem'
        }}>
          {[
            {
              icon: <Leaf size={48} color="#00A2E8" />,
              title: 'Expert Care',
              description: 'Every plant receives professional attention from our experienced horticulturists'
            },
            {
              icon: <Heart size={48} color="#38753E" />,
              title: 'Passion for Plants',
              description: 'We genuinely love what we do, and it shows in the health and beauty of your plants'
            },
            {
              icon: <Users size={48} color="#B37E3B" />,
              title: 'Community Focus',
              description: 'Building a community of plant lovers through workshops, events, and shared knowledge'
            },
            {
              icon: <Award size={48} color="#00A2E8" />,
              title: 'Quality Excellence',
              description: 'Using premium materials and proven techniques to ensure the best results'
            }
          ].map((value, idx) => (
            <div key={idx} className="card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {value.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{value.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Work</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            A glimpse of the botanical transformations we've created
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
            'https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/131m6xtd_IMG_3341.HEIC'
          ].map((img, idx) => (
            <div key={idx} style={{
              height: '350px',
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

      {/* Brochure Section */}
      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, #00A2E8 0%, #38753E 100%)',
          borderRadius: '12px',
          padding: '3rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <FileText size={64} color="white" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Download Our Brochure</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
            Learn more about our services, pricing, and what makes Plant Spa Co. the premier choice for botanical care
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/gqv4e38q_PlantSpaBrochure_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="btn-outline" style={{
                backgroundColor: 'white',
                color: '#00A2E8',
                border: '2px solid white',
                fontSize: '18px',
                padding: '14px 32px'
              }}>
                <Download size={20} />
                Download PDF
              </button>
            </a>
            <a 
              href="https://customer-assets.emergentagent.com/job_16f5c677-73fd-4396-b13e-a22decbdcada/artifacts/gqv4e38q_PlantSpaBrochure_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-outline" style={{
                color: 'white',
                border: '2px solid white',
                fontSize: '18px',
                padding: '14px 32px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#00A2E8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
              >
                <FileText size={20} />
                View Online
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Ready to Experience Plant Spa Co.?</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.7' }}>
            Whether you need plant care services, want to attend a workshop, or are interested in transforming 
            your space with interior plant design, we're here to help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn-primary" style={{ fontSize: '18px', padding: '14px 32px' }}>
                Get In Touch
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary" style={{ fontSize: '18px', padding: '12px 30px' }}>
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
