import React from 'react';
import { Compass, PenTool, Terminal, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/agencyData';
import '../styles/about.css';

const PILLAR_ICONS = {
  Compass: Compass,
  PenTool: PenTool,
  Terminal: Terminal,
  Cpu: Cpu,
};

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-story-col">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>About 51 Agency</span>
            </div>

            <h2 className="about-title">
              We Turn Complex Concepts into <br />
              <span className="about-gradient-text">World-Class Digital Products</span>
            </h2>

            <p className="about-lead">
              51 Agency is an elite software engineering and digital product agency. We bridge the gap 
              between high-level strategy and technical execution—architecting custom software, intelligent AI workflows, 
              and fluid digital experiences for forward-thinking companies.
            </p>

            <p className="about-body">
              Whether you are an ambitious scaleup modernizing your core infrastructure or an enterprise 
              deploying autonomous AI systems, our senior product teams deliver uncompromising quality, 
              robust scalability, and full code ownership from inception to production.
            </p>

            <div className="about-checklist">
              <div className="checklist-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Senior engineers only — zero offshore outsourcing layers</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Strict code review, type safety &amp; automated test coverage</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Modern AI toolchains embedded into product lifecycle</span>
              </div>
            </div>

            <div className="about-mini-stats">
              <div className="mini-stat-card">
                <span className="mini-stat-number">100%</span>
                <span className="mini-stat-label">Full IP Ownership</span>
              </div>
              <div className="mini-stat-card">
                <span className="mini-stat-number">Global</span>
                <span className="mini-stat-label">Timezone Adaptability</span>
              </div>
              <div className="mini-stat-card">
                <span className="mini-stat-number">Clean</span>
                <span className="mini-stat-label">Architecture First</span>
              </div>
            </div>
          </div>

          <div className="about-pillars-col">
            <div className="pillars-wrapper">
              <div className="pillars-header">
                <h3 className="pillars-main-heading">Our Core Product Framework</h3>
                <span className="pillars-badge">Engineered for Scale</span>
              </div>

              <div className="pillars-list">
                {ABOUT_PILLARS.map((pillar, i) => {
                  const Icon = PILLAR_ICONS[pillar.icon] || Layers;
                  return (
                    <div key={pillar.title} className="pillar-item glass-card">
                      <div className="pillar-header-row">
                        <div className="pillar-icon-box">
                          <Icon size={20} />
                        </div>
                        <span className="pillar-number">Phase 0{i + 1}</span>
                      </div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
