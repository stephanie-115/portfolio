import React from "react";
import Card from './PortfolioCard';
import dog from '../assets/bulldog.png';
import plant from '../assets/plant.png';
import graphql from '../assets/graphql.png';
import plane from '../assets/plane.png';
import cookboook from '../assets/cookbook.png';
import produce from '../assets/produce.png';

const cardsData = [
  {
    title: 'NutriPup',
    image: dog,
    description: 'NutriPup NutriPup NutriPup NutriPup NutriPup NutriPup ',
  },
  {
    title:'GreenPets',
    image: plant,
    description: 'GreenPets GreenPets GreenPets GreenPets GreenPets GreenPets ',
  },
  {
    title:'Vista',
    image: graphql,
    description: 'Vista Vista Vista Vista Vista Vista',
  },
  {
    title:'Wingman',
    image: plane,
    description: 'Wingman Wingman Wingman Wingman Wingman Wingman ',
  },
  {
    title:'Grandma\'s Cookbook',
    image: cookboook,
    description: 'Grandma\'s Cookbook Grandma\'s Cookbook Grandma\'s Cookbook Grandma\'s Cookbook ',
  },
  {
    title:'In Season Locally',
    image: produce,
    description: 'In Season Locally In Season Locally In Season Locally In Season Locally',
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
