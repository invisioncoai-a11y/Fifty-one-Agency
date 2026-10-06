import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/process.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>{t.process.tag}</span>
          </div>
          <h2 className="section-title">
            {t.process.titleLine1} <br />
            {t.process.titleLine2}
          </h2>
          <p className="section-subtitle">
            {t.process.subtitle}
          </p>
        </div>

        <div className="process-steps-container">
          <div className="process-grid">
            {t.process.steps.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <div 
                  key={item.step} 
                  className={`process-card glass-card ${isSelected ? 'process-card-active' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                  tabIndex={0}
                  role="button"
                  onFocus={() => setActiveStep(index)}
                  aria-label={`Step ${item.step}: ${item.name}`}
                >
                  <div className="step-badge-row">
                    <span className="step-num-badge" dir="ltr">{item.step}</span>
                    <span className="step-tag-pill">{item.name}</span>
                  </div>

                  <h3 className="process-step-title">{item.title}</h3>
                  <p className="process-step-desc">{item.description}</p>

                  <div className="process-deliverables">
                    <span className="deliverables-heading">{t.process.deliverablesHeading}</span>
                    <ul className="deliverables-list">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="deliverable-item">
                          <Check size={14} className="deliv-check" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="process-step-bottom-indicator" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
