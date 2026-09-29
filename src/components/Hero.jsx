import React from 'react';
import { ArrowRight, ChevronRight, Terminal, Cpu, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, TRUST_TAGS, HERO_METRICS } from '../data/agencyData';
import '../styles/hero.css';

export default function Hero() {
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
            <span className="pill-text">Software • AI • Web • Mobile</span>
            <span className="pill-separator">•</span>
            <span className="pill-status">{BRAND_CONFIG.status}</span>
          </div>

          <h1 className="hero-title">
            Engineering Next-Gen <br />
            <span className="hero-gradient-text">Digital Systems</span> <br />
            &amp; AI Solutions.
          </h1>

          <p className="hero-description">
            51 Agency designs and develops high-impact digital experiences, intelligent AI software,
            and mission-critical web applications built for enterprises and ambitious scaleups.
          </p>

          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary hero-btn-main"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="btn btn-secondary hero-btn-sub"
              onClick={(e) => handleScrollTo(e, 'services')}
            >
              <span>Explore Our Services</span>
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="hero-trust-row">
            <span className="trust-label">Core Pillars:</span>
            <div className="trust-tags-list">
              {TRUST_TAGS.map((tag, idx) => (
                <span key={tag} className="trust-tag-item">
                  {tag}
                  {idx < TRUST_TAGS.length - 1 && <span className="trust-dot">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
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
                <span className="chip-title">AI Engine</span>
                <span className="chip-stat">Sub-20ms Inference</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom-left">
              <div className="chip-icon-box chip-cloud">
                <Zap size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">Latency Standard</span>
                <span className="chip-stat">0.24s Global TTI</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom-right">
              <div className="chip-icon-box chip-security">
                <ShieldCheck size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">Zero-Trust Security</span>
                <span className="chip-stat">Enterprise Ready</span>
              </div>
            </div>

            <div className="floating-chip chip-top-left">
              <div className="chip-icon-box chip-code">
                <Terminal size={16} />
              </div>
              <div className="chip-info">
                <span className="chip-title">Clean Architecture</span>
                <span className="chip-stat">100% Type-Safe</span>
              </div>
            </div>

            <div className="light-beam beam-1" />
            <div className="light-beam beam-2" />
          </div>
        </div>
      </div>

      <div className="container hero-metrics-container">
        <div className="hero-metrics-grid">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-value-row">
                <span className="metric-value">{metric.value}</span>
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
