// src/components/Home.js
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load particles.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = initializeParticles;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  const initializeParticles = () => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#3b82f6" },  // blue-500
          shape: { type: "circle" },
          opacity: { value: 0.1 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",  // blue-500
            opacity: 0.05,
            width: 1
          },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.2 } }
          }
        },
        retina_detect: true
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particles container */}
      <div 
        id="particles-js" 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"
      ></div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Charles Maponya</span>
        </h1>
        <p className="text-xl mb-8">IT Systems & Cybersecurity Specialist</p>

        {/* Scroll button */}
        <a href="#projects">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
}