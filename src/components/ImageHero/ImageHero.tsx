import React from 'react';

import styles from './ImageHero.module.scss';

interface ImageHeroProps {
  title: string;
  titleB?: string;
  subtitle: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ title, titleB, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>{titleB}</h1>
        <h5 className={styles.subtitle}>{subtitle}</h5>
      </div>
    </div>
  );
}

export default ImageHero;
