import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/cta.css';

export default function CTASection() {
  const { t } = useLanguage();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-ambient-glow" />

          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} className="cta-sparkle" />
              <span>{t.cta.badge}</span>
            </div>

            <h2 className="cta-title">
              {t.cta.titleLine1} <br />
              <span className="cta-gradient-text">{t.cta.titleGradient}</span>
            </h2>

            <p className="cta-desc">
              {t.cta.desc}
            </p>

            <div className="cta-btn-group">
              <a 
                href="#contact" 
                className="btn btn-primary cta-btn-large"
                onClick={handleScrollToContact}
              >
                <span>{t.cta.btnStart}</span>
                <ArrowRight size={18} className="btn-arrow-icon" />
              </a>

              <a 
                href="#contact" 
                className="btn btn-secondary cta-btn-large"
                onClick={handleScrollToContact}
              >
                <MessageSquare size={18} />
                <span>{t.cta.btnContact}</span>
              </a>
            </div>

            <div className="cta-subtext-row">
              <span className="cta-sub-item">{t.cta.subtext1}</span>
              <span className="cta-sub-bullet">•</span>
              <span className="cta-sub-item">{t.cta.subtext2}</span>
              <span className="cta-sub-bullet">•</span>
              <span className="cta-sub-item">{t.cta.subtext3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
