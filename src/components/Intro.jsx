//import React from "react";
import background from '../assets/background1.jpeg';
import avatar from '../assets/steph2.png';

function Intro() {
  return(
    <div className='wrapper'>
    <header className="header">
    <img src={background} className="background" />
    <div className="foreground-container">
      <img src={avatar} className="foreground" />
    </div>
    <div className="text-content">
      <h1 className="title">Hi 👋🏽 I&apos;m Steph,</h1>
      <p className="subtitle">a Software Engineer from New York.</p>
    </div>
  </header>
  </div>
  )
}

export default Intro;