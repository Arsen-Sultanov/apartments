import React from 'react';
import { Formik } from 'formik';

import { sign } from '../../validation-schema';
import { user } from '../../api';
import {
  getFormElementsValue,
  friendlyValidetionResult
} from '../../helpers';

import Form from './Form';

import './style.css';

export default () => {
  const initiualValue = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: ''
  };

  const validate = (data) => {
    const validateResult = friendlyValidetionResult(sign
      .signUp
      .validate(data, { abortEarly: false }));

    return validateResult;
  };

  const submitHandler = async (values, { setSubmitting }) => {
    try {
      user.add(values);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container formWrap">
      <Formik
        initialValues={initiualValue}
        validate={validate}
        onSubmit={submitHandler}
      >
        {(props) => (
          <Form {...props}></Form>
        )}

      </Formik>

    </div>
  );
};
