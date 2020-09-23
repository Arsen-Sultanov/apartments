
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import User from './User';

import './style.scoped.css';

export default () => {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      pageYOffset > 5 ? setSrolled(true) : setSrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <header className={clsx({ header: true, header_fixed: scrolled })}>
      <div className="container hederContainer">
        <Link className="headerLogo" to='/'>
          <h1 className="headerLogoBrandName">КВАРТИРЫ</h1>
          <label className="headerLogoBrandSlogan">АРЕНДА КВАРТИР</label>
        </Link>
        <nav className="headerNav">
          <ul className="headerNavList">
            <li>
              <NavLink exact to='/' className="headerNavListItem" activeClassName='itemActive'>
                Главная
              </NavLink>
            </li>
            <li >
              <NavLink exact to='/about' className="headerNavListItem" activeClassName='itemActive'>О нас</NavLink>
            </li>
            <li>
              <NavLink exact to='/services' className="headerNavListItem" activeClassName='itemActive'>Услуги</NavLink>
            </li>
            <li>
              <NavLink exact to='/apartments' className="headerNavListItem" activeClassName='itemActive'>Квартиры</NavLink>
            </li>
            <li>
              <NavLink to='/contacts' className="headerNavListItem" activeClassName='itemActive'>Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <User/>
        </div>
      </div>
    </header>
  );
};
