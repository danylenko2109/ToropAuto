export const cars = [
  {
    id: 'bmw-330i-2019',
    title: 'BMW 330i Limousine (G20)',
    price: '€35.900',
    year: 2019,
    mileage: '82 000 км',
    fuel: 'Benzin',
    transmission: 'Automatik',
    engine: '2.0 л TwinPower Turbo',
    power: '258 л.с.',
    color: 'Schwarz Metallic',
    condition: 'Sehr gut',
    location: 'Deutschland, NRW',
    vin: '',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1400&q=85'
    ],
    shortDescription: 'Динамичный седан бизнес-класса с богатой комплектацией, прозрачной историей и готовностью к регистрации.',
    description: 'BMW 330i G20 — премиальный седан для тех, кто ценит точное управление, комфорт и технологичность. Автомобиль проходит комплексную проверку Torop Auto, имеет чистый салон, ухоженный кузов и готов к детальному осмотру. Подходит для ежедневных поездок по Германии и дальних маршрутов по Европе.',
    features: ['Кожаный спортивный салон', 'Профессиональная навигация BMW', 'Камера заднего вида', 'Подогрев сидений', 'LED-оптика', 'Адаптивный круиз-контроль'],
    createdAt: '2026-05-31',
    source: 'telegram'
  },
  {
    id: 'hyundai-i30-2020',
    title: 'Hyundai i30 1.6 CRDi Automatik',
    price: '€18.500',
    year: 2020,
    mileage: '64 500 км',
    fuel: 'Diesel',
    transmission: 'Automatik',
    engine: '1.6 л CRDi',
    power: '136 л.с.',
    color: 'Polar White',
    condition: 'Отличное',
    location: 'Deutschland, Düsseldorf',
    vin: 'по запросу',
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'
    ],
    shortDescription: 'Экономичный хэтчбек с автоматической коробкой, низким расходом и практичной комплектацией для города.',
    description: 'Hyundai i30 — практичный автомобиль с современными системами безопасности, экономичным дизельным двигателем и удобной автоматической коробкой. Машина проверена по ключевым техническим узлам и готова к передаче новому владельцу.',
    features: ['Apple CarPlay / Android Auto', 'Камера заднего вида', 'Двухзонный климат-контроль', 'Парктроники', 'Подогрев руля', 'Ассистент удержания полосы'],
    createdAt: '2026-05-31',
    source: 'telegram'
  },
  {
    id: 'ford-b-max-2013',
    title: 'Ford B-Max 1.0 EcoBoost',
    price: '€8.900',
    year: 2013,
    mileage: '118 000 км',
    fuel: 'Benzin',
    transmission: 'Manuell',
    engine: '1.0 л EcoBoost',
    power: '100 л.с.',
    color: 'Deep Impact Blue',
    condition: 'Хорошее',
    location: 'Deutschland, Köln',
    vin: '',
    images: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85'
    ],
    shortDescription: 'Компактный семейный автомобиль с удобной посадкой, сдвижными дверями и доступной стоимостью владения.',
    description: 'Ford B-Max — удобный городской минивэн с высокой посадкой, просторным салоном и экономичным бензиновым мотором. Хороший вариант для семьи, начинающего водителя или второго автомобиля в доме.',
    features: ['Сдвижные задние двери', 'Кондиционер', 'Bluetooth', 'Isofix', 'Электростеклоподъёмники', 'Сервисная история'],
    createdAt: '2026-05-31',
    source: 'telegram'
  }
];

export const placeholderCarImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop stop-color="%23081318"/%3E%3Cstop offset="1" stop-color="%23124d5f"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="760" fill="url(%23g)"/%3E%3Cpath d="M252 485h696l-65-150c-19-43-61-71-108-71H431c-47 0-90 28-108 71l-71 150Z" fill="%23152932" stroke="%234cc0e7" stroke-width="10"/%3E%3Ccircle cx="395" cy="510" r="58" fill="%23040a0d" stroke="%234cc0e7" stroke-width="12"/%3E%3Ccircle cx="805" cy="510" r="58" fill="%23040a0d" stroke="%234cc0e7" stroke-width="12"/%3E%3Cpath d="M452 300h286c36 0 69 22 82 56l25 63H357l28-64c12-33 39-55 67-55Z" fill="%2309141a"/%3E%3Ctext x="600" y="640" text-anchor="middle" fill="%23ffffff" font-family="Arial" font-size="54" font-weight="700"%3ETorop Auto%3C/text%3E%3Ctext x="600" y="700" text-anchor="middle" fill="%234cc0e7" font-family="Arial" font-size="28"%3EФото скоро появятся%3C/text%3E%3C/svg%3E';
