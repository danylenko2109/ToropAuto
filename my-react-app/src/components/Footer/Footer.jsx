import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand" to="/" aria-label="Torop Auto home">
            <span className="brand__mark">TA</span>
            <span className="brand__text">Torop <strong>Auto</strong></span>
          </Link>
          <p className="footer__text">Премиальный подбор, проверка и продажа автомобилей в Германии с прозрачной историей.</p>
        </div>
        <div>
          <h3>Навигация</h3>
          <Link to="/cars">Автомобили</Link>
          <a href="/#services">Услуги</a>
          <a href="/#contacts">Контакты</a>
        </div>
        <div>
          <h3>Контакты</h3>
          <a href="tel:+4915146327317">+49 151 46327 317</a>
          <a href="mailto:info@toropauto.de">info@toropauto.de</a>
          <a href="https://t.me/toropauto">Telegram</a>
        </div>
      </div>
      <div className="container footer__bottom">© 2026 Torop Auto. Все права защищены.</div>
    </footer>
  );
}

export default Footer;
