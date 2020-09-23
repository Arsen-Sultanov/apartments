import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './style.css';

const ErrorLabel = ({ error }) => {
  return (
    <label className="formError">
      {error}
    </label>
  );
};

export default ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form className="form" onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="emailOrPhone"
          placeholder="Почта или номер телефона"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.emailOrPhone}
          isInvalid={errors.emailOrPhone}
        />
        {
          (errors.emailOrPhone) &&
          (<ErrorLabel error={errors.emailOrPhone }/>)
        }
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          isInvalid={errors.password}
        />
        {
          errors.password &&
          (<ErrorLabel error={errors.password}/>)
        }
      </Form.Group>

      <div className="formButtonWrapper">
        <Link
          to="sign-up"
          className="formLinkSignIn"
        >
          Регистрация
        </Link>
        <Button
          className="formButton"
          variant="danger"
          type="submit"
          disabled={isSubmitting}
        >
          Войти
        </Button>
      </div>
    </Form>
  );
};
