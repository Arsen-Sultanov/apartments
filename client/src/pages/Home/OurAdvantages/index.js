import React, { useEffect, useState, useRef, useReducer } from 'react';

import './style.scoped.css';

import videoMp4 from './video-bg.mp4';
import videoOgv from './video-bg.ogv';
import videoWebm from './video-bg.webm';

const Achiev = ({ isShow, endValue, sub }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(value === endValue);
      if (!(value === endValue)) {
        setValue(prev => prev + 1);
      }
    });
    return () => clearInterval(intervalId);
  }, [isShow, value]);

  return (
    <div className="achievItem">
      <div className="achievItemShape">
        {value}
      </div>
      <div className="achievItemSub">
        {sub}
      </div>
    </div>
  );
};


export default () => {
  const ourAdvantages = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const ourAdvantagesYPosition = ourAdvantages.current.getBoundingClientRect().top;

    window.onscroll = () => {
      if (pageYOffset >= ourAdvantagesYPosition) {
        setIsShow(true);
      }
    };

    return () => { window.onscroll = null; };
  }, []);


  return (
    <section className="ourAdvantages" ref={ourAdvantages}>
      <video autoPlay loop className="ourAdvantagesVideo">
        <source src={videoMp4}/>
        <source src={videoOgv}/>
        <source src={videoWebm}/>
      </video>
      <div className="container">
        <div className="ourAdvantagesContent">
          <h3 className="ourAdvantagesContentTitle">
            Наши преимущества
          </h3>
          <div className="ourAdvantagesContentAchievs">
            <Achiev
              isShow={isShow}
              endValue={33}
              sub="New apartments every day"
            />
            <Achiev
              isShow={isShow}
              endValue={11}
              sub="New apartments every day"
            />
            <Achiev
              isShow={isShow}
              endValue={60}
              sub="New apartments every day"
            />
            <Achiev
              isShow={isShow}
              endValue={70}
              sub="New apartments every day"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
