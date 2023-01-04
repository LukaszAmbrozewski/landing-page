import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer__box">
      <div>
        <p className="footer__description">Developed by Łukasz Ambrożewski</p>
        <p className="footer__description">Designed By Figmaland</p>
      </div>
      <div className="footer__icon-box">
        <img
          className="footer__icon"
          src="./icons/facebook-logo.svg"
          alt="Facebook logo"
        />
        <img
          className="footer__icon"
          src="./icons/instagram-logo.svg"
          alt="Instagram logo"
        />
        <img
          className="footer__icon"
          src="./icons/twitter-logo.svg"
          alt="Twitter logo"
        />
        <img
          className="footer__icon"
          src="./icons/youtube-logo.svg"
          alt="Youtube logo"
        />
      </div>
    </div>
  );
};
