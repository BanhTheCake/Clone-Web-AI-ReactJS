import React from "react";
import './_features.scss'

const Features = ({ title, desc, direction }) => {
  return <>
    <div className={`features__container ${direction}`}>
      <div className="features__title">
        <div />
        <p>{title}</p>
      </div>
      <div className="features__desc">
        <p>{desc}</p>
      </div>
    </div>
  </>;
};

export default Features;
