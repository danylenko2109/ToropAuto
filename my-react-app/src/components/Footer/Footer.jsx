import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { appData } from '../../data/appData';
import '../../styles/global';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Torop Auto</h3>
            <p>{t('footer-about')}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className='bx bxl-facebook'></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className='bx bxl-twitter'></i>
              </a>
            </div>
          </div>
          {appData.footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <h3>{t(column.titleKey)}</h3>
              <ul className="footer-links">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (column.titleKey === 'footer-services-title') {
                          scrollToSection('services');
                        } else if (column.titleKey === 'footer-contact-title') {
                          scrollToSection('contact');
                        }
                      }}
                    >
                      {link.icon && <i className={link.icon}></i>}
                      {!link.icon && <i className="bx bx-chevron-right"></i>}
                      <span>{link.textKey ? t(link.textKey) : link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Torop Auto. <span>{t('footer-rights')}</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;