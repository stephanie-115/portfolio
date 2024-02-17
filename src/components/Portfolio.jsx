import React from "react";
import Card from './PortfolioCard';
import dog from '../assets/bulldog.png';
import plant from '../assets/plant.png';
import graphql from '../assets/graphql.png';
import plane from '../assets/plane.png';
import cookboook from '../assets/cookbook.png';
import produce from '../assets/produce.png';
import vistaMockup from '../assets/vista-mockup.png';

const cardsData = [
  {
    title: 'NutriPup',
    image: dog,
    description: "Fuel your pup's joy – Tailored nutrition, AI recipes, and personalized dog profiles.",
    mockup: vistaMockup,
  },
  {
    title:'GreenPets',
    image: plant,
    description: "Nurture your green haven – Find, nurture, and adore your perfect plant match.",
    mockup: vistaMockup,
  },
  {
    title:'Vista',
    image: graphql,
    description: "Reimagine GraphQL – Visualize, explore, and generate queries effortlessly.",
    mockup: vistaMockup,
  },
  {
    title:'Wingman',
    image: plane,
    description: "Fly smart, fly seamless – Your flight companion with Amadeus API integration.",
    mockup: vistaMockup,
  },
  {
    title:'Grandma\'s Cookbook',
    image: cookboook,
    description: "Timeless flavors, modern convenience – Grandma's recipes with a Tasty API twist.",
    mockup: vistaMockup,
  },
  {
    title:'In Season Locally',
    image: produce,
    description: "Local freshness, global taste – Personalized produce picks and vendor reviews.",
    mockup: vistaMockup,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>p o r t f o l i o</h2>
        <Card cards={cardsData}/>
      </div>
    </section>
  );
}
