import React, { useState } from 'react';
import { Leaf, Filter } from 'lucide-react';
import { products } from '../mockData';
import { toast } from 'sonner';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 255, 255, 1) 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Plant Shop</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
          Curated selection of healthy, beautiful plants for your home and office
        </p>
      </section>

      {/* Filter Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Filter size={20} color="#64748b" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                border: selectedCategory === category ? '2px solid #ff5757' : '2px solid #e2e8f0',
                backgroundColor: selectedCategory === category ? '#ff5757' : 'white',
                color: selectedCategory === category ? 'white' : '#64748b',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.borderColor = '#ff5757';
                  e.target.style.color = '#ff5757';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.color = '#64748b';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#ff5757',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {product.category}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{product.name}</h3>
                  <span style={{ 
                    color: '#ff5757', 
                    fontWeight: '700', 
                    fontSize: '1.25rem',
                    whiteSpace: 'nowrap',
                    marginLeft: '0.5rem'
                  }}>
                    {product.price}
                  </span>
                </div>
                <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '14px' }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <Leaf size={16} color="#22c55e" />
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{product.care}</span>
                </div>
                <button 
                  onClick={() => toast.info('Contact us to purchase this plant!')}
                  className="btn-primary" 
                  style={{ width: '100%' }}
                >
                  Inquire About This Plant
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Ready to Purchase?</h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.7' }}>
            All our plants are carefully selected and come with care instructions. Contact us to check availability,
            arrange pickup, or schedule delivery. We're happy to help you find the perfect plant for your space!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="btn-primary" 
              style={{ fontSize: '18px', padding: '14px 32px' }}
            >
              Contact Us
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="btn-secondary" 
              style={{ fontSize: '18px', padding: '12px 30px' }}
            >
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;