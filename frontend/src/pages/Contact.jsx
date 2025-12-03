import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      service: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Get In Touch</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
          Let's discuss how we can help your plants thrive
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem'
        }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Your Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="input-field"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">Select a service</option>
                  <option value="repotting">Plant Repotting</option>
                  <option value="design">Interior Plant Design</option>
                  <option value="consultation">Plant Health Consultation</option>
                  <option value="party">Plant Party/Workshop</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Your Concerns or Questions *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea-field"
                  placeholder="Tell us about your plants and what you need help with..."
                />
              </div>

              <button type="submit" className="btn-primary" style={{ fontSize: '18px', padding: '14px' }}>
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Phone size={24} color="#ff5757" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Phone</h4>
                    <a href="tel:+1234567890" style={{ 
                      color: '#64748b', 
                      textDecoration: 'none',
                      fontSize: '16px'
                    }}>
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Mail size={24} color="#ff5757" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                    <a href="mailto:hello@plantspaco.com" style={{ 
                      color: '#64748b', 
                      textDecoration: 'none',
                      fontSize: '16px'
                    }}>
                      hello@plantspaco.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <MapPin size={24} color="#ff5757" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Location</h4>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>
                      123 Green Street<br />
                      Plant City, PC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Clock size={24} color="#ff5757" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Hours</h4>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }} className="card">
              <h4 style={{ marginBottom: '1rem' }}>Prefer to Text or Chat?</h4>
              <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: '1.6' }}>
                We offer free consultations via text, DM, or phone call. Reach out through your preferred method!
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button className="btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                  Text Us
                </button>
                <button className="btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                  Instagram DM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-alt">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Find Us</h2>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#e2e8f0',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b'
        }}>
          <div style={{ textAlign: 'center' }}>
            <MapPin size={48} color="#ff5757" style={{ marginBottom: '1rem' }} />
            <p style={{ fontSize: '18px' }}>Map integration placeholder</p>
            <p style={{ fontSize: '14px' }}>123 Green Street, Plant City, PC 12345</p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;