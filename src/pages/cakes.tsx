import React from 'react';

import { Routes } from '../utils/Routes';
import { Page, ImageCard, EmptySpace, ListSection } from '../components';

import styles from '../styles/cakes.module.scss';

import CakeImagePlaceholder from '../../static/cakes-page/cakes.png';

const SIZES = [
  { 
    label: 'Small (12-14 servings)',
    description: '6 inches in diameter and 6 inches tall (not including flowers or other cake toppers)',
  },
  {
    label: 'Large (20-25 servings)',
    description: '8 inches in diameter and 6 inches tall (not including flowers or other cake toppers)',
  },
];

const FLAVORS = [
  {
    label: 'Original:',
    description: 'Vanilla with vanilla buttercream',
  },
  {
    label: 'Double Chocolate:',
    description: 'Chocolate with a silky chocolate mousse filling and vanilla buttercream',
  },
  {
    label: 'Salted Caramel:',
    description: 'Chocolate cake with a salted caramel filling and caramel buttercream',
  },
  {
    label: 'Biscoff:',
    description: 'Vanilla cake with Biscoff butter buttercream and Biscoff crumble',
  },
  {
    label: 'Tiramisu:',
    description: 'Espresso soaked vanilla cake with mascarpone buttercream and coffee/chocolate filling',
  },
  {
    label: 'Lemon:',
    description: 'Lemon cake with a lemon cream cheese buttercream',
  },
  {
    label: 'Red Velvet:',
    description: 'Red velvet cake with a cream cheese frosting',
  },
  {
    label: 'Birthday:',
    description: 'Vanilla cake with sprinkles and white chocolate chips and a sprinkle filled vanilla buttercream',
  },
];

const Cakes: React.FC = () => {
  return (
    <Page
      title='The Cakes'
      subtitle='These are signature/most popular designs that we are best at. We are constantly testing out new designs and flavors and adding to the collection so check back for more. The designs are semi customizable with the size, colors, flavors, and/ or toppers added.'
    >
      <div className={styles.cakesContainer}>
        <div className={styles.pageControlsContainer}>
          <a href='#flavors'>Flavors</a>
          <a href='#sizes'>Sizes</a>
        </div>
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
        <div className={styles.cakeOptionsContainer}>
          <ListSection
            title='Flavor Guide'
            listItems={FLAVORS}
            id='flavors'
          />
          <ListSection
            title='Size Guide'
            listItems={SIZES}
            id='sizes'
          />
        </div>
      </div>
    </Page>
  );
}

export default Cakes;
