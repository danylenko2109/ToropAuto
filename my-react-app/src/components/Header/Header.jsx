import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import '../../styles/global';

const Header = () => {
  const { currentLang, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="Torop Auto" width="50" />
          <h2>Torop <span>Auto</span></h2>
        </div>
        
        <div className="nav-container">
          <nav>
            <ul className={isMenuOpen ? 'active' : ''}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>{t('home')}</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>{t('services')}</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>{t('about')}</a></li>
              <li><a href="#cars" onClick={() => scrollToSection('cars')}>{t('cars')}</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>{t('testimonials')}</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t('contact')}</a></li>
            </ul>
          </nav>

          <div className="language-switcher">
            <button className="language-btn" onClick={toggleLanguage}>
              <i className='bx bx-globe'></i>
              <span>{t('current-lang')}</span>
              <i className='bx bx-chevron-down'></i>
            </button>
            <div className={`language-dropdown ${isLanguageOpen ? 'active' : ''}`}>
              <div 
                className={`language-option ${currentLang === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                <i className='bx bx-check'></i>
                <span>Русский</span>
              </div>
              <div 
                className={`language-option ${currentLang === 'de' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('de')}
              >
                <i className='bx bx-check'></i>
                <span>Deutsch</span>
              </div>
              <div 
                className={`language-option ${currentLang === 'uk' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('uk')}
              >
                <i className='bx bx-check'></i>
                <span>Українська</span>
              </div>
            </div>
          </div>

          <button className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
          </button>

          <div className="contact-header">
            <a href="tel:+4915146327317">
              <i className='bx bx-phone'></i>
              <span>+49 151 46327 317</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;