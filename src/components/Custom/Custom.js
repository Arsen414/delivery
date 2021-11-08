import React from 'react'
import "./Custom.css"
import rectangle from "../../Img/Rectangle.comp.png";

export const Custom = () => {
    return (
        <div className="custom">
        <div className="custom__container">
          <div className="custom__container-lable">
            Custom Branded Tracking Page.
          </div>
          <div className="custom__container-text">
            Customize your tracking page and create unique upsell experiences
            within one page to increase your retention rate. You can also track
            your sales generated from the tracking page in our beautiful
            dashboard.
          </div>
          <a className="custom__botton">
            <div href="" className="custom__botton-text">Request Beta</div>
          </a>
        </div>
        <img src={rectangle} alt="" className="custom__img" />
      </div>
    )
}
