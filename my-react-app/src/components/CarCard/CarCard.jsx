import { Link } from 'react-router-dom';
import { placeholderCarImage } from '../../data/cars';

function CarCard({ car }) {
  const image = car.images?.[0] || placeholderCarImage;

  return (
    <article className="car-card">
      <Link className="car-card__image-link" to={`/cars/${car.id}`} aria-label={`Открыть ${car.title}`}>
        <img src={image} alt={car.title} loading="lazy" />
        <span className="car-card__badge">{car.condition}</span>
      </Link>
      <div className="car-card__body">
        <div className="car-card__topline">
          <span>{car.year}</span>
          <span>{car.mileage}</span>
        </div>
        <h3><Link to={`/cars/${car.id}`}>{car.title}</Link></h3>
        <p>{car.shortDescription}</p>
        <div className="car-card__specs" aria-label="Краткие характеристики">
          <span>{car.fuel}</span>
          <span>{car.transmission}</span>
          <span>{car.engine}</span>
        </div>
        <div className="car-card__footer">
          <strong>{car.price}</strong>
          <Link className="btn btn--ghost" to={`/cars/${car.id}`}>Подробнее</Link>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
