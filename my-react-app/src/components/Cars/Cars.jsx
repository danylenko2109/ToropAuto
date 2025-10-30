import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const Cars = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cars" id="cars">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
          <h2>{t('cars-title')}</h2>
          <p>{t('cars-subtitle')}</p>
        </div>
        <div className="cars-grid">
          {appData.cars.map((car, index) => (
            <div 
              key={index}
              className="car-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="car-image">
                <img src={car.image} alt={car.title} />
                <div className="car-badge">{t(car.badgeKey)}</div>
              </div>
              <div className="car-info">
                <div className="car-header">
                  <h3>{car.title}</h3>
                  <div className="car-year">{car.year}</div>
                </div>
                <p>{t(car.textKey)}</p>
                <div className="car-price">{car.price}</div>
                <div className="car-features">
                  <div className="car-feature">
                    <i className='bx bxs-gas-pump'></i>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="car-feature">
                    <i className='bx bxs-car'></i>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="car-feature">
                    <i className='bx bx-user'></i>
                    <span>{car.seats}</span>
                  </div>
                </div>
                <div className="car-actions">
                  <button 
                    className="car-btn"
                    onClick={() => scrollToSection('contact')}
                  >
                    {t('car-btn')} <i className='bx bx-chevron-right'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* External Platforms Section */}
        <div className="external-platforms" data-aos="fade-up" data-aos-duration="1000">
          <h3>{t('platforms-title')}</h3>
          <p>{t('platforms-subtitle')}</p>
          <div className="platform-buttons">
            <a 
              href="https://www.kleinanzeigen.de/s-bestandsliste.html?userId=153012374" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-btn"
            >
              <img src="/images/klein.svg" alt="Kleinanzeigen" width="150" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-btn"
            >
              <img src="/images/mobile.svg" alt="mobile.de" width="150" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;