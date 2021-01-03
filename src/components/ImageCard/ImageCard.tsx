import React, { useCallback } from 'react';

import { Routes } from '../../utils/Routes';
import styles from './ImageCard.module.scss';

interface ImageCardProps {
  title: string;
  subtitle: string;
  route?: Routes;
  image: string;
  backgroundColor?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, subtitle, route, image, backgroundColor }) => {
  const containerStyles = route ? `${styles.cardContainer} ${styles.clickable}` : styles.cardContainer;
  const handleClick = useCallback(() => {
    if (route) window.location.pathname = route;
  }, [route])

  return (
    <div
      className={containerStyles}
      style={{ backgroundColor: backgroundColor ?? '' }}
      onClick={handleClick}
    >
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
