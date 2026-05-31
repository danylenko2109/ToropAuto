import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="page">
      <section className="container not-found-card">
        <span className="eyebrow">404</span>
        <h1>Страница не найдена</h1>
        <p>Вернитесь на главную или посмотрите актуальные автомобили Torop Auto.</p>
        <div className="hero__actions">
          <Link className="btn" to="/">На главную</Link>
          <Link className="btn btn--ghost" to="/cars">К автомобилям</Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
