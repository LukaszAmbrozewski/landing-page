import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import "../MainMenu.scss";

export const HiddenMenu = () => {
  const [openHiddenMenu, setOpenHiddenMenu] = useState<boolean>(false);

  const changeVisibility = () => {
    openHiddenMenu ? setOpenHiddenMenu(false) : setOpenHiddenMenu(true);
  };

  return (
      <>
        {openHiddenMenu ? (
            <div className="small-menu__box">
              <button className="small-menu__icon-btn" onClick={changeVisibility}>
                <img src="./icons/show-menu-icon.svg" alt="Show menu icon"/>
              </button>
              <div className="small-menu__buttons-box">
                <HashLink
                    className="small-menu__btn"
                    smooth
                    to="/#home"
                    onClick={changeVisibility}
                >
                  Home
                </HashLink>
                <HashLink
                    className="small-menu__btn"
                    smooth
                    to="/#about-us"
                    onClick={changeVisibility}
                >
                  About us
                </HashLink>
                <HashLink
                    className="small-menu__btn"
                    smooth
                    to="/#advice"
                    onClick={changeVisibility}
                >
                  Advice
                </HashLink>
                <HashLink
                    className="small-menu__btn"
                    smooth
                    to="/#contact"
                    onClick={changeVisibility}
                >
                  Contact
                </HashLink>
              </div>
            </div>
        ) : (
            <div>
              <button className="small-menu__icon-btn" onClick={changeVisibility}>
                <img src="./icons/show-menu-icon.svg" alt="Show menu icon"/>
              </button>
            </div>
        )}
      </>
  );
};
