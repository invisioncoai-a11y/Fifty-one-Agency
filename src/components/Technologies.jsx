import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '../data/agencyData';
import '../styles/technologies.css';

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...TECHNOLOGIES_DATA.map(t => t.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? TECHNOLOGIES_DATA 
    : TECHNOLOGIES_DATA.filter(t => t.category === selectedCategory);

  return (
    <section id="capabilities" className="tech-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Modern Tech Stack</span>
          </div>
          <h2 className="section-title">
            Engineered with Modern, <br />
            Industry-Standard Tooling
          </h2>
          <p className="section-subtitle">
            We intentionally select best-in-class technologies that ensure lightning-fast performance, 
            high security, developer ergonomics, and painless long-term maintenance.
          </p>
        </div>

        <div className="tech-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tech-categories-wrapper">
          {filteredCategories.map((group) => (
            <div key={group.category} className="tech-category-group">
              <div className="tech-group-header">
                <h3 className="tech-group-title">{group.category}</h3>
                <span className="tech-count-badge">{group.items.length} Technologies</span>
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
