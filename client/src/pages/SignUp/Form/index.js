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
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  console.log(errors, touched, errors.email);
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="formInput"
          name="name"
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          isInvalid={errors.name}
        />
        {
          errors.name &&
          (<ErrorLabel error={errors.name}/>)
        }
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="formInput"
          name="surname"
          type="text"
          placeholder="Фамилия"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.surname}
          isInvalid={errors.surname}
        />
        {
          errors.surname &&
          (<ErrorLabel error={errors.surname}/>)
        }
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="formInput"
          name="email"
          type="email"
          placeholder="Почта"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          isInvalid={errors.email}
        />
        {
          errors.email &&
          (<ErrorLabel error={errors.email}/>)
        }
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="formInput"
          name="phone"
          type="tel"
          placeholder="Телефон"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          isInvalid={errors.phone}
        />
        {
          errors.phone &&
          (<ErrorLabel error={errors.phone}/>)
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
      <Form.Group>
        <Form.Control
          className="formInput"
          name="passwordConfirmation"
          type="password"
          placeholder="Повторите пароль"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirmation}
          isInvalid={errors.passwordConfirmation}
        />
        {
          errors.passwordConfirmation &&
          (<ErrorLabel error={errors.passwordConfirmation}/>)
        }
      </Form.Group>
      <div className="formButtonWrapper">
        <Link
          to="sign-in"
          className="formLinkSignIn"
        >
          Вход
        </Link>
        <Button
          className="formButton"
          variant="danger"
          type="submit"
          disabled={isSubmitting}
        >
          Регистрация
        </Button>
      </div>
    </Form>
  );
};
