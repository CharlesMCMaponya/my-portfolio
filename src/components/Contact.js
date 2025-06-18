import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!/^[a-zA-Z\s]{2,30}$/.test(value)) 
          return 'Name should be 2-30 letters only';
        return '';
        
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) 
          return 'Invalid email format';
        return '';
        
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) 
          return 'Message should be at least 10 characters';
        if (value.length > 500) 
          return 'Message too long (max 500 characters)';
        return '';
        
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate as user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate entire form
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_lu98qfo',   // Service ID
        'template_y2e4hhi',  // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'WnRiXsU27g-eHSZRo'  // Public Key
      );
      
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`} 
                  placeholder="John Doe" 
                  required 
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`} 
                  placeholder="john@example.com" 
                  required 
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`} 
                  placeholder="Write your message here..."
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 px-6 rounded-lg transition mt-4`}
              >
                <FaPaperPlane /> 
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-center ${
                  submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">CharlesMosehla@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+27 76 194 4140</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaGithub className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/CharlesMCMaponya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      github.com/CharlesMCMaponya
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaLinkedin className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/mosehla-charles-maponya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      www.linkedin.com/in/mosehla-charles-maponya
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Let's connect!</h4>
                <p className="text-gray-600">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}