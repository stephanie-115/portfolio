import React from "react";
import styles from "./FlipCard.module.css";

const CardIcons = ({ websiteIcon, githubIcon, websiteUrl, githubUrl }) => {
  return (
    <div className={styles.iconContainer}>
      {websiteIcon && websiteUrl && (
        <div>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <img src={websiteIcon} alt="Website" className={styles.icon} />
          </a>
        </div>
      )}
      <div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default CardIcons;
