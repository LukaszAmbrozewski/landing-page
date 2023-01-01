import React from "react";
import "./HomeSection.scss";
import {HomeBtn} from "./HomeBtn/HomeBtn";

export const HomeSection = () => {
    return (
        <div className="home-box">
            <div className="home-box__description-section">
                <h1 className="home-box__main-header">EMPOWER YOUR BUSINESS</h1>
                <p className="home-box__description">
                    We know how large objects will act, but things on a small scale.
                </p>
                <div className="home-box__buttons-box">
                    <HomeBtn text="Get Quote Now" onClick={() => {
                    }}/>
                    <HomeBtn text="Learn More" transparent={true} onClick={() => {
                    }}/>
                </div>
            </div>
            <img
                src="./images/home-person-photo.svg"
                alt="Person image"
                className="home-box__person-image"
            />
        </div>
    );
};
