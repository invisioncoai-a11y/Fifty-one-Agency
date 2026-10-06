import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  AlertCircle, 
  ExternalLink,
  Instagram
} from 'lucide-react';
import { CONTACT_DETAILS } from '../data/agencyData';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './icons/WhatsAppIcon';
import '../styles/contact.css';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Custom Software Development',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus('coming_soon');
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || 'Potential Client'}`);
    const body = encodeURIComponent(
      `Hello 51 Agency Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService Needed: ${formData.service}\n\nProject Scope:\n${formData.message}\n`
    );
    window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="section-title">
            {t.contact.titleLine1} <br />
            {t.contact.titleLine2}
          </h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-title">{t.contact.channelsCardTitle}</h3>
              <p className="contact-info-desc">
                {t.contact.channelsCardDesc}
              </p>

              <div className="channels-list">
                <a 
                  href={CONTACT_DETAILS.iraqTel} 
                  className="channel-item"
                  title="Call Iraq office"
                >
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.labelIraq}</span>
                    <span className="channel-val" dir="ltr">{CONTACT_DETAILS.iraqPhone}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <a 
                  href={CONTACT_DETAILS.jordanTel} 
                  className="channel-item"
                  title="Call Jordan office"
                >
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.labelJordan}</span>
                    <span className="channel-val" dir="ltr">{CONTACT_DETAILS.jordanPhone}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <a 
                  href={CONTACT_DETAILS.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-item"
                  title="Chat with Jordan office on WhatsApp"
                >
                  <div className="channel-icon-box channel-icon-whatsapp">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.labelWhatsApp}</span>
                    <span className="channel-val" dir="ltr">{CONTACT_DETAILS.whatsappPhone}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`} 
                  className="channel-item"
                  title="Send us an email"
                >
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.labelEmail}</span>
                    <span className="channel-val" dir="ltr">{CONTACT_DETAILS.email}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <a 
                  href={CONTACT_DETAILS.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-item"
                  title="Follow 51 Agency on Instagram"
                >
                  <div className="channel-icon-box">
                    <Instagram size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.labelInstagram}</span>
                    <span className="channel-val">{CONTACT_DETAILS.instagramHandle}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>
              </div>

              <div className="social-links-block">
                <span className="social-links-heading">{t.contact.followHeading}</span>
                <div className="social-icons-row">
                  <a 
                    href={CONTACT_DETAILS.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="Instagram"
                    title="Instagram @51_agency"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href={CONTACT_DETAILS.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="WhatsApp"
                    title="WhatsApp +962 7 9791 2400"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="contact-status-note">
                <span className="note-pulse" />
                <span className="note-text">{t.contact.statusNote}</span>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title">{t.contact.formTitle}</h3>
              <p className="form-card-sub">
                {t.contact.formSub}
              </p>

              {submissionStatus === 'coming_soon' ? (
                <div className="form-notice-box" role="alert">
                  <div className="notice-icon-box">
                    <AlertCircle size={24} className="notice-icon" />
                  </div>
                  <div className="notice-content">
                    <h4 className="notice-title">{t.contact.noticeTitle}</h4>
                    <p className="notice-body">
                      {t.contact.noticeBody}
                    </p>
                    <div className="notice-action-row">
                      <button 
                        type="button" 
                        onClick={handleOpenMailto} 
                        className="btn btn-primary btn-sm"
                      >
                        <Mail size={16} />
                        <span>{t.contact.btnSendEmail}</span>
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setSubmissionStatus(null)} 
                        className="btn btn-secondary btn-sm"
                      >
                        <span>{t.contact.btnEditForm}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        {t.contact.labelName} <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.placeholderName}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        {t.contact.labelEmailField} <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.placeholderEmail}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contact-company" className="form-label">
                        {t.contact.labelCompany}
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.placeholderCompany}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service" className="form-label">
                        {t.contact.labelService}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {t.contact.servicesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      {t.contact.labelOverview} <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.placeholderOverview}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-form">
                    <span>{t.contact.btnSubmit}</span>
                    <Send size={18} />
                  </button>

                  <p className="form-disclaimer">
                    {t.contact.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
