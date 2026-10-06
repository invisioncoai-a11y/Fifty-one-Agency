import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
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

function MainApp() {
  const { t } = useLanguage();

  return (
    <div className="agency-app">
      <a href="#main-content" className="skip-link">
        {t.nav.skipToContent}
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

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
