import React from 'react';
import { Routes } from '../../utils/Routes';

import styles from './Footer.module.scss';

const className = (route: Routes): string => {
  const isActive = window.location.pathname === route;

  return isActive ? 'active' : '';
}

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerColumn}>
        <h3>Quick Links</h3>
        <div className={styles.quickLinksContainer}>
          <a href={Routes.CAKES} className={className(Routes.CAKES)}>Cakes</a>
          <a href={Routes.CUPCAKES} className={className(Routes.CUPCAKES)}>Cupcakes</a>
          <a href={Routes.COOKIES} className={className(Routes.COOKIES)}>Cookies</a>
          <a href={Routes.CUSTOMS} className={className(Routes.CUSTOMS)}>Customs</a>
          <a href={Routes.FAQ} className={className(Routes.FAQ)}>FAQ</a>
        </div>
      </div>
      <div className={styles.footerColumn}>
        <h3>About Me</h3>
        <p>I'm a bad bitch and a good baker 😛.</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Contact Us</h3>
        <p style={{ marginBottom: 0 }}>Have questions or want to place an order? You can reach out to us through...</p>
        <ul className={styles.contactList}>
          <li>Instagram: @mo.cakes.bakery</li>
          <li>Email: mocakes@bakery.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
