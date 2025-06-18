// src/components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">IT Systems</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}