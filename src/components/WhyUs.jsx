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
  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>The 51 Advantage</span>
          </div>
          <h2 className="section-title">
            Built for Businesses That Demand <br />
            Engineering Excellence
          </h2>
          <p className="section-subtitle">
            We operate as an elite extension of your technical team, combining strategic design thinking 
            with resilient code architecture to future-proof your digital investments.
          </p>
        </div>

        <div className="why-us-grid">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const Icon = WHY_US_ICONS[item.icon] || Zap;

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
