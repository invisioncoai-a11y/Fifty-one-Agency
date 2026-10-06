import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Palette, 
  Sparkles, 
  RefreshCw, 
  Code2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { useLanguage } from '../context/LanguageContext';
import '../styles/services.css';

const ICON_MAP = {
  Globe: Globe,
  LayoutDashboard: LayoutDashboard,
  Smartphone: Smartphone,
  Palette: Palette,
  Sparkles: Sparkles,
  RefreshCw: RefreshCw,
  Code2: Code2,
};

export default function Services() {
  const { t } = useLanguage();

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
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>{t.services.tag}</span>
          </div>
          <h2 className="section-title">
            {t.services.titleLine1} <br />
            {t.services.titleLine2}
          </h2>
          <p className="section-subtitle">
            {t.services.subtitle}
          </p>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => {
            const staticService = SERVICES_DATA.find((s) => s.id === service.id) || SERVICES_DATA[index] || {};
            const IconComponent = ICON_MAP[staticService.icon] || Code2;
            const isFeatured = service.id === 'ai-solutions' || service.id === 'custom-software';

            return (
              <div 
                key={service.id} 
                className={`service-card glass-card ${isFeatured ? 'service-card-featured' : ''}`}
              >
                <div className="service-card-glow" />

                <div className="service-card-header">
                  <div className={`service-icon-box icon-accent-${staticService.accent || 'gold'}`}>
                    <IconComponent size={24} />
                  </div>
                  <span className="service-card-index">0{index + 1}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>

                <div className="service-tags-wrapper">
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="service-card-footer">
                  <a 
                    href="#contact" 
                    className="service-link"
                    onClick={handleScrollToContact}
                  >
                    <span>{t.services.btnDiscuss}</span>
                    <ArrowRight size={16} className="service-link-arrow" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
