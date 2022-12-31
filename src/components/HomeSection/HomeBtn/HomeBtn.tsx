import React from "react";
import "./HomeBtn.scss";

type MainBtnProps = {
  text: string;
  transparent?: boolean;
  onClick: () => void;
};

export const HomeBtn = ({text, transparent, onClick}: MainBtnProps) => {
  return (
      <button
          className={transparent ? "home-btn home-btn__transparent" : "home-btn"}
          onClick={onClick}
      >
        {text}
      </button>
  );
};
