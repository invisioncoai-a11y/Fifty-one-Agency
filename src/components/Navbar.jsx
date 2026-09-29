import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG, NAVIGATION_LINKS } from '../data/agencyData';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
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
          aria-label="51 Agency Home"
        >
          <div className="brand-logo-badge">
            <span className="brand-logo-number">{BRAND_CONFIG.shortName}</span>
          </div>
          <span className="brand-logo-text">
            51 <span className="brand-accent">AGENCY</span>
          </span>
        </a>

        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAVIGATION_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
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
          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="mobile-menu-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {NAVIGATION_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="mobile-nav-item">
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
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </a>
            <div className="mobile-status-pill">
              <span className="status-dot"></span>
              <span>Available for New Projects</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
