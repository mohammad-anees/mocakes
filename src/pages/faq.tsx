import React from 'react';

import { Page, ListSection } from '../components';

import styles from '../styles/faq.module.scss';
import { FAQS } from '../utils/Guides';

const Faq: React.FC = () => {
  return (
    <Page 
      title='Frequently Asked Questions'>
        <div className={styles.faqContainer}>
          <ListSection
            id='FAQ'
            listItems={FAQS}
          />
        </div>
    </Page>
  );
}

export default Faq;
