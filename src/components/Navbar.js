import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={(e) => handleSmoothScroll(e, 'home')}>
            <Logo width="120" height="32" />
          </Link>
          <div className="flex items-center gap-8">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Home</a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#preview" onClick={(e) => handleSmoothScroll(e, 'preview')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Preview</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Login
            </Link>
            <Link to="/signup" className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
