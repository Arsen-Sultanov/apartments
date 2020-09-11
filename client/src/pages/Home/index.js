import React from 'react';
import Slider from '../../components/Slider';
import AppartsPreview from '../../components/AppartsPreview';

import OurAdvantages from './OurAdvantages';

import './style.scoped.css';


export default () => {
  return (
    <>
      <Slider/>
      <section className="container">
        <div className="recomendedApartments">
          <div className="recomendedApartmentsTitle">
            <h3 className="recomendedApartmentsTitleRef">
              Рекомендуемые апартаменты
            </h3>
          </div>
          <div className="recomendedApartmentsList">
            { new Array(9).fill(<AppartsPreview/>) }
          </div>
        </div>
      </section>
      <OurAdvantages/>
      <section className="container"></section>
    </>
  );
};
