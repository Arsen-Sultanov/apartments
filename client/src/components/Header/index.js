
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';
import User from './User';
import store from '../../store';

import './style.scoped.css';

export default () => {
  return (
    <header className="header">
      <div className="container hederContainer">
        <Link className="headerLogo" to='/'>
          <h1 className="headerLogoBrandName">КВАРТИРЫ</h1>
          <label className="headerLogoBrandSlogan">АРЕНДА КВАРТИР</label>
        </Link>
        <nav className="headerNav">
          <ul className="headerNavList">
            <li>
              <NavLink
                to='/'
                className="headerNavListItem"
                activeClassName='itemActive'
              >
                Главная
              </NavLink>
            </li>
            <li >
              <NavLink
                to='/about'
                className="headerNavListItem"
                activeClassName='itemActive'
              >
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/services'
                className="headerNavListItem"
                activeClassName='itemActive'
              >
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/apartments'
                className="headerNavListItem"
                activeClassName='itemActive'
              >
                Квартиры
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contacts'
                className="headerNavListItem"
                activeClassName='itemActive'
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="iconWrap">
          <User/>
          <SearchIcon className="iconSearch" onClick={() => store.setIsSideBarOpen()}/>
        </div>
      </div>
    </header>
  );
};
