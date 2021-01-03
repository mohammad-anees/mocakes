import React from 'react';

import { Page, ImageCard, EmptySpace } from '../components';

import styles from '../styles/cookies.module.scss';
import cookiesPlaceholder from '../../static/cookies-page/cookie-cake.png';

const Cookies: React.FC = () => {
  return (
    <Page 
      title='The Cookies'
      subtitle='Choose a box of your favorite cookie flavors or order a decorated cookie cake.'
    >
      <div className={styles.cookiesContainer}>
        <div className={styles.cookiesCardRow}>
          <ImageCard
            title='Chocolate Chunk'
            subtitle='$18 Half Dozen - $36 Dozen'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Red Velvet'
            subtitle='$9 Half Dozen - $18 Dozen'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Brookie'
            subtitle='$9 Half Dozen - $18 Dozen'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
        </div>
        <div className={styles.cookiesCardRow}>
          <ImageCard
            title='Birthday Cake'
            subtitle=' $9 Half Dozen - $18 Dozen'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Biscoff'
            subtitle='$10 Half Dozen - $20 Dozen'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Mixed Box'
            subtitle='Box With All Your Faves - Pricing Varies'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
        </div>
        <div className={styles.cookiesCardRow}>
          <ImageCard
            title='9 Inch Cookie Cake'
            subtitle='Chocolate Chip or Brookie Cake - $25'
            image={cookiesPlaceholder}
            backgroundColor='white'
          />
          <EmptySpace />
          <EmptySpace />
        </div>
      </div>
    </Page>
  );
}

export default Cookies;
