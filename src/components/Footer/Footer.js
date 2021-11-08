import React from "react";
import "./Footer.css";
import logo from "../../Img/Logo.png";
export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img src={logo} alt={logo} className="footer__logo-img" />
        <div className="footer__logo-text">
          Same-day fullfilment & delivery for Shopify brands.
        </div>
        <div className="footer__logo-ps">© 2021 Localli LLC</div>
      </div>
      <div className="footer__info-box">
        {" "}
        <div className="footer__box">
          <div className="footer__box-lable">Links</div>
          <div className="footer__box-text">How it works</div>
          <div className="footer__box-text">Pricing</div>
          <div className="footer__box-text">Sign up</div>
        </div>
        <div className="footer__box">
          <div className="footer__box-lable">Resources</div>
          <div className="footer__box-text">FAQ’s</div>
          <div className="footer__box-text">Help Center</div>
          <div className="footer__box-text">Blog</div>
        </div>
        <div className="footer__box-up">
          <div className="footer__box-lable">Company</div>
          <div className="footer__box-text">About us</div>
          <div className="footer__box-text">Privacy policy</div>
          <div className="footer__box-text">Terms of use</div>
          <div className="footer__box-text">Get in touch</div>
        </div>
      </div>
    </section>
  );
};
