import React from "react";
import "./Question.css";
import vector from "../../Img/Vector.png";

export const Question = () => {
  return (
    <section className="question">
      <div className="question__container">
        <div className="question__container-lable">FAQ’s</div>
        <div className="question__container-text">
          Frequently asked questions.
        </div>
      </div>
      <div className="questions__list">
        <div className="questions__item">
          <div className="question__list-text">
            How fast is same-day delivery?
          </div>
          <img src={vector} alt="" className="vector__img" />
        </div>
        <div className="questions__item">
          <div className="question__list-text">
            Is it expensive to offer same-day delivery?
          </div>
          <img src={vector} alt="" className="vector__img" />
        </div>{" "}
        <div className="questions__item">
          <div className="question__list-text">
            Where are these fulfilment centers located?
          </div>
          <img src={vector} alt="" className="vector__img" />
        </div>{" "}
        <div className="questions__item">
          <div className="question__list-text">
            How will customers be able to choose this delivery option?
          </div>
          <img src={vector} alt="" className="vector__img" />
        </div>
        <div className="questions__item">
          <div className="question__list-text">How can I get Localli?</div>
          <img src={vector} alt="" className="vector__img" />
        </div>
      </div>
    </section>
  );
};
