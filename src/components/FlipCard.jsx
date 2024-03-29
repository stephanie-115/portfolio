import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./FlipCard.module.css";
import CardIcons from "./CardIcons";
``
const FlipCard = ({ card }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <img
          src={card.mockup}
          alt={card.mockup}
          className={`${styles.backcard}`}
        />
      </a.div>
      <a.div
        className={`${styles.card} ${styles.front}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <div className={`${styles.card}`}>
          <h3>{card.title}</h3>
          <br />
          <br />
          <p>{card.description}</p>
          <img src={card.image} alt={card.title} />
        </div>
      </a.div>
        <CardIcons
          websiteIcon={card.websiteIcon}
          githubIcon={card.githubIcon}
          websiteUrl={card.websiteUrl}
          githubUrl={card.githubUrl}
        />
    </div>
  );
};

export default FlipCard;
