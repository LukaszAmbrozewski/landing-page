import React from "react";
import "../../style/main.scss";
import { PracticeAdviceBox } from "./PracticeAdviceBox/PracticeAdviceBox";
import { PartnersBox } from "./PartnersBox/PartnersBox";
import { NewsletterBox } from "./NewsletterBox/NewsletterBox";

export const AdviceSection = () => {
  return (
    <div className="advice-section">
      <PracticeAdviceBox />
      <PartnersBox />
      <NewsletterBox />
    </div>
  );
};
