import React, { useState } from "react";

export default function Card({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="content">
            <h3>{card.title}</h3>
            <br />
            <img src={card.image} alt={card.title} className="image-card" />
          </div>
        </div>
      ))}
    </>
  );
}
