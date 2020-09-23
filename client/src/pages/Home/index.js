import React, { useEffect, useState } from 'react';

import ApartPreview from '../../components/ApartPreview';

import OurAdvantages from './OurAdvantages';
import SearchForm from './SearchForm';
import Slider from './Slider';


import { apartments } from '../../api';

import './style.scoped.css';

export default () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { data } = await apartments.get({
        limit: 6
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Slider>
        <div className="overSlider">
          <h3 className="overSliderTitle">
            У НАСС САМЫЙ ЛУЧШИЙ ВЫБОР
          </h3>
          <SearchForm/>
        </div>
      </Slider>
      <section className="container">
        <div className="recomendedApartments">
          <div className="recomendedApartmentsTitle">
            <h3 className="recomendedApartmentsTitleRef">
              Рекомендуемые апартаменты
            </h3>
          </div>
          <div className="recomendedApartmentsList">
            {
              data.page &&
                (data.page.map(item => <ApartPreview key={item._id} data={item}/>))
            }
          </div>
        </div>
      </section>
      <OurAdvantages/>
      <section className="container"></section>
    </>
  );
};
