import React from "react";
import "./Map.css";
import map from "../../Img/Map.png";

export const Map = () => {
  return (
    <section className="map">
      <div className="map__box">
        <div className="map__box-lable">Expanding to a city near you.</div>
        <div className="map__box-text">
          Localli is growing every month to offer delivery to your customers in
          as little as 2-hours. As we expand, so do you.
        </div>
        <div className="map__container">
          <div className="map__container-now">Currently operating:</div>
          <div className="map__container-location">Los Angeles and Miami</div>
        </div>
      </div>
      <img src={map} alt="" className="map__img" />
    </section>
  );
};
