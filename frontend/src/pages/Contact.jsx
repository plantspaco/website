import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Upload, Leaf, CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    helpType: '',
    message: ''
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, photoFile);
    toast.success('Thank you! We\'ll get back to you within a few hours.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      helpType: '',
      message: ''
    });
    removePhoto();
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(62, 136, 64, 0.1) 0%, rgba(195, 218, 81, 0.1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>Get Your Free Plant Diagnosis</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
          Send us a photo and we'll tell you exactly what your plant needs
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '4rem'
        }}>
          {/* Contact Form */}
          <div>
            {/* Intro Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(195, 218, 81, 0.15) 0%, rgba(62, 136, 64, 0.1) 100%)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid #c3da51'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Leaf size={28} color="#3e8840" />
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: '#323527' }}>
                  Not sure what's wrong with your plant?
                </h3>
              </div>
              <p style={{ fontSize: '1.1rem', color: '#323527', marginBottom: '1rem', lineHeight: '1.7' }}>
                Send us a photo and we'll tell you:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'what\'s wrong',
                  'what it needs',
                  'if it needs a plant spa day'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} color="#3e8840" />
                    <span style={{ fontSize: '1.05rem', color: '#323527' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: '#0091c2', 
                marginTop: '1rem',
                fontWeight: '600'
              }}>
                We usually respond within a few hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                  data-testid="contact-name-input"
                />
              </div>

              {/* Phone - Required */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
                  <span style={{ fontWeight: '400', color: '#64748b', marginLeft: '0.5rem', fontSize: '14px' }}>
                    (so we can text you back)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="(919) 555-1234"
                  data-testid="contact-phone-input"
                />
              </div>

              {/* Email - Optional */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Email
                  <span style={{ fontWeight: '400', color: '#64748b', marginLeft: '0.5rem', fontSize: '14px' }}>
                    (optional)
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@email.com"
                  data-testid="contact-email-input"
                />
              </div>

              {/* Type of Help - Dropdown */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Type of Help Needed
                </label>
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  required
                  className="input-field"
                  style={{ cursor: 'pointer' }}
                  data-testid="contact-help-type-select"
                >
                  <option value="">Select an option</option>
                  <option value="plant-rescue">Plant Rescue</option>
                  <option value="repotting">Repotting / Spa Day</option>
                  <option value="diagnosis">Plant Diagnosis</option>
                  <option value="event">Event / Plant & Pour</option>
                  <option value="grow-club">Grow Club</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Tell Us About Your Plant
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea-field"
                  placeholder="What's going on with your plant? Any symptoms, how long you've had it, where it lives..."
                  style={{ minHeight: '120px' }}
                  data-testid="contact-message-textarea"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Upload Plant Photo
                  <span style={{ fontWeight: '400', color: '#64748b', marginLeft: '0.5rem', fontSize: '14px' }}>
                    (optional but helpful!)
                  </span>
                </label>
                
                {!photoPreview ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      border: '2px dashed #d1d5db',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: '#fafafa'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#3e8840';
                      e.currentTarget.style.background = 'rgba(62, 136, 64, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.background = '#fafafa';
                    }}
                  >
                    <Upload size={32} color="#64748b" style={{ marginBottom: '0.75rem' }} />
                    <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>
                      Click to upload a photo of your plant
                    </p>
                    <p style={{ color: '#94a3b8', margin: '0.5rem 0 0', fontSize: '13px' }}>
                      JPG, PNG, or HEIC
                    </p>
                  </div>
                ) : (
                  <div style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #3e8840'
                  }}>
                    <img 
                      src={photoPreview} 
                      alt="Plant preview"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0,0,0,0.6)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <X size={18} color="white" />
                    </button>
                    <p style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      background: 'rgba(62, 136, 64, 0.9)',
                      color: 'white',
                      padding: '8px',
                      margin: 0,
                      fontSize: '14px',
                      textAlign: 'center'
                    }}>
                      {photoFile?.name}
                    </p>
                  </div>
                )}
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                  data-testid="contact-photo-input"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ 
                  fontSize: '19px', 
                  padding: '18px',
                  marginTop: '0.5rem'
                }}
                data-testid="contact-submit-button"
              >
                <Leaf size={22} />
                Get Your Plant Diagnosis
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Other Ways to Reach Us</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Phone size={24} color="#3e8840" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Text or Call</h4>
                    <a href="tel:9196072066" style={{ 
                      color: '#0091c2', 
                      textDecoration: 'none',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      (919) 607-2066
                    </a>
                    <p style={{ color: '#64748b', margin: '0.5rem 0 0', fontSize: '14px' }}>
                      Text us your plant photos anytime!
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Mail size={24} color="#3e8840" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                    <a href="mailto:hello@plantspaco.com" style={{ 
                      color: '#0091c2', 
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                      hello@plantspaco.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <MapPin size={24} color="#3e8840" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Service Area</h4>
                    <p style={{ color: '#323527', margin: 0, fontSize: '16px', fontWeight: '600' }}>
                      Morrisville, NC
                    </p>
                    <p style={{ color: '#64748b', margin: '0.25rem 0 0', fontSize: '14px' }}>
                      Serving the Triangle & surrounding areas within 50 miles
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Clock size={24} color="#3e8840" />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Response Time</h4>
                    <p style={{ color: '#323527', margin: 0, fontSize: '16px' }}>
                      We typically respond within a few hours during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text CTA */}
            <div style={{ 
              marginTop: '2rem',
              background: 'linear-gradient(135deg, #3e8840 0%, #0091c2 100%)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.35rem' }}>
                Prefer to Text?
              </h3>
              <p style={{ color: 'white', opacity: 0.95, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Snap a photo of your plant and text it directly to us. We'll respond with a diagnosis!
              </p>
              <a href="sms:9196072066">
                <button style={{
                  background: 'white',
                  color: '#3e8840',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px 32px',
                  fontSize: '17px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <Phone size={20} />
                  Text Us Now
                </button>
              </a>
            </div>
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
