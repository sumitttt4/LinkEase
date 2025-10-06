import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 text-center bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight font-noto-serif">
          Start organizing smarter.
        </h2>
        <Link to="/signup" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-semibold shadow-custom-md hover:shadow-custom-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 mb-4">
          Get Started
        </Link>
        <p className="text-sm text-gray-500">
          No login required. Save your first link in seconds.
        </p>
      </div>
    </section>
  );
};

export default CTA;
