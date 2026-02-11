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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeelewvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Thanks! We'll contact you shortly.");
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 800);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(34,197,94,.08) 0%, rgba(255,255,255,1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '.5rem' }}>Book Your Plant Spa or Consultation</h1>

        <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '720px', margin: '0 auto' }}>
          Premium in-home & commercial plant care, repotting & rehab in Charlotte, NC
        </p>

        <p style={{ marginTop: '1rem', color: '#16a34a', fontWeight: 600 }}>
          Trusted by homeowners, restaurants & businesses for expert plant care
        </p>

        <div style={{ marginTop: '1.75rem' }}>
          <a href="/book" className="btn-primary" style={{ fontSize: '18px', padding: '14px 28px' }}>
            Book Free Consultation
