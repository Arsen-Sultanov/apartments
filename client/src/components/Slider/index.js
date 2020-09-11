import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { LeftControl, RightControl } from './Controls';
import slide from './page01_slide03.jpg';


export default () => {
  const [index, setIndex] = useState(0);

  return (
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
          src={slide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
