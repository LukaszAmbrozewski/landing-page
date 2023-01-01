import React from "react";
import "./ServiceBox.scss";

type ServicesBoxProps = {
    isBlue?: boolean;
    onClick?: () => void;
    icon: string;
    text: string;
};

export const ServiceBox = ({isBlue, icon, text}: ServicesBoxProps) => {
    return (
        <div className={isBlue ? "service__box service__blue" : "service__box"}>
            <img src={icon} alt="Service icon"/>
            <br/>
            {text}
        </div>
    );
};
