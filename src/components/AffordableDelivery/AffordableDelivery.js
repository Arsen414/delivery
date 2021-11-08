import React from 'react'
import "./AffordableDelivery.css"
import delivery from "../../Img/Delivery.png"

export const AffordableDelivery = () => {
    return (
        <div className="delivery__time">
          <img src={delivery} alt="" className="delivery__time__img" />
        <div className="delivery__time__container">
          <div className="delivery__time__container-lable">
            Affordable delivery without the wait.
          </div>
          <div className="delivery__time__container-text">
            For the same price as most standard shipping options, it’s time to
            upgrade your customer purchasing experience and increase your
            conversion rates, today!
          </div>
        </div>
      </div>
    )
}
