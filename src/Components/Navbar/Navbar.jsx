import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <img src='dordoi-association-logo.png' />
            <Link className='menu' to="/">Главная</Link>
            <Link className='menu' to="/about">О нас</Link>
            <Link className='menu' to="/company">Дочерние компании</Link>
            <Link className='menu' to="/news">Новости</Link>
            <Link className='menu' to="/contacts">Контакты</Link>
            <a>+996 (312)-69-05-90</a>
            <a target='blank' className='menu' href='http://www.dordois@mail.ru/'>dordois@mail.ru</a>
        </ul>
    </nav>
  )
}

export default Navbar