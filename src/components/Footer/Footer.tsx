import React from 'react';
import { Routes } from '../../utils/Routes';

import styles from './Footer.module.scss';

import InstagramLogo from './InstagramLogo';
import EmailIcon from './EmailIcon';

const className = (route: Routes): string => {
  const isActive = typeof window !== 'undefined' ? window.location.pathname === route : false;

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
          <a href={Routes.GALLERY} className={className(Routes.GALLERY)}>Gallery</a>
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
        <div className={styles.contactList}>
          <div className={styles.contact}>
            <a className='button' href='https://www.instagram.com/mo.cakes.bakery/'>
              <InstagramLogo />
              @mo.cakes.bakery
            </a>
          </div>
          <div>
            <a  className='button' href="mailto:orders@mocakesbakery.com?subject=Inquiry">
              <EmailIcon fill='white' />
              orders@mocakesbakery.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
