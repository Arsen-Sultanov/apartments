import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const SideBarForm = ({
  values,
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
          name="costend"
          placeholder="До"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.costend}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="costend"
          placeholder="До"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.costend}
        />
      </Form.Group>

      <div className="formButtonWrapper">
        <Button
          className="formButton"
          variant="danger"
          type="submit"
          disabled={isSubmitting}
        >
          Найти
        </Button>
      </div>
    </Form>
  );
};


export default () => {
  const initiualValue = useState({
    coststart: '',
    costend: ''
  });

  const submitHandler = () => {};

  return (
    <Formik
      initialValues={initiualValue}
      onSubmit={submitHandler}
    >
      {(props) => (
        <SideBarForm {...props}/>
      )}

    </Formik>
  );
};
