import React from 'react';
import './style.scoped.css';
import { ImLocation, ImPhone, ImFacebook2, ImInstagram, ImTwitter } from 'react-icons/im';


export default () => {
  return (

    <footer className="footer">
      <div className="container containerScoped">
        <div className="footerLocation">
          <ImLocation className="footerLocationIcon" />
          we here
        </div>
        <a href="tel:+79788888888" className="footerPhone">
          <ImPhone className="footerPhoneIcon"/>
          +7 978 888-88-88
        </a>
        <div className="footerSocial">
          <ImFacebook2 className="footerSocialIcon"/>
          <ImInstagram className="footerSocialIcon"/>
          <ImTwitter className="footerSocialIcon"/>
        </div>
        <div className="footerCopyright">Аренда © 2020 Политика Конфиденциальности</div>
      </div>

    </footer>
  );
};
