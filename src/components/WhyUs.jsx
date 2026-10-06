import React from 'react';
import { 
  Layers, 
  Maximize2, 
  Smile, 
  ShieldCheck, 
  Zap, 
  HeartHandshake 
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/agencyData';
import { useLanguage } from '../context/LanguageContext';
import '../styles/whyus.css';

const WHY_US_ICONS = {
  Layers: Layers,
  Maximize2: Maximize2,
  Smile: Smile,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
};

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>{t.whyUs.tag}</span>
          </div>
          <h2 className="section-title">
            {t.whyUs.titleLine1} <br />
            {t.whyUs.titleLine2}
          </h2>
          <p className="section-subtitle">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="why-us-grid">
          {t.whyUs.items.map((item) => {
            const staticItem = WHY_CHOOSE_US_DATA.find((w) => w.id === item.id) || {};
            const Icon = WHY_US_ICONS[staticItem.icon] || Zap;

            return (
              <div key={item.id} className="why-card glass-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="why-stat-pill">{item.stat}</span>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>

                <div className="why-card-highlight-bar" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
