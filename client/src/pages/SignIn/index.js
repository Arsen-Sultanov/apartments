import React from 'react';
import { Formik } from 'formik';

import { sign } from '../../validation-schema';
import {
  friendlyValidetionResult
} from '../../helpers';

import Form from './Form';

import './style.css';

export default () => {
  const initiualValue = {
    emailOrPhone: '',
    password: ''
  };

  const validate = (data) => {
    const signInSchema = sign.signIn;
    const validateResult = friendlyValidetionResult(signInSchema.validate(data, { abortEarly: false }));
    return validateResult;
  };

  const submitHandler = (values, { setSubmitting }) => {
    setSubmitting(false);
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
