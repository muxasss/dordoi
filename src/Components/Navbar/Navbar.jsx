import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Хук для отслеживания маршрута

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Закрытие меню при переходе на другую страницу
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav>
      <div className="nav-container">
        <img className="logo" src='dordoi-association-logo.png' alt="Logo" />
        
        {/* Кнопка для мобильного меню */}
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link className='menu-item' to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link className='menu-item' to="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link>
          <Link className='menu-item' to="/news" onClick={() => setIsMenuOpen(false)}>Новости</Link>
          <Link className='menu-item' to="/company" onClick={() => setIsMenuOpen(false)}>Вакансия</Link>
          <Link className='menu-item' to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
          <a className="menu-item" href="tel:+996312690590" onClick={() => setIsMenuOpen(false)}>+996 (312)-69-05-90</a>
          <a className="menu-item" target='_blank' href='mailto:dordois@mail.ru' onClick={() => setIsMenuOpen(false)}>dordois@mail.ru</a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
