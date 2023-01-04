import React, {useEffect, useState} from "react";
import "./Header.scss";
import {ManinMenu} from "../MainMenu/MainMenu";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <nav
          className={
            !scrollPosition ? "header__box" : "header__box after-scroll__box"
          }
      >
        <h1
            className={
              !scrollPosition ? "header__logo" : "header__logo after-scroll__logo"
            }
        >
          Capgemen
        </h1>
        <ManinMenu scrollPosition={scrollPosition}/>
      </nav>
  );
};
