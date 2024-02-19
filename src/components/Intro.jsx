import React from "react";
import background from "../assets/background1.jpeg";
import avatar from "../assets/steph2.png";
import { Reveal } from "./Reveal";

function Intro() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={background} className="background" />
        <div className="foreground-container">
          <Reveal>
            <img src={avatar} className="foreground" />
          </Reveal>
        </div>
        <div className="text-content">
          <Reveal>
            <h1 className="title">Hi 👋🏽 I&apos;m Steph,</h1>
          </Reveal>
          <Reveal>
            <p className="subtitle">a Software Engineer from New York.</p>
          </Reveal>
        </div>
      </header>
    </div>
  );
}

export default Intro;
