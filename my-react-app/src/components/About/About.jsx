import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-duration="1000">
            <img src="/images/pic2.jpg" alt="О нас" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-duration="1000">
            <h2>{t('about-title')}</h2>
            <p>{t('about-text1')}</p>
            <p>{t('about-text2')}</p>
            <div className="features">
              {appData.features.map((featureKey, index) => (
                <div key={index} className="feature">
                  <i className='bx bx-check'></i>
                  <span>{t(featureKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;