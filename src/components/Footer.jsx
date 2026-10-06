import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { BRAND_CONFIG, CONTACT_DETAILS } from '../data/agencyData';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './icons/WhatsAppIcon';
import '../styles/footer.css';

export default function Footer() {
  const { t } = useLanguage();

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

  const navItems = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.capabilities, href: '#capabilities' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand-link" onClick={(e) => handleNavClick(e, '#hero')} aria-label={t.nav.homeAria}>
              <img 
                src="/51Agency-Logo.png" 
                alt="51 Agency" 
                className="footer-logo-img" 
              />
            </a>

            <p className="footer-brand-desc">
              {t.footer.brandDesc}
            </p>

            <div className="footer-system-status">
              <span className="status-dot-active" />
              <span>{t.footer.systemStatus}</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.navTitle}</h4>
            <ul className="footer-links-list">
              {navItems.map((link) => (
                <li key={link.href}>
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
            <h4 className="footer-col-title">{t.footer.servicesTitle}</h4>
            <ul className="footer-links-list">
              {t.services.items.map((service) => (
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
            <h4 className="footer-col-title">{t.footer.connectTitle}</h4>
            <div className="footer-connect-list">
              <div className="footer-connect-item">
                <span className="footer-connect-label">{t.footer.labelEmail}</span>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="footer-email-link" dir="ltr">
                  {CONTACT_DETAILS.email}
                </a>
              </div>

              <div className="footer-connect-item">
                <span className="footer-connect-label">{t.footer.labelIraq}</span>
                <a href={CONTACT_DETAILS.iraqTel} className="footer-phone-link" dir="ltr">
                  {CONTACT_DETAILS.iraqPhone}
                </a>
              </div>

              <div className="footer-connect-item">
                <span className="footer-connect-label">{t.footer.labelJordan}</span>
                <a href={CONTACT_DETAILS.jordanTel} className="footer-phone-link" dir="ltr">
                  {CONTACT_DETAILS.jordanPhone}
                </a>
              </div>

              <div className="footer-connect-item">
                <span className="footer-connect-label">{t.footer.labelWhatsApp}</span>
                <a 
                  href={CONTACT_DETAILS.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-phone-link"
                  dir="ltr"
                >
                  {CONTACT_DETAILS.whatsappPhone}
                </a>
              </div>

              <div className="footer-connect-item">
                <span className="footer-connect-label">{t.footer.labelInstagram}</span>
                <a 
                  href={CONTACT_DETAILS.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-instagram-link"
                >
                  {CONTACT_DETAILS.instagramHandle}
                </a>
              </div>
            </div>

            <div className="footer-social-row">
              <a 
                href={CONTACT_DETAILS.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Instagram"
                title="Instagram @51_agency"
              >
                <Instagram size={16} />
              </a>
              <a 
                href={CONTACT_DETAILS.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="WhatsApp"
                title="WhatsApp +962 7 9791 2400"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            {t.footer.copyright}
          </p>

          <div className="footer-legal-tags">
            <span className="legal-tag">{t.footer.privacy}</span>
            <span className="legal-dot">•</span>
            <span className="legal-tag">{t.footer.terms}</span>
            <span className="legal-dot">•</span>
            <span className="legal-tag">{t.footer.security}</span>
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={16} className="btn-arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}
