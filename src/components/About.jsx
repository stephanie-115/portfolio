import React from 'react';
import typescript from '../assets/typescript.png';
import graphql from '../assets/graphql-logo.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import postgresql from '../assets/postgresql.png';
import react from '../assets/react.png';
import redis from '../assets/redis.png';
import express from '../assets/express.png';
import javascript from '../assets/javascript.png';
import jest from '../assets/jest.png';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-textbox">
          <div className="center-text">
            <h2>a b o u t</h2>
          </div>
          <p>
            I'm a New York City-based software engineer, driven by a desire
            to create impactful products that help people. Although my
            background lies in educatioin, I'm fueled by a deep love for
            problem-solving, building, and finding creative solutions.
            <br />
            <br />
            I'm proficient in JavaScript, TypeScript, React, Express, Node,
            various SQL and NoSQL databases, GraphQL, HTML, and CSS.
            Additionally, I've gained experience with Cypress and Jest for
            testing, demonstrating my commitment to quality assurance.
            <br />
            <br />
            My background in communication and education instilled in me the
            importance of understanding diverse needs and fostering supportive
            environments. These transferable skills, coupled with my strong work
            ethic and unwavering enthusiasm, make me a valuable asset to any
            team. I'm particularly drawn to environments that value
            diversity, collaboration, and continuous learning. <br />
            <br />
            In my free time, you can find me curled up with a good book
            (readying for my annual Goodreads goal of 30!). Additionally,
            I'm passionate about canine nutrition and creating personalized
            meals for my chunky English Bulldog, Stanley. <br /><br />
          </p>
          <div className='about-icon-container'>
          <img src={typescript} title='Typescript Logo'/>
          <img src={graphql} title='GraphQL Logo'/>
          <img src={mongodb} title='MongoDB Logo'/>
          <img src={express} title='Express Logo'/>
          <img src={javascript} title='JavaScript Logo'/>
          <img src={mysql} title='MySQL Logo'/>
          <img src={node} title='Node.js Logo'/>
          <img src={postgresql} title='PostgreSQL Logo'/>
          <img src={react} title='React Logo'/>
          <img src={redis} title='Redis Logo'/>
          <img src={jest} title='Jest Logo'/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
