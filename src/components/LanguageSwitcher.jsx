import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`} role="group" aria-label="Language selector">
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button
        type="button"
        className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
        onClick={() => setLanguage('ar')}
        aria-label="التبديل إلى اللغة العربية"
        aria-pressed={language === 'ar'}
      >
        AR
      </button>
    </div>
  );
}

