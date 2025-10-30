import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import '../../styles/global';

const Stats = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const stats = [
    {
      icon: 'bx bxs-car',
      count: 10,
      textKey: 'stat1'
    },
    {
      icon: 'bx bxs-user-check',
      count: 200,
      textKey: 'stat2'
    },
    {
      icon: 'bx bxs-wrench',
      count: 170,
      textKey: 'stat3'
    },
    {
      icon: 'bx bxs-award',
      count: 13,
      textKey: 'stat4'
    }
  ];

  return (
    <section className="stats" id="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-number" data-count={stat.count}>0</div>
              <div className="stat-text">{t(stat.textKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;