import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo width="110" height="30" className="text-gray-900" />
          <p className="text-sm text-gray-500">
            © 2025 LinkEase. All rights reserved.
          </p>
        </div>

        {/* Right: Simple Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary-purple transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary-purple transition-colors">Terms</a>
          <a href="#" className="hover:text-primary-purple transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
