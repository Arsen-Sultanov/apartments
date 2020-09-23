import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide2 from './page01_slide02.jpg';
import slide3 from './page01_slide03.jpg';

import {
  LeftControl,
  RightControl
} from './Controls';

import './styles.scoped.css';

export default (props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="sliderContainer">
      <Carousel
        indicators={false}
        activeIndex={index}
        onSelect={(index) => setIndex(index)}
        prevIcon={LeftControl}
        nextIcon={RightControl}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      { props.children }
    </div>
  );
};
