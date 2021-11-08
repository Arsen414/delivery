import React from 'react'
import info from "../../Img/Info.png";
import "./Info.css"

export const Info = () => {
    return (
        <section className="info">
        <div className="info__lable">Introducing Localli</div>
        <div className="info__text">
          Localli operates a network of micro-fulfilment spaces across the
          country in major cities, down to your nearest neighborhood.
        </div>
        <img src={info} alt="" className="info__img" />
       
      </section>
    )
}
