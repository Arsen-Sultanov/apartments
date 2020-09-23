import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { objectToSearch } from '../../../helpers';

import './style.css';

const SearchForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form className="searchForm" onSubmit={handleSubmit}>

      <Form.Control
        name="address"
        type="text"
        placeholder="Адрес"
        className="searchFormInput"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.address}
      />


      <Form.Control
        name="rooms"
        type="text"
        placeholder="Колличество комнат"
        className="searchFormInput"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rooms}
      />

      <Form.Control
        name="coststart"
        type="text"
        placeholder="Цена от"
        className="searchFormInput"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.coststart}
      />

      <Form.Control
        name="costend"
        type="text"
        placeholder="Цена до"
        className="searchFormInput"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.costend}
      />

      <Button
        className="searchFormButton"
        variant="danger"
        type="submit"
        disabled={isSubmitting}
      >
        Найти
      </Button>
    </Form>
  );
};


export default () => {
  const initiualValue = {
    address: '',
    rooms: '',
    coststart: '',
    costend: ''
  };

  const history = useHistory();

  const submitHandler = (values, { setSubmitting }) => {
    history.push(`/apartments?${objectToSearch(values)}`);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initiualValue}
      onSubmit={submitHandler}
    >
      {(props) => (
        <SearchForm {...props}/>
      )}
    </Formik>
  );
};
