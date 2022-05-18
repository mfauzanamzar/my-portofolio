import React from "react";
import "./Content.css";
import Navbar from "./Navbar";
import AyoJogja from "../images/AyoJogja.png";
import Sicov from "../images/Sicov.png";
import HDRO from "../images/hdro.png";

const Content = () => {
  const status = "active-porto";
  return (
    <div>
      <Navbar active={status} />
      <div className="content">
        <div className="content-item">
          <img className="test-image" src={AyoJogja} alt="AyoJogja"/>
          <div className="item__text">
            <p className="item-text__name">
              <a href="https://ayojogja.netlify.app" target="_blank">AyoJogja</a>
            </p>
            <p className="item-text__desc">
              Website informasi objek wisata alam dan ppkm di Daerah Istimewa
              Yogyakarta
            </p>
            <div className="item-text__tech">
              <p className="tech">ReactJS</p>
              <p className="tech">Contentful</p>
            </div>
          </div>
        </div>

        <div className="border-container">
          <div className="border-line line-content"></div>
        </div>

        <div className="content-item">
          <img className="test-image" src={Sicov} alt="Sicov"/>
          <div className="item__text">
            <p className="item-text__name">
              <a href="https://indonesia-covid-19.netlify.app/" target="_blank">
                Sicov (Informasi Covid-19)
              </a>
            </p>
            <p className="item-text__desc">
              Website informasi kasus covid-19 di Indonesia
            </p>
            <div className="item-text__tech">
              <p className="tech">ReactJS</p>
              <p className="tech">PublicAPI</p>
            </div>
          </div>
        </div>
        <div className="border-container">
          <div className="border-line line-content"></div>
        </div>
        <div className="content-item">
          <img className="test-image" src={HDRO} alt="AyoJogja"/>
          <div className="item__text">
            <p className="item-text__name">
              <a href="https://hdro2022.netlify.app/" target="_blank">Landing Page HDRO</a>
            </p>
            <p className="item-text__desc">
              Website Landing Page HDRO Tech
            </p>
            <div className="item-text__tech">
              <p className="tech">ReactJS</p>
            </div>
          </div>
        </div>

        <div className="border-container">
          <div className="border-line line-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
