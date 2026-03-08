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

      {/* Meet Our Team Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>Meet Our Team</h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '1.2rem', color: '#323527', maxWidth: '700px', margin: '0 auto' }}>
            Passionate plant experts dedicated to helping your plants thrive
          </p>
        </div>

        {/* Founder Section - Maureen Headland */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div style={{
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            border: '4px solid #d4a65e'
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/9rwi6ix8_Headland_family.JPG" 
              alt="Maureen Headland - Founder"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: '#3e8840' }}>Maureen Headland</h3>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#0091c2', 
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Founder
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              I'm a North Carolina native — OBX born, Morrisville rooted. For 15 years I directed data strategy for global health programs eliminating disease in West Africa. When USAID ended in 2025, I took everything I know about building expert teams and solving hard problems — and brought it home.
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              The idea for Plant Spa Co. hit me staring at my own root-bound survivor plant after a big move and downsize. Then came the moment I begged my husband to haul our giant ponytail palm inside for winter — to which he looked at me and asked how much we really liked her. She's fine. She's thriving. He came around.
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              But that moment stuck with me. People hire landscapers for their yards without thinking twice, while their indoor plants — some of them irreplaceable, all of them living things — are left to figure it out alone. And let's be honest: repotting a mature plant is not a quick clean job. It's heavy, it's dirty, and half the internet will tell you something different about how to do it.
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              Plant Spa Co. exists to fix that. I've spent my career putting the right experts in the right places to make hard things happen. Now I'm doing it for your living room.
            </p>
            <p style={{ color: '#3e8840', fontSize: '1.15rem', fontWeight: '600', fontStyle: 'italic' }}>
              Your plants are in good hands. Literally.
            </p>
          </div>
        </div>

        {/* Master Gardener Section - Francene Kelly */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{ order: 2 }}>
            <div style={{
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              border: '4px solid #3e8840'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_cbf2ef19-9556-45ea-9903-44193107f7e5/artifacts/udj7ifzr_Mom_hawaii.jpg" 
                alt="Francene Kelly - Master Gardener"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div style={{ order: 1 }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: '#0091c2' }}>Francene Kelly</h3>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#3e8840', 
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Our Resident Master Gardener
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              A North Carolina fixture for more than 50 years, she spent her career shaping young minds as a public school teacher before retiring to do what she'd always loved: grow things. Indoor, outdoor, it doesn't matter — if it's a plant, she's probably already grown it, saved it, or figured out exactly why it was struggling.
            </p>
            <p style={{ color: '#323527', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              With 11 years as a certified Master Gardener, she brings the kind of knowledge you can't Google your way to. She didn't exactly volunteer for this role — but once she saw the plants that needed her, resistance was futile.
            </p>
            <p style={{ color: '#3e8840', fontSize: '1.15rem', fontWeight: '600', fontStyle: 'italic' }}>
              We're lucky she's ours.
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

      {/* Brochure Section */}
      <section className="section section-alt">
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
      <section className="section">
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
