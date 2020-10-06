import React, { useEffect, useState } from 'react';

import Pagination from './Pagination';

import { apartments } from '../../api';
import ApartPreview from '../../components/ApartPreview';
import { searchToObject } from '../../helpers';

import './style.scoped.css';


const Apartments = () => {
  const [data, setData] = useState({});

  const getData = async params => {
    try {
      const { data } = await apartments.get(params);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const paginationHandler = async page => {
    try {
      const skip = (page - 1) * 15;
      const data = location.search
        ? await getData({ ...searchToObject(location.search), skip })
        : await getData();

      window.scrollTo({ top: 0, behavior: 'smooth' });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = location.search
          ? await getData(searchToObject(location.search))
          : await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="container apartmentsContainer">

      <div className="containerList">
        {
          data.page &&
          (data.page.map(item => <ApartPreview key={item._id} data={item}/>))
        }
        <div className="paginationContainer">
          <Pagination
            onChange={paginationHandler}
            totalItemsCount={data.totalItemsCount}
          />
        </div>
      </div>

    </div>
  );
};

export default Apartments;
