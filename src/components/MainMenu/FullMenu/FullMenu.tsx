import React from "react";
import {HashLink} from "react-router-hash-link";
import "../MainMenu.scss";

type MainMenuProps = {
    scrollPosition: number;
};

export const FullMenu = ({scrollPosition}: MainMenuProps) => {
    return (
        <div className="main-menu__box">
            <HashLink
                className={
                    !scrollPosition
                        ? "main-menu__btn"
                        : "main-menu__btn after-scroll__btn"
                }
                smooth
                to="/#home"
            >
                Home
            </HashLink>
            <HashLink
                className={
                    !scrollPosition
                        ? "main-menu__btn"
                        : "main-menu__btn after-scroll__btn"
                }
                smooth
                to="/#about-us"
            >
                About us
            </HashLink>
            <HashLink
                className={
                    !scrollPosition
                        ? "main-menu__btn"
                        : "main-menu__btn after-scroll__btn"
                }
                smooth
                to="/#advice"
            >
                Advice
            </HashLink>
            <HashLink
                className={
                    !scrollPosition
                        ? "main-menu__btn"
                        : "main-menu__btn after-scroll__btn"
                }
                smooth
                to="/#contact"
            >
                Contact
            </HashLink>
        </div>
    );
};
