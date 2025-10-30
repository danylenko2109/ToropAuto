import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const Testimonials = () => {
  const { t } = useLanguage();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`bx ${index < rating ? 'bxs-star' : 'bx-star'}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
          <h2>{t('testimonials-title')}</h2>
          <p>{t('testimonials-subtitle')}</p>
        </div>
        <div className="testimonials-container">
          {appData.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-text">
                {t(testimonial.textKey)}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.reviews}</p>
                </div>
              </div>
              <div className="testimonial-actions">
                <div className="testimonial-date">{t(testimonial.dateKey)}</div>
                <a 
                  href="https://maps.app.goo.gl/2q45KZJHKgEeghfW9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="testimonial-link"
                >
                  {t('view-on-maps')} <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;