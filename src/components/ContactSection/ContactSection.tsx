import React from "react";
import "../../style/main.scss";
import { GetInTouchBox } from "./GetInTouchBox/GetInTouchBox";
import { ConsultingBox } from "./ConsultingBox/ConsultingBox";

export const ContactSection = () => {
  return (
    <div className="contact-section">
      <GetInTouchBox />
      <ConsultingBox />
    </div>
  );
};
