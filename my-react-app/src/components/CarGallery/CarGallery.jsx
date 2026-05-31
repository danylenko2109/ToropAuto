import { useMemo, useState } from 'react';
import { placeholderCarImage } from '../../data/cars';

function CarGallery({ images = [], title }) {
  const galleryImages = useMemo(() => (images.length > 0 ? images : [placeholderCarImage]), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  return (
    <section className="car-gallery" aria-label={`Галерея ${title}`}>
      <div className="car-gallery__main">
        <img src={activeImage} alt={`${title}, фото ${activeIndex + 1}`} />
      </div>
      <div className="car-gallery__thumbs">
        {galleryImages.map((image, index) => (
          <button
            className={index === activeIndex ? 'is-active' : ''}
            type="button"
            key={image}
            onClick={() => setActiveIndex(index)}
            aria-label={`Показать фото ${index + 1}`}
          >
            <img src={image} alt={`${title}, миниатюра ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default CarGallery;
