import React from "react";
import {Header} from "../../components/Header/Header";
import {HomeSection} from "../../components/HomeSection/HomeSection";
import {AboutUsSection} from "../../components/AboutUsSection/AboutUsSection";
import "../../style/main.scss";

export const Main = () => {
    return (
        <div className="main-view">
            <section id="header">
                <Header/>
            </section>
            <section id="home">
                <HomeSection/>
            </section>
            <section id="about-us">
                <AboutUsSection/>
            </section>
        </div>
    );
};
