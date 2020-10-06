import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

import './style.css';

export default ({ itemsCountPerPage = 15, totalItemsCount = 100, onChange }) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={7}
        hideFirstLastPages={true}
        prevPageText="<"
        nextPageText=">"
        itemClass="itemClass"
        activeClass="activeClass"
        linkClass="linkClass"
        linkClassPrev="linkClassControllButton"
        linkClassNext="linkClassControllButton"
        onChange={page => {
          setActivePage(page);
          onChange(page);
        }}
      />
    </div>
  );
};
