import React from 'react';
import './style.scoped.css';
export default ({ data: { _id, name, address, cost } }) => {
  return (
    <div className="appartsPreview">
      <div className="appartsPreviewImg">
      </div>
      <div className="appartsPreviewCost">
        <label>Ꝑ{cost}</label>
        <label className="appartsPreviewCostDay">/день</label>
      </div>
      <div className="appartsPreviewDesc">
        <h3 className="appartsPreviewDescTitle">{name}</h3>
        <label className="appartsPreviewDescSub">{address}</label>
      </div>
    </div>
  );
};
