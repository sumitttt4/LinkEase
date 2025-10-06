import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Logo width="120" height="32" />
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#preview" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Preview</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
