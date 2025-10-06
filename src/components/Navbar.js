import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={(e) => handleSmoothScroll(e, 'home')}>
            <Logo width="120" height="32" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Home</a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#preview" onClick={(e) => handleSmoothScroll(e, 'preview')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Preview</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
          
            <Link to="/signup" className="bg-gray-900 text-white px-4 lg:px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-3 hover:bg-gray-50 rounded-lg transition">Home</a>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-3 hover:bg-gray-50 rounded-lg transition">Features</a>
              <a href="#preview" onClick={(e) => handleSmoothScroll(e, 'preview')} className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-3 hover:bg-gray-50 rounded-lg transition">Preview</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-3 hover:bg-gray-50 rounded-lg transition">Contact</a>
            
              <Link to="/signup" className="bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-gray-800 transition">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
