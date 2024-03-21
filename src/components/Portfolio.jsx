import React from "react";
import Card from "./PortfolioCard";
import dog from "../assets/bulldog.png";
import plant from "../assets/plant.png";
import graphql from "../assets/graphql.png";
import plane from "../assets/plane.png";
import cookboook from "../assets/cookbook.png";
import produce from "../assets/produce.png";
import vista from "../assets/vista-mockup.png";
import nutripup from "../assets/nutripup-mockup.png";
import wingman from "../assets/wingman-mockup.png";
import greenpets from "../assets/greenpets-mockup.png";
import underConstruction from "../assets/construction.png";
import githubIcon from "../assets/github.png";
import websiteIcon from "../assets/website.png";
import grandma from "../assets/grandma.png";
import locally from "../assets/locally.png";
import { Reveal } from "./Reveal";

const cardsData = [
  {
    title: "GreenPets",
    image: plant,
    description:
      "Nurture your green haven – Find, nurture, and adore your perfect plant match.",
    mockup: greenpets,
    websiteIcon,
    githubIcon,
    websiteUrl: "https://greenpets.netlify.app/",
    githubUrl: "https://github.com/Los-Terremotos/GreenPets",
  },
  {
    title: "Vista",
    image: graphql,
    description:
      "Reimagine GraphQL – Visualize, explore, and generate queries effortlessly.",
    mockup: vista,
    websiteIcon,
    githubIcon,
    websiteUrl: "https://www.vistavisualizer.com/",
    githubUrl: "https://github.com/oslabs-beta/vista",
  },
  {
    title: "NutriPup",
    image: dog,
    description:
      "Fuel your pup's joy – Tailored nutrition, AI recipes, and personalized dog profiles.",
    mockup: nutripup,
    githubIcon,
    githubUrl: "https://github.com/stephanie-115/nutripup",
  },
  {
    title: "Wingman",
    image: plane,
    description:
      "Fly smart, fly seamless – Your flight companion with Amadeus API integration.",
    mockup: wingman,
    githubIcon,
    githubUrl: "https://github.com/project-wing-man/wingman",
  },
  {
    title: "Grandma's Cookbook",
    image: cookboook,
    description:
      "Timeless flavors, modern convenience – Grandma's recipes with a Tasty API twist.",
    mockup: grandma,
    githubIcon,
    githubUrl: "https://github.com/Avatar-Group/Grandmas-Cookbook-v2",
  },
  {
    title: "In Season Locally",
    image: produce,
    description:
      "Local freshness, global taste – Personalized produce picks and vendor reviews.",
    mockup: locally,
    githubIcon,
    githubUrl: "https://github.com/inseasonlocally/inseasonlocally",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>p o r t f o l i o</h2>
        <Card cards={cardsData} />
        <div className="container-spacing"></div>
      </div>
    </section>
  );
}
