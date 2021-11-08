import React from "react";
import rectangleImg from "../../Img/Rectangle.img.png";
import rectangleImege from "../../Img/Rectangle.imege.png";
import rectangle from "../../Img/Rectangle.png";
import "./Delivery.css"

export const Delivery = () => {
  return (
    <section className="delivery">

      <div className="delivery__lable">How it works</div>
      <div className="delivery__text">Same-day delivery in 3-simple steps.</div>
      <div className="delivery__container">
        <div className="delivery__container-component">
          <img src={rectangle} alt="" className="rectangle__img" />
          <div className="delivery__container-lable">
            1. Connect & send inventory
          </div>
          <div className="delivery__container-text">
            Install our app and connect your store. Import your products and
            send your inventory to any of our facilities or your most popular
            delivered city.
          </div>
        </div>
        <div className="delivery__container-component">
          <img src={rectangleImg} alt="" className="rectangle__img" />
          <div className="delivery__container-lable">2. We sort and store</div>
          <div className="delivery__container-text">
            Our team will sort and store your inventory at our micro-fulfilment
            centers positioned conveniently near your customers.
          </div>
        </div>
        <div className="delivery__container-component">
          <img src={rectangleImege} alt="" className="rectangle__img" />
          <div className="delivery__container-lable">
            3. Shipped & delivered within hours{" "}
          </div>
          <div className="delivery__container-text">
            Once an order is placed, we pack and send your order out using local
            courier partners. All tracked conveniently through your custom
            tracking page.
          </div>
        </div>
      </div>
 
    </section>
  );
};
