import React from "react";
import "./MoreAboutUsBox.scss";
import ReactPlayer from "react-player";
import { OneField } from "../OneField/OneField";
import { useMediaQuery } from "react-responsive";

export const MoreAboutUsBox = () => {
  const smallPlayer = useMediaQuery({ maxWidth: 650 });

  return (
    <div className="more-about-us__box">
      <h2 className="more-about-us__header">
        We are providing best business service.
      </h2>
      <p className="more-about-us__description">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics.
      </p>
      <div className="more-about-us__second-box">
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BcIsUfUew2c"
            width={smallPlayer ? "90vw" : "597px"}
            height="442px"
            controls={true}
          />
        </div>
        <div className="more-about-us__field-box">
          <h2 className="more-about-us__field-header">
            Most trusted in our field
          </h2>
          <p className="more-about-us__field-description">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <OneField
            desc="the quick fox jumps over the lazy dog "
            icon="./icons/people-icon.svg"
            title="Things on a very small scale ... "
          />
          <OneField
            desc="the quick fox jumps over the lazy dog "
            icon="./icons/speed-icon.svg"
            title="Things on a very small scale ..."
          />
        </div>
      </div>
    </div>
  );
};
