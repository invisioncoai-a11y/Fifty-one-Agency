import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/navbar.css';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { key: 'home', name: t.nav.home, href: '#hero' },
    { key: 'services', name: t.nav.services, href: '#services' },
    { key: 'about', name: t.nav.about, href: '#about' },
    { key: 'whyUs', name: t.nav.whyUs, href: '#why-us' },
    { key: 'process', name: t.nav.process, href: '#process' },
    { key: 'capabilities', name: t.nav.capabilities, href: '#capabilities' },
    { key: 'contact', name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'services', 'about', 'why-us', 'process', 'capabilities', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a 
          href="#hero" 
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label={t.nav.homeAria}
        >
          <img 
            src="/51Agency-Logo.png" 
            alt="51 Agency" 
            className="navbar-logo-img" 
          />
        </a>

        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.key} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="nav-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions desktop-only">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mobile-header-actions mobile-only">
          <LanguageSwitcher />
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navItems.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.key} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={18} className="mobile-nav-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <a
              href="#contact"
              className="btn btn-primary btn-full-width"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight size={18} />
            </a>
            <div className="mobile-status-pill">
              <span className="status-dot"></span>
              <span>{t.nav.availableForProjects}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
