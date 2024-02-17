import React, { useState } from "react";
import FlipCard from "./FlipCard";

export default function Card({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <FlipCard key={index} card={card}/>
      ))}
    </>
  );
}
