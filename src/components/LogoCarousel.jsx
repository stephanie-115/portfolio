import React from "react";
import typescript from "../assets/typescript.png";
import graphql from "../assets/graphql-logo.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgresql.png";
import react from "../assets/react.png";
import redis from "../assets/redis.png";
import express from "../assets/express.png";
import javascript from "../assets/javascript.png";
import jest from "../assets/jest.png";

export default function LogoCarousel() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={typescript} title="Typescript Logo" />
        <img src={graphql} title="GraphQL Logo" />
        <img src={mongodb} title="MongoDB Logo" />
        <img src={express} title="Express Logo" />
        <img src={javascript} title="JavaScript Logo" />
        <img src={mysql} title="MySQL Logo" />
        <img src={node} title="Node.js Logo" />
        <img src={postgresql} title="PostgreSQL Logo" />
        <img src={react} title="React Logo" />
        <img src={redis} title="Redis Logo" />
        <img src={jest} title="Jest Logo" />
      </div>
      <div className="logos-slide">
        <img src={typescript} title="Typescript Logo" />
        <img src={graphql} title="GraphQL Logo" />
        <img src={mongodb} title="MongoDB Logo" />
        <img src={express} title="Express Logo" />
        <img src={javascript} title="JavaScript Logo" />
        <img src={mysql} title="MySQL Logo" />
        <img src={node} title="Node.js Logo" />
        <img src={postgresql} title="PostgreSQL Logo" />
        <img src={react} title="React Logo" />
        <img src={redis} title="Redis Logo" />
        <img src={jest} title="Jest Logo" />
      </div>
    </div>
  );
}
