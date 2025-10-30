import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import '../../styles/global';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
          <p>{t('hero-text')}</p>
          <div className="hero-buttons">
            <a 
              href="#services" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              {t('services-btn')}
            </a>
            <a 
              href="#cars" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('cars');
              }}
            >
              {t('cars-btn')}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/pic1.jpg" alt="Автомобиль" />
        </div>
      </div>
    </section>
  );
};

export default Hero;