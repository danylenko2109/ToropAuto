import { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { getCars } from '../../services/carsApi';

function CarsPage() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getCars().then((items) => {
      if (isMounted) {
        setCars(items);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="page page--catalog">
      <section className="container page-hero">
        <span className="eyebrow">Каталог Torop Auto</span>
        <h1>Автомобили в наличии</h1>
        <p>Выберите автомобиль, откройте галерею и изучите полные характеристики перед звонком или заявкой.</p>
      </section>

      <section className="container cars-grid cars-grid--catalog" aria-label="Список автомобилей">
        {isLoading && <div className="state-card">Загружаем автомобили...</div>}
        {!isLoading && cars.length === 0 && <div className="state-card">Сейчас автомобилей нет. Скоро добавим новые предложения.</div>}
        {!isLoading && cars.map((car) => <CarCard key={car.id} car={car} />)}
      </section>

      <div className="container">
        <ContactCTA title="Не нашли подходящий автомобиль?" text="Напишите нам — подберём вариант под ваш бюджет и требования." />
      </div>
    </main>
  );
}

export default CarsPage;
