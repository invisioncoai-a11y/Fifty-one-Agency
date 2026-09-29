import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Technologies from './components/Technologies';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="agency-app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Technologies />
        <CTASection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
