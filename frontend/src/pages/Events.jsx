import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import { events } from '../mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { toast } from 'sonner';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isHostingOpen, setIsHostingOpen] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success('Booking request submitted! We\'ll contact you soon.');
    setIsBookingOpen(false);
  };

  const handleHosting = (e) => {
    e.preventDefault();
    toast.success('Party hosting request submitted! We\'ll be in touch shortly.');
    setIsHostingOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Plant Parties & Workshops</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Join our botanical community for hands-on workshops and creative plant experiences
        </p>
        <button 
          onClick={() => setIsHostingOpen(true)}
          className="btn-primary" 
          style={{ fontSize: '18px', padding: '14px 32px' }}
        >
          <Users size={20} />
          Host Your Own Party
        </button>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Upcoming Events</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Reserve your spot in our next workshop
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {events.map((event) => (
            <div key={event.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src={event.image} 
                alt={event.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{event.title}</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Calendar size={18} color="#ff5757" />
                    <span style={{ color: '#64748b', fontSize: '14px' }}>{event.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Clock size={18} color="#ff5757" />
                    <span style={{ color: '#64748b', fontSize: '14px' }}>{event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <MapPin size={18} color="#ff5757" />
                    <span style={{ color: '#64748b', fontSize: '14px' }}>{event.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={18} color="#ff5757" />
                    <span style={{ color: '#64748b', fontSize: '14px' }}>{event.capacity}</span>
                  </div>
                </div>
                <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {event.description}
                </p>
                <p style={{ 
                  color: '#ff5757', 
                  fontWeight: '700', 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem' 
                }}>
                  {event.price}
                </p>
                <button 
                  onClick={() => {
                    setSelectedEvent(event);
                    setIsBookingOpen(true);
                  }}
                  className="btn-primary" 
                  style={{ width: '100%' }}
                >
                  Book Your Spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>What's Included</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Everything you need for a memorable botanical experience
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {[
            'All materials and supplies',
            'Expert instruction',
            'Take-home creations',
            'Light refreshments',
            'Care guides and tips',
            'Community atmosphere'
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem'
            }}>
              <CheckCircle size={24} color="#22c55e" />
              <span style={{ fontSize: '16px', color: '#64748b' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book {selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to reserve your spot
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" required className="input-field" />
            <input type="email" placeholder="Email Address" required className="input-field" />
            <input type="tel" placeholder="Phone Number" required className="input-field" />
            <input type="number" placeholder="Number of Guests" min="1" required className="input-field" />
            <textarea placeholder="Special requests or questions" className="textarea-field" />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Submit Booking Request
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Host Party Dialog */}
      <Dialog open={isHostingOpen} onOpenChange={setIsHostingOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Host Your Own Plant Party</DialogTitle>
            <DialogDescription>
              Let us bring the botanical experience to your space
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleHosting} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" required className="input-field" />
            <input type="email" placeholder="Email Address" required className="input-field" />
            <input type="tel" placeholder="Phone Number" required className="input-field" />
            <input type="text" placeholder="Event Location" required className="input-field" />
            <input type="number" placeholder="Expected Number of Guests" min="5" required className="input-field" />
            <input type="date" placeholder="Preferred Date" required className="input-field" />
            <textarea placeholder="Tell us about your event ideas" className="textarea-field" required />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Submit Party Request
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;