import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../../components/CarCard/CarCard';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { appData } from '../../data/appData';
import { getCars } from '../../services/carsApi';

function HomePage() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getCars().then((items) => {
      if (isMounted) {
        setCars(items.slice(0, 3));
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Премиальные автомобили в Германии</span>
            <h1>Torop Auto — автомобили, которым доверяют до первой встречи.</h1>
            <p>Подбираем, проверяем и продаём авто с честной историей, красивой подачей и понятным сопровождением сделки.</p>
            <div className="hero__actions">
              <Link className="btn" to="/cars">Смотреть автомобили</Link>
              <a className="btn btn--ghost" href="#services">Наши услуги</a>
            </div>
            <div className="hero__stats" aria-label="Преимущества в цифрах">
              <span><strong>120+</strong> проверенных авто</span>
              <span><strong>24 ч</strong> на первый подбор</span>
              <span><strong>4.9/5</strong> оценка клиентов</span>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=85" alt="" />
          </div>
        </div>
      </section>

      <section className="section section--cars">
        <div className="container section__heading">
          <span className="eyebrow">Каталог</span>
          <h2>Актуальные автомобили</h2>
          <p>Карточки готовы к данным из API: фото, характеристики, описание и комплектация приходят из единой структуры.</p>
        </div>
        <div className="container cars-grid">
          {isLoading ? <div className="state-card">Загружаем автомобили...</div> : cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
        <div className="container section__center">
          <Link className="btn btn--light" to="/cars">Перейти в каталог</Link>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container section__heading">
          <span className="eyebrow">Сервис</span>
          <h2>От первого запроса до ключей</h2>
        </div>
        <div className="container feature-grid">
          {appData.services.map((service) => (
            <article className="feature-card" key={service.title}>
              <span className="feature-card__icon">✦</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">Почему мы</span>
            <h2>Премиальная подача и строгая проверка каждого автомобиля.</h2>
            <p>Мы объединяем визуальный стандарт современного автосалона с практичной экспертизой: история, кузов, техника, документы и честная коммуникация.</p>
          </div>
          <div className="benefits-list">
            <span>✓ Только структурированные данные и галерея фото</span>
            <span>✓ Подготовка к интеграции Telegram-бота</span>
            <span>✓ Быстрые CTA для звонка, Telegram и заявки</span>
            <span>✓ Адаптивный интерфейс для мобильных клиентов</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section__heading">
          <span className="eyebrow">Отзывы</span>
          <h2>Клиенты ценят прозрачность</h2>
        </div>
        <div className="container testimonials-grid">
          {appData.testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div aria-label={`${item.rating} из 5`}>★★★★★</div>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <div className="container">
        <ContactCTA />
      </div>
    </>
  );
}

export default HomePage;
