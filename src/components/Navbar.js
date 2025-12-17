import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial user preference or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white dark:bg-black/95 dark:border-b dark:border-white/10 py-4 sticky top-0 z-50 shadow-sm dark:shadow-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={(e) => handleSmoothScroll(e, 'home')}>
            <Logo width="120" height="32" className="dark:brightness-0 dark:invert" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Features</a>
            <a href="#preview" onClick={(e) => handleSmoothScroll(e, 'preview')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Preview</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/signup" className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 lg:px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 px-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition">Home</a>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 px-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition">Features</a>
              <a href="#preview" onClick={(e) => handleSmoothScroll(e, 'preview')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 px-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition">Preview</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 px-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition">Contact</a>

              <Link to="/signup" className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-gray-800 transition">
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
