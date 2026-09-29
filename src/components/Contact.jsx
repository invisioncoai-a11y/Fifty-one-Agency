import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  AlertCircle, 
  ExternalLink,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';
import { CONTACT_DETAILS } from '../data/agencyData';
import '../styles/contact.css';

export default function Contact() {
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
            <span>Direct Channel</span>
          </div>
          <h2 className="section-title">
            Let's Discuss Your Next <br />
            Digital Breakthrough
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need technical consultation, or want an architectural estimate? 
            Reach out through our direct channels or send a message below.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-title">Contact Channels</h3>
              <p className="contact-info-desc">
                We respond within 24 hours. All project consultations include our mutual confidentiality pledge.
              </p>

              <div className="channels-list">
                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`} 
                  className="channel-item"
                  title="Send us an email"
                >
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Direct Email</span>
                    <span className="channel-val">{CONTACT_DETAILS.email}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <a 
                  href={CONTACT_DETAILS.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-item"
                  title="Chat with us on WhatsApp"
                >
                  <div className="channel-icon-box channel-whatsapp">
                    <MessageSquare size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">WhatsApp Hotline</span>
                    <span className="channel-val">{CONTACT_DETAILS.whatsapp}</span>
                  </div>
                  <ExternalLink size={16} className="channel-ext" />
                </a>

                <div className="channel-item non-clickable">
                  <div className="channel-icon-box channel-location">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Global Presence</span>
                    <span className="channel-val">{CONTACT_DETAILS.location}</span>
                  </div>
                </div>
              </div>

              <div className="social-links-block">
                <span className="social-links-heading">Follow 51 Agency</span>
                <div className="social-icons-row">
                  <a 
                    href={CONTACT_DETAILS.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={CONTACT_DETAILS.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="Twitter / X"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={CONTACT_DETAILS.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={CONTACT_DETAILS.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              <div className="contact-status-note">
                <span className="note-pulse" />
                <span className="note-text">Accepting new enterprise &amp; startup engagements</span>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title">Send a Project Brief</h3>
              <p className="form-card-sub">
                Fill in your project details to initiate an architectural review.
              </p>

              {submissionStatus === 'coming_soon' ? (
                <div className="form-notice-box" role="alert">
                  <div className="notice-icon-box">
                    <AlertCircle size={24} className="notice-icon" />
                  </div>
                  <div className="notice-content">
                    <h4 className="notice-title">Contact Form Integration Coming Soon</h4>
                    <p className="notice-body">
                      Thank you for contacting 51 Agency! This frontend form is currently in preview mode. 
                      You can send your pre-filled inquiry directly to our team with your default mail client:
                    </p>
                    <div className="notice-action-row">
                      <button 
                        type="button" 
                        onClick={handleOpenMailto} 
                        className="btn btn-primary btn-sm"
                      >
                        <Mail size={16} />
                        <span>Send via Email Client</span>
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setSubmissionStatus(null)} 
                        className="btn btn-secondary btn-sm"
                      >
                        <span>Edit Form</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contact-company" className="form-label">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service" className="form-label">
                        Service Interest
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Web Applications">Web Applications</option>
                        <option value="Mobile Applications">Mobile Applications</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Project Overview <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your objectives, timeline, and current technical state..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-form">
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </button>

                  <p className="form-disclaimer">
                    🔒 Your information is confidential and will never be shared with third parties.
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
