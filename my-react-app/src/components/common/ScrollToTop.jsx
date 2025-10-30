import React, { useState, useEffect } from 'react';
import '../../styles/global';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`scroll-to-top ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className='bx bx-chevron-up'></i>
    </div>
  );
};

export default ScrollToTop;