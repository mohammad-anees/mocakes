import React from 'react';

import { Routes } from '../../utils/Routes';
import styles from './ImageCard.module.scss';

interface ImageCardProps {
  title: string;
  subtitle: string;
  route?: Routes;
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, subtitle, route, image }) => {
  const containerStyles = route ? `${styles.cardContainer} ${styles.clickable}` : styles.cardContainer;

  return (
    <div className={containerStyles} onClick={() => window.location.pathname=route }>
      <div className={styles.cardImageContainer}>
        <img src={image} className={styles.cardImage} />
      </div>
      <div className={styles.cardContentContainer}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default ImageCard;
