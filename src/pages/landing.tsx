import React from 'react';

import ImageHero from '../components/ImageHero';
import PageSection from '../components/PageSection/PageSection';

import styles from '../styles/Landing.module.scss';

interface ContactItem {
  medium: string;
  label: string;
  link?: URL;
}

const CONTACTS_LIST: ContactItem[] = [
  { medium: 'instagram', label: '@mocakesmoproblems', link: new URL(`https://www.google.com`) },
  { medium: 'email', label: 'mocakes@gmail.com', link: new URL(`mailto:mocakes@gmail.com`) },
];

const Landing: React.FC = () => {
  return (
    <>
      <ImageHero title="Mo'" titleB="Cakes" subtitle='Bakery' />
      <PageSection
        height="400px"
        theme="pink"
        title="Order"
        message="You can reach out to me on instagram or through email to put in an order. 
        Please give me at least 2 weeks notice. Some more text some more text
        some more text some more text.">
          <div className={styles.contactInfoContainer}>
            {CONTACTS_LIST.map((contactItem) => (
              <div className={styles.item} key={contactItem.label}>
                <p>
                  <b>{contactItem.medium}: </b>
                  <a href={contactItem.link?.toString()}>{contactItem.label}</a>
                </p>
              </div>
            ))}
          </div>
      </PageSection>
    </>
  );
};

export default Landing;
