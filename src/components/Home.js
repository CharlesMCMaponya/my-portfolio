// src/components/Home.js
import React from 'react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
         Hi, I'm <span className="text-blue-600">Charles Maponya</span>
        </h1>
        <p className="text-xl mb-8"> IT Systems & Cybersecurity Specialist</p>

        {/* Scroll button */}
        <a href="#projects">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
}
