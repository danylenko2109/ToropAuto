import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const Services = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
          <h2>{t('services-title')}</h2>
          <p>{t('services-subtitle')}</p>
        </div>
        <div className="services-grid">
          {appData.services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{t(service.titleKey)}</h3>
              <p>{t(service.textKey)}</p>
              <a 
                href="#contact" 
                className="service-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {t('service-link')} <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;