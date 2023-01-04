import React from "react";
import "./InfoBox.scss";

export const InfoBox = () => {
  return (
    <div className="info__box">
      <div className="info__group">
        <div className="info__one">
          <h2 className="info__header">Company Info</h2>
          <a className="info__link">About Us</a>
          <a className="info__link">Carrier</a>
          <a className="info__link">We are hiring</a>
          <a className="info__link">Blog</a>
        </div>
        <div className="info__one">
          <h2 className="info__header">Legal</h2>
          <a className="info__link">About Us</a>
          <a className="info__link">Carrier</a>
          <a className="info__link">We are hiring</a>
          <a className="info__link">Blog</a>
        </div>
        <div className="info__one">
          <h2 className="info__header">Features</h2>
          <a className="info__link">Business Marketing</a>
          <a className="info__link">User Analytic</a>
          <a className="info__link">Live Chat</a>
          <a className="info__link">Unlimited Support</a>
        </div>
      </div>
      <div className="info__group">
        <div className="info__one">
          <h2 className="info__header">Resources</h2>
          <a className="info__link">IOS & Android</a>
          <a className="info__link">Watch a Demo</a>
          <a className="info__link">Customers</a>
          <a className="info__link">API</a>
        </div>
        <div className="info__one">
          <h2 className="info__header">Get In Touch</h2>
          <a className="info__link info__contact-link">
            <img
              src="./icons/phone-icon.svg"
              alt="Contact phone icon"
              className="info__icon"
            />
            (480) 555-0103
          </a>
          <a className="info__link info__contact-link">
            <img
              src="./icons/pin-icon.svg"
              alt="Location icon"
              className="info__icon"
            />
            4517 Washington Ave. Manchester, Kentucky 39495
          </a>
          <a className="info__link info__contact-link">
            <img
              src="./icons/nav-icon.svg"
              alt="Contact email icon"
              className="info__icon"
            />
            debra.holt@example.com
          </a>
        </div>
      </div>
    </div>
  );
};
