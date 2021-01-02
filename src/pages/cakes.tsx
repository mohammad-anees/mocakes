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
          <div className={styles.cakeOptionsRow} id='flavors'>
            <h2>Flavor Guide</h2>
            <p><b>Original:</b><br/>Vanilla with vanilla buttercream</p>
            <p><b>Double Chocolate:</b><br/>Chocolate with a silky chocolate mousse filling and vanilla buttercream</p>
            <p><b>Salted Caramel:</b><br/>Chocolate cake with a salted caramel filling and caramel buttercream</p>
            <p><b>Biscoff:</b><br/>Vanilla cake with Biscoff butter buttercream and Biscoff crumble</p>
            <p><b>Tiramisu:</b><br/>Espresso soaked vanilla cake with mascarpone buttercream and coffee/chocolate fillin</p>
            <p><b>Lemon:</b><br/>Lemon cake with a lemon cream cheese buttercream</p>
            <p><b>Red Velvet:</b><br/>Red velvet cake with a cream cheese frosting</p>
            <p><b>Birthday:</b><br/>Vanilla cake with sprinkles and white chocolate chips and a sprinkle filled vanilla buttercream</p>
          </div>
          <div className={styles.cakeOptionsRow} id='sizes'>
            <h2>Size Guide</h2>
            <p>
              <b>Small (12-14 servings)</b><br/>
              6 inches in diameter and 6 inches tall (not including flowers or other cake toppers)
            </p>
            <p>
              <b>Large (20-25 servings)</b><br/>
              8 inches in diameter and 6 inches tall (not including flowers or other cake toppers) <br/>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Cakes;
