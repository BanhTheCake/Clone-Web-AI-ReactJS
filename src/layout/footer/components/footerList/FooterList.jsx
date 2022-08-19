import React from "react";
import FooterItem from "../footerItem/FooterItem";
import logo from '../../../../assets/logo.svg'
import './_footerList.scss'

const FooterList = () => {
  return (
    <div className="footerList__container">
      <div className="footer__logo">
        <div className="img-wrapper">
          <img src={logo} alt="" />
        </div>
        <p>Crechterwoord K12 182 DK Alknjkcb,
All Rights Reserved</p>
      </div>
          <FooterItem />
          <FooterItem />
          <FooterItem />
          <FooterItem />
    </div>
  );
};

export default FooterList;
