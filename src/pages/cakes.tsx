import React from 'react';

import { CAKE_FLAVORS, CAKE_SIZES } from '../utils/Guides';
import { Page, ImageCard, EmptySpace, ListSection } from '../components';

import styles from '../styles/cakes.module.scss';

import CakeImagePlaceholder from '../../static/cakes-page/cakes.png';

const Cakes: React.FC = () => {
  return (
    <Page
      title='The Cakes'
      subtitle='These are signature/most popular designs that we are best at. We are constantly testing out new designs and flavors and adding to the collection so check back for more. The designs are semi customizable with the size, colors, flavors, and/ or toppers added.'
    >
      <div className={styles.cakesContainer}>
        <div className={styles.pageControlsContainer}>
          <a className='button' href='#flavors'>Flavors</a>
          <a className='button' href='#sizes'>Sizes</a>
        </div>
        <div className={styles.cakesCardRow}>
          <ImageCard
            title='Naked'
            subtitle='$50 - $65'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Semi-Naked'
            subtitle='$50 - $65'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Monochrome'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
        </div>
        <div className={styles.cakesCardRow}>
          <ImageCard
            title='Drip'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Painted Buttercream'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Custom Design'
            subtitle='Starting at $80'
            image={CakeImagePlaceholder}
            backgroundColor='white'
          />
        </div>
        <div className={styles.cakeOptionsContainer}>
          <ListSection
            title='Flavor Guide'
            listItems={CAKE_FLAVORS}
            id='flavors'
          />
          <ListSection
            title='Size Guide'
            listItems={CAKE_SIZES}
            id='sizes'
          />
        </div>
      </div>
    </Page>
  );
}

export default Cakes;
