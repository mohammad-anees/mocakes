import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.scss';

const Page: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>{children}</div>
      <Footer />
    </div>
  )
}

export default Page;
