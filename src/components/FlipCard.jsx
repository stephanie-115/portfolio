import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./FlipCard.module.css";

const FlipCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const [allowClick, setAllowClick] = useState(true);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    onRest: () => setAllowClick(true),
  });

  const websiteHref = card.website?.props?.href;
  const githubHref = card.github?.props?.href;

  const handleIconClick = (event, url) => {
    if (allowClick) {
      event.stopPropagation();
      window.open(url, "_blank");
      setFlipped(false);
      setAllowClick(false);
    }
  };

  return (
    <div className={styles.container} onClick={() => setFlipped((state) => !state)}>
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
        <div className={styles.iconcontainer}>
          {card.websiteUrl && (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleIconClick(e, websiteHref)}
            >
              <img
                src={card.websiteIcon}
                alt={`Visit ${card.title} website`}
                className={styles.icon}
              />
            </a>
          )}
          {card.githubUrl && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleIconClick(e, githubHref)}
            >
              <img
                src={card.githubIcon}
                alt={`Visit ${card.title} GitHub Repo`}
                className={styles.icon}
              />
            </a>
          )}
        </div>
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
    </div>
  );
};

export default FlipCard;