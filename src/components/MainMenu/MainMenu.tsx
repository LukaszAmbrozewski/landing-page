import React from "react";
import {useMediaQuery} from "react-responsive";
import "./MainMenu.scss";
import {FullMenu} from "./FullMenu/FullMenu";
import {HiddenMenu} from "./HiddenMenu/HiddenMenu";

type MainMenuProps = {
  scrollPosition: number;
};

export const ManinMenu = ({scrollPosition}: MainMenuProps) => {
  const isHiddenMenu = useMediaQuery({maxWidth: 600});

  return (
      <>
        {isHiddenMenu ? (
            <HiddenMenu/>
        ) : (
            <FullMenu scrollPosition={scrollPosition}/>
        )}
      </>
  );
};
