import React from "react";
import "./PartnersBox.scss";

export const PartnersBox = () => {
  return (
    <div className="partners-box__box">
      <div className="partners-box__one-group">
        <img
          className="partners-box__image"
          src="./icons/hooli-logo.svg"
          alt="Hooli company banner"
        />
        <img
          className="partners-box__image"
          src="./icons/lyft-logo.svg"
          alt="Lyft company banner"
        />
        <img
          className="partners-box__image"
          src="./icons/leaf-logo.svg"
          alt="Leaf company banner"
        />
      </div>
      <div className="partners-box__one-group">
        <img
          className="partners-box__image"
          src="./icons/stripe-logo.svg"
          alt="Stripe company banner"
        />
        <img
          className="partners-box__image"
          src="./icons/avs-logo.svg"
          alt="Amazon Web Services banner"
        />
        <img
          className="partners-box__image"
          src="./icons/reddit-logo.svg"
          alt="Reddit banner"
        />
      </div>
    </div>
  );
};
