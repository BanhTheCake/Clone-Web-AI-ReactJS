import React from "react";
import './_logo.scss'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Logo = () => {
  return (
    <div className="logo__container">
      <div className="img-wrapper">
        <img src={google} alt="" />
      </div>
      <div className="img-wrapper">
        <img src={slack} alt="" />
      </div>
      <div className="img-wrapper">
        <img src={atlassian} alt="" />
      </div>
      <div className="img-wrapper">
        <img src={dropbox} alt="" />
      </div>
      <div className="img-wrapper">
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Logo;
