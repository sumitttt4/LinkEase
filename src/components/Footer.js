import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Column 1 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo width="130" height="36" className="brightness-0 invert" />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-5 max-w-xs">
              Simplify your digital workflow with smart link management. Save, organize, and access your links effortlessly.
            </p>
            <button className="bg-primary-purple text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-opacity-90 transition">
              Start Free Trial
            </button>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold mb-3 sm:mb-4">Product</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Features</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">API</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Integrations</a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold mb-3 sm:mb-4">About</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Company</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Blog</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Careers</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Press</a>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-semibold mb-3 sm:mb-4">Support</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Help Center</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Contact</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Status</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-6 sm:pt-8 border-t border-white border-opacity-10">
          <p className="text-xs sm:text-sm text-gray-400">© 2025 LinkEase. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
