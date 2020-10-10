import React from 'react';

import styles from './ImageHero.module.css';

interface ImageHeroProps {
  title: string;
  subtitle: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default ImageHero;
