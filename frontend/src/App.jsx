import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync theme to root HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll Reveal Animation Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const observerOptions = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% is visible
      rootMargin: '0px 0px -50px 0px' // offset bottom
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Intro (no scroll reveal so it is immediately visible) */}
      <Hero />

      {/* Main Sections wrapped in Scroll Reveal styling */}
      <div className="reveal-section reveal">
        <About />
      </div>

      <div className="reveal-section reveal">
        <Education />
      </div>

      <div className="reveal-section reveal">
        <Skills />
      </div>

      <div className="reveal-section reveal">
        <Projects />
      </div>

      <div className="reveal-section reveal">
        <Certifications />
      </div>

      <div className="reveal-section reveal">
        <Achievements />
      </div>

      <div className="reveal-section reveal">
        <Resume />
      </div>

      <div className="reveal-section reveal">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
