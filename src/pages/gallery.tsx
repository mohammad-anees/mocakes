import React from 'react';

import { Images as GalleryImages } from '../utils/GalleryImages';
import { Page } from '../components';

import styles from '../styles/gallery.module.scss';

const Gallery: React.FC = () => {
  return (
    <Page title='Gallery'>
      <div className={styles.gallery}>
        {GalleryImages.map(({ image, name, alt}) => (
          <div className={styles.galleryItem}>
            <img src={image} alt={alt ?? name} />
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Gallery;
