import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import '../styles/cta.css';

export default function CTASection() {
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
              <span>Let's Create Something Extraordinary</span>
            </div>

            <h2 className="cta-title">
              Have an Idea? <br />
              <span className="cta-gradient-text">Let's Build It Together.</span>
            </h2>

            <p className="cta-desc">
              Whether you need to architect a new software platform from the ground up, 
              infuse autonomous AI capabilities, or overhaul an existing web application—we’re ready.
            </p>

            <div className="cta-btn-group">
              <a 
                href="#contact" 
                className="btn btn-primary cta-btn-large"
                onClick={handleScrollToContact}
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="#contact" 
                className="btn btn-secondary cta-btn-large"
                onClick={handleScrollToContact}
              >
                <MessageSquare size={18} />
                <span>Contact Us</span>
              </a>
            </div>

            <div className="cta-subtext-row">
              <span className="cta-sub-item">⚡ Guaranteed 24h response time</span>
              <span className="cta-sub-bullet">•</span>
              <span className="cta-sub-item">🔒 Strict Mutual NDA</span>
              <span className="cta-sub-bullet">•</span>
              <span className="cta-sub-item">💼 Direct access to senior architects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
