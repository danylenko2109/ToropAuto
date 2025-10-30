import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь будет интеграция с сервисом отправки форм (Formspree, EmailJS и т.д.)
    const messages = {
      ru: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
      de: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.',
      uk: 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.'
    };
    
    alert(messages[localStorage.getItem('torop-auto-lang') || 'ru']);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
          <h2>{t('contact-title')}</h2>
          <p>{t('contact-subtitle')}</p>
        </div>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
            <h2>{t('contact-info-title')}</h2>
            <p>{t('contact-info-text')}</p>
            <div className="contact-details">
              {appData.contactDetails.map((detail, index) => (
                <div key={index} className="contact-detail">
                  <i className={detail.icon}></i>
                  <div>
                    <h4>{t(detail.titleKey)}</h4>
                    <p dangerouslySetInnerHTML={{ 
                      __html: detail.textKey ? t(detail.textKey) : detail.text 
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form" data-aos="fade-left" data-aos-duration="1000">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('form-name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder={t('form-name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('form-email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder={t('form-email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t('form-phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder={t('form-phone')}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t('form-subject')}</label>
                <select
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('form-subject-default')}</option>
                  <option value="service">{t('form-subject1')}</option>
                  <option value="car">{t('form-subject2')}</option>
                  <option value="parts">{t('form-subject3')}</option>
                  <option value="other">{t('form-subject4')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('form-message')}</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder={t('form-message')}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {t('form-submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;