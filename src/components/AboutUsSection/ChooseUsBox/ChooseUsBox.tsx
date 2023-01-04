import React from "react";
import "./ChooseUsBox.scss";
import { ServiceBox } from "../ServiceBox/ServiceBox";

export const ChooseUsBox = () => {
  return (
    <div className="choose-us__box">
      <h1 className="choose-us__header">WHY CHOOSE US</h1>
      <h2 className="choose-us__description">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </h2>
      <div className="choose-us__services-box">
        <ServiceBox
          icon="./icons/business-growing-icon.svg"
          text="Business Growing"
        />
        <ServiceBox
          icon="./icons/digital-marketing-icon.svg"
          text="Digital Marketing"
          isBlue={true}
        />
        <ServiceBox
          icon="./icons/business-book-icon.svg"
          text="National top 50 firms"
        />
      </div>
    </div>
  );
};
