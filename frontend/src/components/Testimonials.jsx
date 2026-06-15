import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Director of Product at TechNova',
      text: 'Gaurav is a rare breed of developer who understands both back-end optimization and detailed user experience. The Next.js migration was completed ahead of schedule, drastically improving our SEO rankings.',
      rating: 5,
      initials: 'SJ'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Founder at ByteSpeed Startup',
      text: 'Our app load speeds dropped from 4.2 seconds to 1.1 seconds after Gaurav refactored our component trees and database queries. A highly professional engineer who delivers clean, production-ready code.',
      rating: 5,
      initials: 'DC'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Principal UX Designer at AppGrid',
      text: 'Working with Gaurav is a dream for any designer. They respect layout grids, execute perfect animations, and proactively suggest micro-interactions that make the product feel extremely premium.',
      rating: 5,
      initials: 'ER'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials">
      <div className="orb orb-1 animate-pulse-glow" style={{ opacity: 0.3 }} />
      
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'hsl(var(--color-primary-hsl))',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px'
          }}>
            Client & Peer Reviews
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Testimonials</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Carousel Container */}
        <div 
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10
          }}
        >
          {/* Quote Graphic Mark */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            color: 'hsla(var(--color-primary-hsl), 0.15)'
          }}>
            <Quote size={50} style={{ transform: 'rotate(180deg)' }} />
          </div>

          {/* Testimonial Active Slide */}
          <div 
            className="glass"
            style={{
              padding: '40px 30px',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)',
              transition: 'all 0.5s ease'
            }}
          >
            {/* Rating Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="hsl(var(--color-secondary-hsl))" color="hsl(var(--color-secondary-hsl))" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'var(--text-main)',
                marginBottom: '30px'
              }}
            >
              "{testimonials[activeIndex].text}"
            </p>

            {/* Client Metadata */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px'
              }}
            >
              {/* Initials Avatar */}
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 10px hsla(var(--color-primary-hsl), 0.3)'
                }}
              >
                {testimonials[activeIndex].initials}
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {testimonials[activeIndex].name}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '30px'
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))';
                e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    width: activeIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeIndex === idx ? 'hsl(var(--color-primary-hsl))' : 'var(--border-color)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))';
                e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
