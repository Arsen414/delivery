import React from "react";
import "./GetStarted.css";
import way from "../../Img/Way.png";

export const GetStarted = () => {
  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__container-lable">Request a beta</div>
        <div className="get-started__container-text">
          Get started with Localli today.
        </div>
        <div className="get-started__container-info">
          Localli is growing every month to offer delivery to your customers in
          as little as 2-hours. As we expand, so do you.
        </div>
        <div className="get-started__botton">Request Beta</div>
      </div>
      <div className="get-started__img">
        <img src={way} alt="" className="way__img" />
      </div>
    </section>
  );
};
