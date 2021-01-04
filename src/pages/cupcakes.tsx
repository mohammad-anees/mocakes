import React from 'react';

import { CUPCAKE_FLAVORS } from '../utils/Guides';
import { Page, ImageCard, ListSection } from '../components';

import styles from '../styles/cupcakes.module.scss';
import cupcakesPlaceholder from '../../static/cupcakes-page/cupcakes.png';

const CupCakes: React.FC = () => {
  return (
    <Page
      title='The Cupcakes'
      subtitle='These are signature/most popular designs that we are best at. We are constantly testing out new
      designs and flavors and adding to the collection so check back for more. The designs are semi
      customizable with the size, colors, flavors, and/ or toppers added. Choose your colors and we will do the
      rest.'
    >
      <div className={styles.pageControlsContainer}>
        <a className='button' href='#flavors'>Flavors</a>
      </div>
      <div className={styles.cupcakesContainer}>
        <div className={styles.cupcakesCardRow}>
          <ImageCard
            title='Regular Cupcake Set'
            subtitle='$18 half dozen - $36 dozen'
            image={cupcakesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Cupcake Flower Set'
            subtitle='$22 half dozen - $44 dozen'
            image={cupcakesPlaceholder}
            backgroundColor='white'
          />
          <ImageCard
            title='Happy Birthday Set'
            subtitle='$22 half dozen - $44 dozen'
            image={cupcakesPlaceholder}
            backgroundColor='white'
          />
        </div>
      </div>
      <div className={styles.cupcakeOptionsContainer}>
        <ListSection
          title='Flavor Guide'
          id='flavors'
          listItems={CUPCAKE_FLAVORS}
        />
      </div>
    </Page>
  );
}

export default CupCakes;
