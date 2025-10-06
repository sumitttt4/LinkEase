import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import OrganizedLinks from './components/OrganizedLinks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyChoose />
      <OrganizedLinks />
      <CTA />
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
