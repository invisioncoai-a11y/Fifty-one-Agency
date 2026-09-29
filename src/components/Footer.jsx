import React from 'react';
import { ArrowUp, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { BRAND_CONFIG, CONTACT_DETAILS, NAVIGATION_LINKS, SERVICES_DATA } from '../data/agencyData';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand-link" onClick={(e) => handleNavClick(e, '#hero')}>
              <div className="brand-logo-badge">
                <span className="brand-logo-number">{BRAND_CONFIG.shortName}</span>
              </div>
              <span className="brand-logo-text">
                51 <span className="brand-accent">AGENCY</span>
              </span>
            </a>

            <p className="footer-brand-desc">
              {BRAND_CONFIG.tagline}. We empower founders and enterprises by building scalable digital 
              products, robust web applications, and state-of-the-art AI software.
            </p>

            <div className="footer-system-status">
              <span className="status-dot-active" />
              <span>All Global Systems Operational</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a 
                    href="#services" 
                    className="footer-link"
                    onClick={(e) => handleNavClick(e, '#services')}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-connect-text">
              Direct inquiries: <br />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="footer-email-link">
                {CONTACT_DETAILS.email}
              </a>
            </p>

            <p className="footer-connect-text">
              Phone / WhatsApp: <br />
              <span className="footer-phone-val">{CONTACT_DETAILS.phone}</span>
            </p>

            <div className="footer-social-row">
              <a 
                href={CONTACT_DETAILS.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={CONTACT_DETAILS.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href={CONTACT_DETAILS.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href={CONTACT_DETAILS.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {BRAND_CONFIG.foundedYear} {BRAND_CONFIG.name}. All rights reserved. Built for performance and scale.
          </p>

          <div className="footer-legal-tags">
            <span className="legal-tag">Privacy Policy</span>
            <span className="legal-dot">•</span>
            <span className="legal-tag">Terms of Service</span>
            <span className="legal-dot">•</span>
            <span className="legal-tag">Security Disclosure</span>
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
