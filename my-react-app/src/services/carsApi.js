import { cars } from '../data/cars';

const NETWORK_DELAY_MS = 250;

const delay = (ms) => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

const normalizeCar = (car) => ({
  ...car,
  images: Array.isArray(car.images) ? car.images : []
});

/**
 * Frontend data access layer for cars.
 *
 * Current mock flow: local data -> carsApi -> UI.
 * Future production flow: Telegram bot -> backend/database -> GET /api/cars -> carsApi -> UI.
 * TODO: replace mock imports with real backend endpoints when Telegram bot backend is ready.
 */
export async function getCars() {
  await delay(NETWORK_DELAY_MS);
  return cars.map(normalizeCar);
}

export async function getCarById(id) {
  const allCars = await getCars();
  return allCars.find((car) => car.id === id) ?? null;
}
