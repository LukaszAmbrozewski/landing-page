import React from "react";
import { ChooseUsBox } from "./ChooseUsBox/ChooseUsBox";
import "../../style/main.scss";
import { MoreAboutUsBox } from "./MoreAboutUsBox/MoreAboutUsBox";

export const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <ChooseUsBox />
      <MoreAboutUsBox />
    </div>
  );
};
