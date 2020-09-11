import React from 'react';
import './style.scoped.css';
export default () => {
  return (
    <div className="appartsPreview">
      <div className="appartsPreviewImg">
      </div>
      <div className="appartsPreviewCost">
        <label>Ꝑ1000</label>
        <label className="appartsPreviewCostDay">/день</label>
      </div>
      <div className="appartsPreviewDesc">
        <h3 className="appartsPreviewDescTitle">Новыйпорт</h3>
        <label className="appartsPreviewDescSub">г.Москва ул.Ленина 100</label>
      </div>
    </div>
  );
};
