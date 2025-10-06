import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <Logo width="130" height="36" className="brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Simplify your digital workflow with smart link management. Save, organize, and access your links effortlessly.
            </p>
            <button className="bg-primary-purple text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
              Start Free Trial
            </button>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Features</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">API</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Integrations</a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Company</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Blog</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Careers</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Press</a>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Help Center</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Status</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-8 border-t border-white border-opacity-10">
          <p className="text-sm text-gray-400">© 2025 LinkEase. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
