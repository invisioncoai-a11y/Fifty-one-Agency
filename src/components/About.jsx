import React from 'react';
import { Compass, PenTool, Terminal, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/agencyData';
import { useLanguage } from '../context/LanguageContext';
import '../styles/about.css';

const PILLAR_ICONS = {
  Compass: Compass,
  PenTool: PenTool,
  Terminal: Terminal,
  Cpu: Cpu,
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-story-col">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>{t.about.tag}</span>
            </div>

            <h2 className="about-title">
              {t.about.titleLine1} <br />
              <span className="about-gradient-text">{t.about.titleGradient}</span>
            </h2>

            <p className="about-lead">
              {t.about.lead}
            </p>

            <p className="about-body">
              {t.about.body}
            </p>

            <div className="about-checklist">
              {t.about.checklist.map((item) => (
                <div key={item} className="checklist-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="about-mini-stats">
              {t.about.miniStats.map((stat) => (
                <div key={stat.label} className="mini-stat-card">
                  <span className="mini-stat-number" dir="ltr">{stat.number}</span>
                  <span className="mini-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-pillars-col">
            <div className="pillars-wrapper">
              <div className="pillars-header">
                <h3 className="pillars-main-heading">{t.about.pillarsHeading}</h3>
                <span className="pillars-badge">{t.about.pillarsBadge}</span>
              </div>

              <div className="pillars-list">
                {t.about.pillars.map((pillar, i) => {
                  const Icon = PILLAR_ICONS[ABOUT_PILLARS[i]?.icon] || Layers;
                  return (
                    <div key={pillar.title} className="pillar-item glass-card">
                      <div className="pillar-header-row">
                        <div className="pillar-icon-box">
                          <Icon size={20} />
                        </div>
                        <span className="pillar-number">{t.about.phasePrefix || 'Phase 0'}{i + 1}</span>
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
