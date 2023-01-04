import React from "react";
import "./OneAdvice.scss";

type OneAdviceProps = {
  header: string;
  description: string;
  image: string;
};

export const OneAdvice = ({ header, description, image }: OneAdviceProps) => {
  return (
    <div className="one-advice__box">
      <h3 className="one-advice__header">{header}</h3>
      <p className="one-advice__description">{description}</p>
      <img src={image} alt="Advice image" className="one-advice__image" />
    </div>
  );
};
