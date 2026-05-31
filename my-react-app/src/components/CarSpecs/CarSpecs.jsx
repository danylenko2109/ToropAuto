const specLabels = [
  ['year', 'Год'],
  ['mileage', 'Пробег'],
  ['fuel', 'Топливо'],
  ['transmission', 'Коробка'],
  ['power', 'Мощность'],
  ['engine', 'Двигатель'],
  ['color', 'Цвет'],
  ['vin', 'VIN'],
  ['condition', 'Состояние'],
  ['location', 'Локация']
];

function CarSpecs({ car }) {
  return (
    <dl className="specs-grid">
      {specLabels.map(([key, label]) => (
        <div className="specs-grid__item" key={key}>
          <dt>{label}</dt>
          <dd>{car[key] || 'по запросу'}</dd>
        </div>
      ))}
    </dl>
  );
}

export default CarSpecs;
