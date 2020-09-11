import React from 'react';
import clsx from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './style.scoped.css';

export const LeftControl = (() => {
  return (
    <div className="control leftControl">
      <IoIosArrowBack className="leftControlIcon"/>
    </div>
  );
})();

export const RightControl = (() => {
  return (
    <div className="control rightControl">
      <IoIosArrowForward className="rightControlIcon"/>
    </div>
  );
})();
