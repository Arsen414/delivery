import React from "react";
import "./Main.css";
import birdie from "../../Img/Birdie.png";
import courier from "../../Img/Courier.png";

export const Main = () => {
  return (
    <section className="intro">
      <div className="intro__section ">
        <div className="intro__label">Introducing Localli</div>
        <div className="intro__text">Same-day Delivery for Shopify Brands.</div>
        <div className="intro__info">
          Localli is a fulfilment & delivery service that allows you to offer a
          same-day delivery experience for your customers conveniently from
          their checkout page.
        </div>
        <div className="intro__button">
          <a className="intro__button-up">Request Beta</a>{" "}
          <a className="intro__button-a">How it works</a>
        </div>
        <div className="advantage">
          <div className="advantage__box">
            <img src={birdie} alt="" className="advantage__birdie" />
            Increase your store conversions
          </div>
          <div className="advantage__box">
            <img src={birdie} alt="" className="advantage__birdie" />
            Offer an Amazon like delivery experience
          </div>
          <div className="advantage__box">
            <img src={birdie} alt="" className="advantage__birdie" />
            Reduce your abandoned carts
          </div>
        </div>
        <img src={courier} alt="" className="courier" />
      </div>
    </section>
  );
};
