import React, { useState } from 'react';
import { Formik } from 'formik';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import SideBarForm from './SideBarForm';
import store from '../../store';
import './style.css';

const SideBar = observer(() => {
  const initiualValue = useState({
    address: '',
    roomsstart: '',
    roomsend: '',
    floorsstart: '',
    floorsend: '',
    coststart: '',
    costend: '',
    apartment: false,
    privatehouse: false
  });

  const submitHandler = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={clsx({ sideBar: true, sideBarOpen: store.isSideBarOpen })}>
      <Formik
        initialValues={initiualValue}
        onSubmit={submitHandler}
      >
        {(props) => (
          <SideBarForm {...props}/>
        )}

      </Formik>
    </div>
  );
});

export default SideBar;
