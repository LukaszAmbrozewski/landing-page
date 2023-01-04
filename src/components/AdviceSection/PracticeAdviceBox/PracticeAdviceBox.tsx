import React from "react";
import "./PracticeAdviceBox.scss";
import { OneAdvice } from "../OneAdvice/OneAdvice";
import { useMediaQuery } from "react-responsive";

export const PracticeAdviceBox = () => {
  const smallScreen = useMediaQuery({ maxWidth: 500 });
  return (
    <div>
      <h2 className="practice-advice__header">Practice Advice</h2>
      <p className="practice-advice__description">
        Problems trying to resolve the conflict between{" "}
        {!smallScreen ? <br /> : null}
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="practice-advice__advices-box">
        <div className="practice-advice__couple">
          <OneAdvice
            header="A single source of truth"
            description="Newton thought that light was made up of particles, but then it was discovered "
            image="./images/first-advice-photo.svg"
          />
          <OneAdvice
            header="Fastest way to organize"
            description="“Quantum mechanics” is the description of the behaviour of matter"
            image="./images/second-advice-photo.svg"
          />
        </div>
        <div className="practice-advice__couple">
          <OneAdvice
            header="Fastest way to take action"
            description="They describe a universe consisting of bodies moving"
            image="./images/third-advice-photo.svg"
          />
          <OneAdvice
            header="Work better together"
            description="They finally obtained a consistent description of the behaviour "
            image="./images/fourth-advice-photo.svg"
          />
        </div>
      </div>
    </div>
  );
};
