import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CarGallery from '../../components/CarGallery/CarGallery';
import CarSpecs from '../../components/CarSpecs/CarSpecs';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { getCarById } from '../../services/carsApi';

function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getCarById(id).then((item) => {
      if (isMounted) {
        setCar(item);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <main className="page"><div className="container state-card">Загружаем автомобиль...</div></main>;
  }

  if (!car) {
    return (
      <main className="page">
        <section className="container not-found-card">
          <span className="eyebrow">404</span>
          <h1>Автомобиль не найден</h1>
          <p>Возможно, объявление уже снято с продажи или ссылка указана неверно.</p>
          <Link className="btn" to="/cars">Назад к автомобилям</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page car-details">
      <section className="container details-layout">
        <CarGallery images={car.images} title={car.title} />

        <aside className="details-panel">
          <Link className="back-link" to="/cars">← Назад к автомобилям</Link>
          <span className="eyebrow">{car.condition} · {car.location}</span>
          <h1>{car.title}</h1>
          <div className="details-panel__price">{car.price}</div>
          <p>{car.shortDescription}</p>
          <div className="details-panel__actions">
            <a className="btn" href="tel:+4915146327317">Позвонить</a>
            <a className="btn btn--ghost" href={`https://t.me/toropauto?text=${encodeURIComponent(`Здравствуйте! Интересует ${car.title}`)}`}>Написать в Telegram</a>
            <a className="btn btn--light" href={`mailto:info@toropauto.de?subject=${encodeURIComponent(`Заявка: ${car.title}`)}`}>Оставить заявку</a>
          </div>
        </aside>
      </section>

      <section className="container details-content">
        <div className="content-card">
          <h2>Характеристики</h2>
          <CarSpecs car={car} />
        </div>
        <div className="content-card">
          <h2>Описание</h2>
          <p>{car.description}</p>
        </div>
        <div className="content-card">
          <h2>Опции и комплектация</h2>
          <ul className="features-list">
            {car.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
      </section>

      <div className="container">
        <ContactCTA title={`Записаться на просмотр ${car.title}`} text="Свяжитесь с нами удобным способом — подготовим дополнительные фото, видео и историю автомобиля." />
      </div>
    </main>
  );
}

export default CarDetailsPage;
