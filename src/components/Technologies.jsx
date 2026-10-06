import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/technologies.css';

export default function Technologies() {
  const { t } = useLanguage();
  const [selectedCatIdx, setSelectedCatIdx] = useState(-1);

  const filterOptions = [
    { id: -1, label: t.technologies.allFilter },
    ...t.technologies.categories.map((cat, idx) => ({ id: idx, label: cat.category })),
  ];

  const filteredCategories = selectedCatIdx === -1 
    ? t.technologies.categories 
    : [t.technologies.categories[selectedCatIdx]].filter(Boolean);

  return (
    <section id="capabilities" className="tech-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>{t.technologies.tag}</span>
          </div>
          <h2 className="section-title">
            {t.technologies.titleLine1} <br />
            {t.technologies.titleLine2}
          </h2>
          <p className="section-subtitle">
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="tech-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              className={`tech-filter-btn ${selectedCatIdx === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedCatIdx(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="tech-categories-wrapper">
          {filteredCategories.map((group) => (
            <div key={group.category} className="tech-category-group">
              <div className="tech-group-header">
                <h3 className="tech-group-title">{group.category}</h3>
                <span className="tech-count-badge">
                  {group.items.length} {t.technologies.techCountSuffix}
                </span>
              </div>

              <div className="tech-cards-grid">
                {group.items.map((tech) => (
                  <div key={tech.name} className="tech-card glass-card">
                    <div className="tech-card-header">
                      <span className="tech-badge">{tech.level}</span>
                      <div className="tech-active-indicator" />
                    </div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-desc">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
