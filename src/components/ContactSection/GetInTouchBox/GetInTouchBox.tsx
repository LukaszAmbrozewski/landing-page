import React from "react";
import "./GetInTouchBox.scss";
import { OneContactWay } from "../OneContactWay/OneContactWay";
import { useMediaQuery } from "react-responsive";

export const GetInTouchBox = () => {
  const smallScreen = useMediaQuery({ maxWidth: 500 });
  return (
    <div className="get-in-touch__box">
      <h2 className="get-in-touch__header">Get In Touch</h2>
      <p className="get-in-touch__description">
        Problems trying to resolve the conflict between{" "}
        {smallScreen ? null : <br />}
        the two major realms of Classical physics: Newtonian mechanics{" "}
      </p>
      <div className="get-in-touch__contact-ways">
        <OneContactWay
          icon="./icons/big-phone-icon.svg"
          firstEmail="georgia.young@example.com"
          secondEmail="georgia.young@ple.com"
          description="Get Support"
          btnText="Submit Request"
        />
        <OneContactWay
          icon="./icons/big-pin-icon.svg"
          firstEmail="georgia.young@example.com"
          secondEmail="georgia.young@ple.com"
          description="Get Support"
          btnText="Submit Request"
          isBlue={true}
        />
        <OneContactWay
          icon="./icons/big-nav-icon.svg"
          firstEmail="georgia.young@example.com"
          secondEmail="georgia.young@ple.com"
          description="Get Support"
          btnText="Submit Request"
        />
      </div>
    </div>
  );
};
