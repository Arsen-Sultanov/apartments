import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import { Dropdown } from 'react-bootstrap';

import './style.scoped.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

export default ({
  isSignIn = false
}) => {
  return (
    <div className="headerUser">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <HiUser className="headerUserIcon" onClick={() => setShow(!isShow)}/>
        </Dropdown.Toggle>

        {
          isSignIn ? (
            <Dropdown.Menu>
              <Link className="dropdown-item">
                Выход
              </Link>
              <Link className="dropdown-item">
                Настройки
              </Link>
            </Dropdown.Menu>
          )
            : (
              <Dropdown.Menu>
                <Link className="dropdown-item" to="./sign-up">
                  Регистрация
                </Link>
                <Link className="dropdown-item" to="./sign-in">
                  Авторизация
                </Link>
              </Dropdown.Menu>
            )
        }

      </Dropdown>
    </div>
  );
};
