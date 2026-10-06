import React from 'react';
import { ArrowRight, ChevronRight, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/hero.css';

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="pill-pulse" />
            <span className="pill-text">{t.hero.pillCategory}</span>
            <span className="pill-separator">•</span>
            <span className="pill-status">{t.hero.pillStatus}</span>
          </div>

          <h1 className="hero-title">
            {t.hero.titleLine1} <br />
            <span className="hero-gradient-text">{t.hero.titleGradient}</span> <br />
            {t.hero.titleLine2}
          </h1>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary hero-btn-main"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>{t.hero.btnStart}</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
            </a>

            <a
              href="#services"
              className="btn btn-secondary hero-btn-sub"
              onClick={(e) => handleScrollTo(e, 'services')}
            >
              <span>{t.hero.btnServices}</span>
              <ChevronRight size={18} className="btn-arrow-icon" />
            </a>
          </div>

          <div className="hero-trust-row">
            <span className="trust-label">{t.hero.corePillarsLabel}</span>
            <div className="trust-tags-list">
              {t.hero.corePillars.map((tag, idx) => (
                <span key={tag} className="trust-tag-item">
                  {tag}
                  {idx < t.hero.corePillars.length - 1 && <span className="trust-dot">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true" dir="ltr">
          <div className="visual-stage">
            <div className="visual-grid-plate" />

            <div className="orbital-core">
              <div className="core-ring core-ring-outer" />
              <div className="core-ring core-ring-middle" />
              <div className="core-ring core-ring-inner" />
              
              <div className="core-center-gem">
                <div className="gem-inner">
                  <span className="gem-number">51</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-top-right">
              <div className="chip-icon-box chip-ai">
                <Sparkles size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">{t.hero.chips.ai.title}</span>
                <span className="chip-stat">{t.hero.chips.ai.stat}</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom-left">
              <div className="chip-icon-box chip-cloud">
                <Zap size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">{t.hero.chips.latency.title}</span>
                <span className="chip-stat">{t.hero.chips.latency.stat}</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom-right">
              <div className="chip-icon-box chip-security">
                <ShieldCheck size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">{t.hero.chips.security.title}</span>
                <span className="chip-stat">{t.hero.chips.security.stat}</span>
              </div>
            </div>

            <div className="floating-chip chip-top-left">
              <div className="chip-icon-box chip-code">
                <Terminal size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">{t.hero.chips.code.title}</span>
                <span className="chip-stat">{t.hero.chips.code.stat}</span>
              </div>
            </div>

            <div className="light-beam beam-1" />
            <div className="light-beam beam-2" />
          </div>
        </div>
      </div>

      <div className="container hero-metrics-container">
        <div className="hero-metrics-grid">
          {t.hero.metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-value-row">
                <span className="metric-value" dir="ltr">{metric.value}</span>
                <span className="metric-indicator" />
              </div>
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-sub">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
