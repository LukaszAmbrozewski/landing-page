import React from "react";
import "./OneContactWay.scss";

type OneContactWay = {
  icon: string;
  firstEmail: string;
  secondEmail: string;
  description: string;
  btnText: string;
  isBlue?: boolean;
  onClick?: () => void;
};

export const OneContactWay = ({
  icon,
  firstEmail,
  secondEmail,
  description,
  btnText,
  isBlue,
  onClick,
}: OneContactWay) => {
  return (
    <div
      className={
        isBlue
          ? "one-contact-way__box one-contact-way__box-blue"
          : "one-contact-way__box"
      }
    >
      <img
        src={icon}
        alt="Contact icon"
        className={
          isBlue
            ? "one-contact-way__icon one-contact-way__icon-blue"
            : "one-contact-way__icon"
        }
      />
      <p
        className={
          isBlue
            ? "one-contact-way__mail one-contact-way__mail-blue"
            : "one-contact-way__mail"
        }
      >
        {firstEmail}
      </p>
      <p
        className={
          isBlue
            ? "one-contact-way__mail one-contact-way__mail-blue"
            : "one-contact-way__mail"
        }
      >
        {secondEmail}
      </p>
      <p
        className={
          isBlue
            ? "one-contact-way__description one-contact-way__description-blue"
            : "one-contact-way__description"
        }
      >
        {description}
      </p>
      <button
        className={
          isBlue
            ? "one-contact-way__button one-contact-way__button-blue"
            : "one-contact-way__button"
        }
      >
        {btnText}
      </button>
    </div>
  );
};
