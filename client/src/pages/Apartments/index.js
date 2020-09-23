import React, { useEffect, useState } from 'react';

import { apartments } from '../../api';
import ApartPreview from '../../components/ApartPreview';
import { searchToObject } from '../../helpers';

import './style.scoped.css';


export default () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { data } = location.search
        ? await apartments.get(searchToObject(location.search))
        : await apartments.get();
      console.log(data, 'daat');
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container containerList">
      {
        data.page &&
        (data.page.map(item => <ApartPreview key={item._id} data={item}/>))
      }
    </div>
  );
};
