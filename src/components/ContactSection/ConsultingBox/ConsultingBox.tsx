import React from "react";
import "./ConsultingBox.scss";

export const ConsultingBox = () => {
  return (
    <div className="consulting__box">
      <div>
        <h2 className="consulting__header">
          Consulting Agency For Your Business
        </h2>
        <p className="consulting__description">
          the quick fox jumps over the lazy dog
        </p>
      </div>
      <button type="button" className="consulting__button">
        Contact Us
      </button>
    </div>
  );
};
