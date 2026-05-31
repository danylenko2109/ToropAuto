import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Torop Auto home">
          <span className="brand__mark">TA</span>
          <span className="brand__text">Torop <strong>Auto</strong></span>
        </Link>

        <button
          className="header__toggle"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`} aria-label="Основная навигация">
          <NavLink to="/" onClick={closeMenu}>Главная</NavLink>
          <NavLink to="/cars" onClick={closeMenu}>Автомобили</NavLink>
          <a href="/#services" onClick={closeMenu}>Услуги</a>
          <a href="/#contacts" onClick={closeMenu}>Контакты</a>
          <Link className="btn btn--small" to="/cars" onClick={closeMenu}>Подобрать автомобиль</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
