import React from 'react';

import { Routes } from '../utils/Routes';
import { Page, ImageCard, EmptySpace } from '../components';

import styles from '../styles/cakes.module.scss';

import CakeImagePlaceholder from '../../static/cakes-page/cakes.png';

const Cakes: React.FC = () => {
  return (
    <Page
      title='The Cakes'
      subtitle='These are signature/most popular designs that we are best at. We are constantly testing out new designs and flavors and adding to the collection so check back for more. The designs are semi customizable with the size, colors, flavors, and/ or toppers added.'
    >
      <div className={styles.cakesContainer}>
        <div className={styles.cakesCardRow}>
          <ImageCard
            title='Naked'
            subtitle='$50 - $65'
            image={CakeImagePlaceholder}
            route={Routes.HOME}
            backgroundColor='white'
          />
          <ImageCard
            title='Semi-Naked'
            subtitle='$50 - $65'
            image={CakeImagePlaceholder}
            route={Routes.HOME}
            backgroundColor='white'
          />
          <ImageCard
            title='Monochrome'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            route={Routes.HOME}
            backgroundColor='white'
          />
        </div>
        <div className={styles.cakesCardRow}>
          <ImageCard
            title='Drip'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            route={Routes.HOME}
            backgroundColor='white'
          />
          <ImageCard
            title='Painted Buttercream'
            subtitle='$65 - $85'
            image={CakeImagePlaceholder}
            route={Routes.HOME}
            backgroundColor='white'
          />
          <EmptySpace />
        </div>
      </div>
    </Page>
  );
}

export default Cakes;
