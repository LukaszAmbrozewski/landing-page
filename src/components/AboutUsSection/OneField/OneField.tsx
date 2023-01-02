import React from "react";
import "./OneField.scss";

type OneFieldProps = {
  icon: string;
  title: string;
  desc: string;
};

export const OneField = ({ icon, title, desc }: OneFieldProps) => {
  return (
    <div className="one-field__box">
      <img src={icon} alt="Field icon" />
      <div>
        <h3 className="one-field__title">{title}</h3>
        <p className="one-field__description">{desc}</p>
      </div>
    </div>
  );
};
